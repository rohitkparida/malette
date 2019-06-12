var stringToNumMap = {
  "fifty": "50",
  "hundred": "100",
  "twohundred": "200",
  "threehundred": "300",
  "fourhundred": "400",
  "fivehundred": "500",
  "sixhundred": "600",
  "sevenhundred": "700",
  "eighthundred": "800",
  "ninehundred": "900",
  "ahundred": "A100",
  "atwohundred": "A200",
  "afourhundred": "A400",
  "asevenhundred": "A700"
};


var accentKeys = [];
var primaryKeys = [];
var strNumMapKeys = Object.keys(stringToNumMap);
for (var ii = 0; ii < strNumMapKeys.length; ii++) {
  var currKey = stringToNumMap[strNumMapKeys[ii]];
  if (currKey[0] === "A") {
    accentKeys.push(strNumMapKeys[ii]);
  } else {
    primaryKeys.push(strNumMapKeys[ii]);
  }
}

var divContent = $("div.content");

function createColorsFromKeyArr(dataColor, arr) {
  var divVesel = $("" +
    "<div class=\"color-wrapper\" id=\"" + dataColor.color + "\">" +
    "<div class=\"color-title\">" +
    dataColor.color +
    "</div>" +
    "<div class=\"color-vessel\">" +
    "</div>" +
    "</div>"
  );

  for (var cI = 0; cI < arr.length; cI++) {
    var color = arr[cI];
    divVesel.find(".color-vessel").append("" +
      "<div class=\"color\" style=\"background-color:" + dataColor[color] + "\">" +
      "<span>" +
      stringToNumMap[color] +
      "</span>" +
      "<span style=\"float: right\">" +
      dataColor[color] +
      "</span>" +
      "</div>");
  }

  divContent.append(divVesel);


}

$.ajax({
  url: "palette.json",
  dataType: "json",
  type: "get",
  cache: false,
  success: function (data) {
    $(data.colors).each(function (i, item) {

      createColorsFromKeyArr(data.colors[i], primaryKeys);

      if (data.colors[i].accents === "y") {
        createColorsFromKeyArr(
          Object.assign({}, data.colors[i], {color: data.colors[i].color + " Accents"}),
          accentKeys
        );
      }

      $("nav").append("<a href=\"#" + data.colors[i].color + "\"><div  class=\"" + data.colors[i].color + " btn\" style=\"background-color:" + data.colors[i].fivehundred + "\"></div></a>");
    });
  }
});
// console.log("done")
// $("div.color").click(function(){
//         console.log("done")
// });


// var color = "#000000"

// // rgb("#0033ff").r
// if (rgb(color).r * 0.299 + rgb(color).g * 0.587 + rgb(color).b *0.114 > 186)
//   console.log("#000000")
// else
//   console.log("#ffffff")

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function rgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
  $(document).on("click", ".color", function () {
    $(".color").each(function(){
    var txtcolor = $(this).css("background-color");
    console.log($(this).css("background-color"))
    // $(this).css("color", txtcolor);
    var hexcolor = rgb2hex(txtcolor);
    console.log(hexcolor);
    $(".appbar span").css("visibility", "visible");
    setTimeout(function () {
      $(".appbar span").css("visibility", "hidden");
    }, 380);


    if (rgb(hexcolor).r * 0.299 + rgb(hexcolor).g * 0.587 + rgb(hexcolor).b * 0.114 > 128)
      $(this).css("color", "rgba(0,0,0,.71)");
    else
      $(this).css("color", "rgba(255,255,255,.76)");
    });
    var input_temp = document.createElement("input");
    input_temp.value = rgb2hex($(this).css("background-color"));
    document.body.appendChild(input_temp);
    input_temp.select();
    document.execCommand("copy");
    document.body.removeChild(input_temp);
  });


// $(document).ready(function(){
// $("span").each(function(){
//   alert($(this).css("background-color"))
// });
// });


// Registering ServiceWorker

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function (registration) {
    // Registration was successful
    console.log("ServiceWorker registration successful with scope: ", registration.scope);
  }).catch(function (err) {
    // registration failed :(
    console.log("ServiceWorker registration failed: ", err);
  });
}

