$.ajax({
    url: "palette.json",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
        $(data.colors).each(function(i, item) {
            // <div class="color-vessel">
            //     <div class="color-title" id="red">Red</div>
            //     <div class="color red-50"><span>50</span><span class="right">#FFEBEE</span></div>
            //     <div class="color red-100"><span>100</span><span class="right">#FFCCD2</span></div>
            //     <div class="color red-200"><span>200</span><span class="right">#EF9A9A</span></div>
            //     <div class="color red-300"><span>300</span><span class="right">#E57373</span></div>
            //     <div class="color red-400 white-text"><span>400</span><span class="right">#EF5350</span></div>
            //     <div class="color red-500 white-text"><span>500</span><span class="right">#F44336</span></div>
            //     <div class="color red-600 white-text"><span>600</span><span class="right">#E53935</span></div>
            //     <div class="color red-700 white-text"><span>700</span><span class="right">#D32F2F</span></div>
            //     <div class="color red-800 white-text"><span>800</span><span class="right">#C62828</span></div>
            //     <div class="color red-900 white-text"><span>900</span><span class="right">#B71C1C</span></div>
            //     <div class="color-title" id="red">Red Accents</div>
            //     <div class="color red-a100"><span>A100</span><span class="right">#1a237E</span></div>
            //     <div class="color red-a200 white-text"><span>A200</span><span class="right">#1a237E</span></div>
            //     <div class="color red-a400 white-text"><span>A400</span><span class="right">#1a237E</span></div>
            //     <div class="color red-a700 white-text"><span>A700</span><span class="right">#1a237E</span></div>
            // </div>
            $('div.content').append('<div class="color-vessel"> <div class="color-title" id="' + data.colors[i].color + '">' + data.colors[i].color + '</div><div class="color" style="background-color:' + data.colors[i].fifty + '"><span>50</span><span style="float: right">' + data.colors[i].fifty + '</span></div><div class="color" style="background-color:' + data.colors[i].hundred + '"><span>100</span><span style="float: right">' + data.colors[i].hundred + '</span></div><div class="color" style="background-color:' + data.colors[i].twohundred + '"><span>200</span><span style="float: right">' + data.colors[i].twohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].threehundred + '"><span>300</span><span style="float: right">' + data.colors[i].threehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fourhundred + '"><span>400</span><span style="float: right">' + data.colors[i].fourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].fivehundred + '"><span>500</span><span style="float: right">' + data.colors[i].fivehundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sixhundred + '"><span>600</span><span style="float: right">' + data.colors[i].sixhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].sevenhundred + '"><span>700</span><span style="float: right">' + data.colors[i].sevenhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].eighthundred + '"><span>800</span><span style="float: right">' + data.colors[i].eighthundred + '</span></div><div class="color" style="background-color:' + data.colors[i].ninehundred + '"><span>900</span><span style="float: right">' + data.colors[i].ninehundred + '</span></div><div class="color-title" id="' + data.colors[i].color + '">' + data.colors[i].color + ' Accents</div><div class="color" style="background-color:' + data.colors[i].ahundred + '"><span>A100</span><span style="float: right">' + data.colors[i].ahundred + '</span></div><div class="color" style="background-color:' + data.colors[i].atwohundred + '"><span>A200</span><span style="float: right">' + data.colors[i].atwohundred + '</span></div><div class="color" style="background-color:' + data.colors[i].afourhundred + '"><span>A400</span><span style="float: right">' + data.colors[i].afourhundred + '</span></div><div class="color" style="background-color:' + data.colors[i].asevenhundred + '"><span>A700</span><span style="float: right">' + data.colors[i].asevenhundred + '</span></div>');
            // $('ul#grid-wrapper').append("<li class='card " + data.apps[i].appType + "'> <div class = 'app-img-wrapper'> <img style = 'background:" + data.apps[i].imgcolor + "' class ='app-img' src = '" + data.apps[i].imgsrc + "'> </img> </div> <div class = 'title-bar'> <a href = '#' class = 'card-title'>" + data.apps[i].title + " </a> <a href = '" + data.apps[i].link + "'target = '_blank' rel = 'noopener'> <img class = 'open-btn'src = 'assets/open.svg'alt = 'open-svg'/> </a> </div> </li>");
            console.log(data.colors[i].color);
        });
    }
});