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
    const fragment = document.createDocumentFragment();
    const divWrapper = document.createElement("div");
    divWrapper.className = "color-wrapper";
    divWrapper.id = dataColor.color;

    const colorTitle = document.createElement("div");
    colorTitle.className = "color-title";
    colorTitle.textContent = dataColor.color;
    divWrapper.appendChild(colorTitle);

    const colorVessel = document.createElement("div");
    colorVessel.className = "color-vessel";

    for (const color of arr) {
        const colorDiv = document.createElement("div");
        colorDiv.className = "color";
        colorDiv.tabIndex = 0;
        const hexColor = dataColor[color];
        colorDiv.innerHTML = `<span>${stringToNumMap[color]}</span><span style="float: right">${hexColor}</span>`;
        colorDiv.style.cssText = `background-color: ${hexColor}; color: ${getContrastColor(hexColor)}`;
        colorVessel.appendChild(colorDiv);
    }

    divWrapper.appendChild(colorVessel);
    fragment.appendChild(divWrapper);
    divContent.appendChild(fragment);
}

function getContrastColor(hexColor) {
    const rgb = parseInt(hexColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 128 ? "rgba(0,0,0,.8)" : "rgba(255,255,255,.8)";
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

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
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
        const textToCopy = colorElement.querySelector("span:nth-child(2)").textContent;
        copyToClipboard(textToCopy);
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
        const colorElement = event.target.closest(".color");
        if (colorElement) {
            const textToCopy = colorElement.querySelector("span:nth-child(2)").textContent;
            copyToClipboard(textToCopy);
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