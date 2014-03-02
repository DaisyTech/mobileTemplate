var App = App || {};
// Backbone.sync = function(method, model, options) {
//             if(true) {  // if offline use local storage
//                     alert("sync!");
//                 return Backbone.localSync.apply(this, arguments);
//             }
//             else { // otherwise use REST
//                 return Backbone.ajaxSync.apply(this, arguments);
//             }
//         }

require([
    'models/imageAd',
    'collections/imageAdList',
    'views/imageAd',
    'views/imageAdList',
    'models/bottomNavBarItem',
    'collections/bottomNavBarItemList',
    'views/bottomNavBarItem',
    'views/bottomNavBarItemList',
    'models/feed',
    'collections/feedList',
    'views/feed',
    'views/feedList',
    'models/menuCat',
    'collections/menuCatList',
    'views/menuCat',
    'views/menuCatList',
    'models/menu',
    'collections/menuList',
    'views/content',
    'views/menu',
    'views/menuList',
    'models/menuContent',
    'views/menuContent'
], function (util) {

    $(document).ready(function () {
        var me = this;

        $("#menu-left").trigger("toggle");

        // feedList
        $('.collapse').collapse();
            
        // imageAdList
        $('.carousel').carousel();

        $("#menu-left").mmenu({
            // position: "right",
            dragOpen: true,
            header      : true,
            searchfield : true,
            labels: {
                fixed: true
             },
            classes : "mm-light",
            slidingSubmenus : false
            // listClass: "menuCatListView"
        });

        // Nav logo events
        $('#navLogo').on('click', function(){
            App.ImgAdListView.$el.empty();
            App.ImgAdListView.remove();
            $('#main-content').html('<div id="carousel-example-captions" class="carousel slide" data-ride="carousel">' +
                      '<ol class="carousel-indicators">' + 
                        '<li data-target="#carousel-example-captions" data-slide-to="0" class=""></li>' + 
                        '<li data-target="#carousel-example-captions" data-slide-to="1" class="active"></li>' + 
                        '<li data-target="#carousel-example-captions" data-slide-to="2" class=""></li>' + 
                      '</ol>' + 
                      '<div class="carousel-inner" id="imageAdListView">' +
                      '</div>' +
                      '<a class="left carousel-control" href="#carousel-example-captions" data-slide="prev">' +
                        '<span class="glyphicon glyphicon-chevron-left"></span>' + 
                      '</a>' + 
                      '<a class="right carousel-control" href="#carousel-example-captions" data-slide="next">' + 
                        '<span class="glyphicon glyphicon-chevron-right"></span>' + 
                      '</a>' + 
                    '</div>');
            
            //var ImgAdListView = new App.ImageAdListView();
            App.ImgAdListView.render();
            App.ImgAdListView.$el.children().first('div').attr('class', 'item active');
            $('#imageAdListView div:nth-child(2)').attr('class', 'item active');
            $('#imageAdListView div').find('div').attr('class', 'carousel-caption');
        });

    // // imageAdList
    // $('.carousel').carousel();

    // // feedList
    // $('.collapse').collapse();
        
    });
});