
$.ajax({
    url: "palette.json",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
        $(data.colors).each(function(i, item) {
            if (data.colors[i].accents == 'y') {
              $('div.content').append('<div class="color-wrapper" id="' + data.colors[i].color + '"><div class="color-title">' + data.colors[i].color + '</div><div class="color-vessel"> <div class="color" style="background-color:' + data.colors[i].fifty + '"><span>50</span><span style="float: right">' + data.colors[i].fifty + '</span></div><div class="color" style="background-color:' + data.colors[i].hundred + '"><span>100</span><span style="float: right">' + data.colors[i].hundred + '</span></div><div class="color" style="background-color:' + data.colors[i].twohundred + '"><span>200</span><span style="float: right">' + data.colors[i].twohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].threehundred + '"><span>300</span><span style="float: right">' + data.colors[i].threehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fourhundred + '"><span>400</span><span style="float: right">' + data.colors[i].fourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fivehundred + '"><span>500</span><span style="float: right">' + data.colors[i].fivehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sixhundred + '"><span>600</span><span style="float: right">' + data.colors[i].sixhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sevenhundred + '"><span>700</span><span style="float: right">' + data.colors[i].sevenhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].eighthundred + '"><span>800</span><span style="float: right">' + data.colors[i].eighthundred + '</span></div><div class="color" style="background-color:' + data.colors[i].ninehundred + '"><span>900</span><span style="float: right">' + data.colors[i].ninehundred + '</span></div></div></div><div class="color-wrapper"><div class="color-title">' + data.colors[i].color + ' Accents</div><div class="color-vessel"><div class="color" style="background-color:' + data.colors[i].ahundred + '"><span>A100</span><span style="float: right">' + data.colors[i].ahundred + '</span></div><div class="color" style="background-color:' + data.colors[i].atwohundred + '"><span>A200</span><span style="float: right">' + data.colors[i].atwohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].afourhundred + '"><span>A400</span><span style="float: right">' + data.colors[i].afourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].asevenhundred + '"><span>A700</span><span style="float: right">' + data.colors[i].asevenhundred + '</span></div></div>');
            }
            else{
              $('div.content').append('<div class="color-wrapper" id="' + data.colors[i].color + '"><div class="color-title">' + data.colors[i].color + '</div><div class="color-vessel"> <div class="color" style="background-color:' + data.colors[i].fifty + '"><span>50</span><span style="float: right">' + data.colors[i].fifty + '</span></div><div class="color" style="background-color:' + data.colors[i].hundred + '"><span>100</span><span style="float: right">' + data.colors[i].hundred + '</span></div><div class="color" style="background-color:' + data.colors[i].twohundred + '"><span>200</span><span style="float: right">' + data.colors[i].twohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].threehundred + '"><span>300</span><span style="float: right">' + data.colors[i].threehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fourhundred + '"><span>400</span><span style="float: right">' + data.colors[i].fourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fivehundred + '"><span>500</span><span style="float: right">' + data.colors[i].fivehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sixhundred + '"><span>600</span><span style="float: right">' + data.colors[i].sixhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sevenhundred + '"><span>700</span><span style="float: right">' + data.colors[i].sevenhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].eighthundred + '"><span>800</span><span style="float: right">' + data.colors[i].eighthundred + '</span></div><div class="color" style="background-color:' + data.colors[i].ninehundred + '"><span>900</span><span style="float: right">' + data.colors[i].ninehundred + '</span></div></div></div>');
            }
            $('nav').append('<a href="#'+ data.colors[i].color +'"><div  class="'+ data.colors[i].color +' btn" style="background-color:' + data.colors[i].fivehundred + '"></div></a>');
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

$(document).ready(function(){
  $(document).on('click','.color', function(){
    function rgb2hex(rgb){
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2)
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
    }
    function rgb(hex){
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    var txtcolor = $(this).css("background-color")
    // $(this).css("color", txtcolor);
    var hexcolor = rgb2hex(txtcolor)
    console.log(hexcolor)

    var input_temp = document.createElement("input");
    input_temp.value = hexcolor;
    document.body.appendChild(input_temp);
    input_temp.select();
    document.execCommand("copy");
    document.body.removeChild(input_temp);
    $(".appbar span").css("visibility","visible")
    setTimeout(function(){
      $(".appbar span").css("visibility","hidden")
      }, 300);
      
    if (rgb(hexcolor).r * 0.299 + rgb(hexcolor).g * 0.587 + rgb(hexcolor).b *0.114 > 128) 
      $(this).css("color","rgba(0,0,0,.87)")
    else
      $(this).css("color","rgba(255,255,255,.87)")
  });
});

// $(document).ready(function(){
// $("span").each(function(){
//   alert($(this).css("background-color"))
// });
// });




 // Registering ServiceWorker

 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('sw.js').then(function(registration) {
         // Registration was successful
         console.log('ServiceWorker registration successful with scope: ', registration.scope);
     }).catch(function(err) {
         // registration failed :(
         console.log('ServiceWorker registration failed: ', err);
     });
 }

