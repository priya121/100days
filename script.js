var feed = new Instafeed({
    get: 'user',
    userId: '26981234',
    accessToken: '26981234.1677ed0.f2593aabfac04e08940ab8f636676206',
    resolution: 'standard_resolution',
    template: '<li> <a href="{{link}}"><img src="{{image}}""{{caption}}" /></a><h2 class="day-number"> </h2> </li>',
    filter: function(image) {
        return image.tags.indexOf('100days100photos') >=0;
    },
    after: function() {
        addDayNumber();
    }
});

function addDayNumber() {
    var allPhotos = document.getElementsByClassName("day-number");
    for (var i = 0; i < allPhotos.length ; i++) {
        allPhotos[i].innerHTML = "Day " + (allPhotos.length - i);
    }
}

feed.run();
