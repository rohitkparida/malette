const divContent = document.querySelector(".content");
const nav = document.querySelector("nav");
const snackbar = document.getElementById("snackbar");
const darkModeToggle = document.getElementById("darkModeToggle");

const stringToNumMap = {
    fifty: "50", hundred: "100", twohundred: "200", threehundred: "300",
    fourhundred: "400", fivehundred: "500", sixhundred: "600",
    sevenhundred: "700", eighthundred: "800", ninehundred: "900",
    ahundred: "A100", atwohundred: "A200", afourhundred: "A400",
    asevenhundred: "A700"
};

const accentKeys = Object.keys(stringToNumMap).filter(key => stringToNumMap[key][0] === "A");
const primaryKeys = Object.keys(stringToNumMap).filter(key => stringToNumMap[key][0] !== "A");

function createColorsFromKeyArr(dataColor, arr) {
    const colorHtml = `
        <div class="color-wrapper" id="${dataColor.color}">
            <div class="color-title">${dataColor.color}</div>
            <div class="color-vessel">
                ${arr.map(color => {
                    const hexColor = dataColor[color];
                    const contrastClass = getContrastClass(hexColor);
                    return `
                        <div class="color ${contrastClass}" tabindex="0" style="background-color: ${hexColor};">
                            <span>${stringToNumMap[color]}</span>
                            <span class="hex-value">${hexColor}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    divContent.insertAdjacentHTML('beforeend', colorHtml);
}

function getContrastClass(hexColor) {
    const rgb = parseInt(hexColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 128 ? "dark-text" : "light-text";
}

function rgbToHex(rgb) {
    // Convert rgb(r, g, b) to #rrggbb
    return "#" + rgb.match(/\d+/g).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
}

function isLightColor(color) {
    // Ensure we're working with a hex color
    const hexColor = color.startsWith('#') ? color : rgbToHex(color);
    const rgb = parseInt(hexColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 128;
}

async function loadPalette() {
    try {
        const response = await fetch("palette.json");
        const data = await response.json();
        const fragment = document.createDocumentFragment();
        
        data.colors.forEach(item => {
            createColorsFromKeyArr(item, primaryKeys);
            if (item.accents === "y") {
                createColorsFromKeyArr({...item, color: item.color + " Accents"}, accentKeys);
            }
            const link = document.createElement("a");
            link.href = `#${item.color}`;
            link.tabIndex = 0;
            const div = document.createElement("div");
            div.className = `${item.color} btn`;
            div.style.backgroundColor = item[primaryKeys[4]];
            link.appendChild(div);
            fragment.appendChild(link);
        });
        
        nav.appendChild(fragment);
    } catch (error) {
        console.error("Error loading palette:", error);
    }
}

function copyToClipboard(text, color) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const isLight = isLightColor(color);
            const textColor = isLight ? 'black' : 'white';
            const borderColor = isLight ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)';
            snackbar.innerHTML = `📋 Hex <span style="background-color: ${color}; color: ${textColor}; padding: 2px 4px; border-radius: 3px; border: 1px solid ${borderColor};">${text}</span> copied!`;
            snackbar.classList.add("show");
            setTimeout(() => snackbar.classList.remove("show"), 3000);
        })
        .catch(err => console.error("Could not copy text: ", err));
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
}

document.addEventListener("click", event => {
    const colorElement = event.target.closest(".color");
    if (colorElement) {
        const textToCopy = colorElement.querySelector(".hex-value").textContent;
        const backgroundColor = colorElement.style.backgroundColor;
        copyToClipboard(textToCopy, backgroundColor);
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        const colorElement = event.target.closest(".color");
        if (colorElement) {
            const textToCopy = colorElement.querySelector(".hex-value").textContent;
            const backgroundColor = colorElement.style.backgroundColor;
            copyToClipboard(textToCopy, backgroundColor);
        }
    }
});

darkModeToggle.addEventListener("click", toggleDarkMode);

document.addEventListener("DOMContentLoaded", loadPalette);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(registration => console.log("ServiceWorker registration successful with scope: ", registration.scope))
        .catch(err => console.log("ServiceWorker registration failed: ", err));
}
