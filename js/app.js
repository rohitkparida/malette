// $.ajax({
//     url: "palette.json",
//     dataType: "json",
//     type: "get",
//     cache: false,
//     success: function(data) {
//         $(data.colors).each(function(i, item) {
//             $('div.content').append('');
//         });
//     }
// });
//

$.ajax({
    url: "palette.json",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
        $(data.colors).each(function(i, item) {
            $('div.content').append('<div class="color-title" id="' + data.colors[i].color + '">' + data.colors[i].color + '</div><div class="color-vessel"> <div class="color" style="background-color:' + data.colors[i].fifty + '"><span>50</span><span style="float: right">' + data.colors[i].fifty + '</span></div><div class="color" style="background-color:' + data.colors[i].hundred + '"><span>100</span><span style="float: right">' + data.colors[i].hundred + '</span></div><div class="color" style="background-color:' + data.colors[i].twohundred + '"><span>200</span><span style="float: right">' + data.colors[i].twohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].threehundred + '"><span>300</span><span style="float: right">' + data.colors[i].threehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fourhundred + '"><span>400</span><span style="float: right">' + data.colors[i].fourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fivehundred + '"><span>500</span><span style="float: right">' + data.colors[i].fivehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sixhundred + '"><span>600</span><span style="float: right">' + data.colors[i].sixhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sevenhundred + '"><span>700</span><span style="float: right">' + data.colors[i].sevenhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].eighthundred + '"><span>800</span><span style="float: right">' + data.colors[i].eighthundred + '</span></div><div class="color" style="background-color:' + data.colors[i].ninehundred + '"><span>900</span><span style="float: right">' + data.colors[i].ninehundred + '</span></div></div><div class="color-title" id="' + data.colors[i].color + '">' + data.colors[i].color + ' Accents</div><div class="color-vessel"><div class="color" style="background-color:' + data.colors[i].ahundred + '"><span>A100</span><span style="float: right">' + data.colors[i].ahundred + '</span></div><div class="color" style="background-color:' + data.colors[i].atwohundred + '"><span>A200</span><span style="float: right">' + data.colors[i].atwohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].afourhundred + '"><span>A400</span><span style="float: right">' + data.colors[i].afourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].asevenhundred + '"><span>A700</span><span style="float: right">' + data.colors[i].asevenhundred + '</span></div>');
        });
    }
});




$(window).on('scroll load', function() {
    var content = $(".content")
    var winScroll = $(content).scrollTop();
    // var winScroll = content.scrollTop || document.documentElement.scrollTop;
    var height = content.scrollHeight - content.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // document.getElementById("myBar").style.height = scrolled + "%";
    console.log(winScroll);
    console.log(scrolled);
});


// function scrollR() {
//     document.getElementById("tags").scrollBy(80, 0);
// }
//
// function scrollL() {
//     document.getElementById("tags").scrollBy(-80, 0);
// }