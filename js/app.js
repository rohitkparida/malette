$.ajax({
    url: "data.js",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data) {
        $(data.apps).each(function(i, item) {
            // $('ul#grid-wrapper').append("<li class='card " + data.apps[i].appType + "'> <div class = 'app-img-wrapper'> <img style = 'background:" + data.apps[i].imgcolor + "' class ='app-img' src = '" + data.apps[i].imgsrc + "'> </img> </div> <div class = 'title-bar'> <a href = '#' class = 'card-title'>" + data.apps[i].title + " </a> <a href = '" + data.apps[i].link + "'target = '_blank' rel = 'noopener'> <img class = 'open-btn'src = 'assets/open.svg'alt = 'open-svg'/> </a> </div> </li>");
            console.log(item.title[i]);
        });
    }
});