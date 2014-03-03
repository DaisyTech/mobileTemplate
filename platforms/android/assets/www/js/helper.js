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
    event.preventDefault();

        var me = this;

        $("#menu-left").trigger("toggle");

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
            App.imgAdListView.$el.empty();
            App.feedListView.$el.empty();
            $('#main-content').html('<div id="carousel-imageAds" class="carousel slide" data-ride="carousel">' +
                      '<ol class="carousel-indicators">' + 
                        '<li data-target="#carousel-imageAds" data-slide-to="0" class=""></li>' + 
                        '<li data-target="#carousel-imageAds" data-slide-to="1" class="active"></li>' + 
                        '<li data-target="#carousel-imageAds" data-slide-to="2" class=""></li>' + 
                      '</ol>' + 
                      '<div class="carousel-inner" id="imageAdListView">' +
                      '</div>' +
                      '<a class="left carousel-control" href="#carousel-imageAds" data-slide="prev">' +
                        '<span class="glyphicon glyphicon-chevron-left"></span>' + 
                      '</a>' + 
                      '<a class="right carousel-control" href="#carousel-imageAds" data-slide="next">' + 
                        '<span class="glyphicon glyphicon-chevron-right"></span>' + 
                      '</a>' + 
                    '</div>'+
                    '<div id="feedListView">' +
                    '</div>' );
            App.imgAdListView.render();
            App.feedListView.render();
            $('#main-content').css({
                'padding' : '0px 0px 60px 0px'
            });
            $('#imageAdListView').append(App.imgAdListView.$el.html());
            $('#feedListView').append(App.feedListView.$el.html());
            $('#imageAdListView div:nth-child(2)').attr('class', 'item active');
            $('#imageAdListView div').find('div').attr('class', 'carousel-caption');
            $('.panel-collapse').attr('class', 'panel-collapse collapse');
            $('.feed').on('click', function() {
            var parentWidth = $(window).width()/3*2;
                ($(this).closest('.feedsPanel')).find('.panel-body-feed img').css('width', parentWidth);
            });
        });
});