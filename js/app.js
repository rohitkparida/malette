var stringToNumMap = {
        fifty: "50",
        hundred: "100",
        twohundred: "200",
        threehundred: "300",
        fourhundred: "400",
        fivehundred: "500",
        sixhundred: "600",
        sevenhundred: "700",
        eighthundred: "800",
        ninehundred: "900",
        ahundred: "A100",
        atwohundred: "A200",
        afourhundred: "A400",
        asevenhundred: "A700"
    },
    accentKeys = [],
    primaryKeys = [],
    strNumMapKeys = Object.keys(stringToNumMap);
for (var ii = 0; ii < strNumMapKeys.length; ii++) {
    var currKey = stringToNumMap[strNumMapKeys[ii]];
    currKey[0] === "A" ? accentKeys.push(strNumMapKeys[ii]) : primaryKeys.push(strNumMapKeys[ii])
}
var divContent = $("div.content");

function createColorsFromKeyArr(dataColor, arr) {
    var divVesel = $("<div class=\"color-wrapper\" id=\"" + dataColor.color + "\"><div class=\"color-title\">" + dataColor.color + "</div><div class=\"color-vessel\"></div></div>");
    for (var cI = 0; cI < arr.length; cI++) {
        var color = arr[cI];
        divVesel.find(".color-vessel").append("<div class=\"color\"><span>" + stringToNumMap[color] + "</span><span style=\"float: right\">" + dataColor[color] + "</span></div>"), divVesel.find(".color-vessel .color:last-child").css("background-color", dataColor[color]), rgb(dataColor[color]).r * 0.299 + rgb(dataColor[color]).g * 0.587 + rgb(dataColor[color]).b * 0.114 > 128 ? divVesel.find(".color-vessel .color:last-child").css("color", "rgba(0,0,0,.8)") : divVesel.find(".color-vessel .color:last-child").css("color", "rgba(255,255,255,.8)")
    }
    divContent.append(divVesel)
}
$.ajax({
    url: "palette.json",
    dataType: "json",
    type: "get",
    cache: !1,
    success: function(data) {
        $(data.colors).each(function(i, item) {
            createColorsFromKeyArr(data.colors[i], primaryKeys), "y" === data.colors[i].accents && createColorsFromKeyArr(Object.assign({}, data.colors[i], {
                color: data.colors[i].color + " Accents"
            }), accentKeys), $("<a href=\"#" + data.colors[i].color + "\"><div class=\"" + data.colors[i].color + " btn\" style=\"background-color:" + data.colors[i].fivehundred + "\"></div></a>").appendTo("nav")
        })
    }
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2)
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
}

function rgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

// $(document).on("click", ".color", function() {
//     var textToCopy = $(this).find("span:nth-child(2)").text();
//     navigator.clipboard.writeText(textToCopy);
// });

$(document).on("click", ".color", function() {
    var textToCopy = $(this).find("span:nth-child(2)").text();
    navigator.clipboard.writeText(textToCopy);
    $("#snackbar").addClass("show");
    setTimeout(function() {
        $("#snackbar").removeClass("show");
    }, 3000);
});

// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("sw.js").then(function(registration) {
//         console.log("ServiceWorker registration successful with scope: ", registration.scope)
//     }).catch(function(err) {
//         console.log("ServiceWorker registration failed: ", err)
//     })
// };