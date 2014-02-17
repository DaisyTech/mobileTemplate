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
    'models/menuCat',
    'collections/menuCatList',
    'views/menuCat',
    'views/menuCatList',
    'models/menu',
    'collections/menuList',
    'views/menu',
    'views/menuList',
    'models/menuContent',
    'views/menuContent',
    'views/content'
], function (util) {

    $(document).ready(function () {
        var me = this;

        $("#menu-left").trigger("toggle");

        // swipe event, open sidebar menu
        // $('#main-content').hammer().on("swipeleft", function(event) {
        //            event.gesture.preventDefault();
        //            alert("left");
        //         $("#menu-left").trigger("open");
        // });

        // bottom navbar events
        $('.bottomNavItem').on('click', function () {
            $.each($('.bottomNavItem'), function (l, e) {
                $(e).css({
                    'background-color': '#5BC0D5',
                    '-webkit-box-shadow': 'none',
                    'box-shadow': 'none'
                });
            });
            $(this).css({
                'background-color': '#39b3d7',
                '-webkit-box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)',
                'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
            });
            if($(this).attr('id') == 'navMenu') {
            	$('#main-content').html('<h1>THIS IS MENU</h1>');
            } else if($(this).attr('id') == 'navOrder') {
            	$('#main-content').html('<h1>THIS IS ORDER</h1>');
            } else if($(this).attr('id') == 'navMore') {
            	$('#main-content').html('<h1>THIS IS MORE</h1>');
            }
        });


        // Sub menu item events
        $('.menuContainer').on('click', function () {
            $.each($('.menuContainer'), function (l, e) {
                $(e).css({
                    '-webkit-box-shadow': 'none',
                    'box-shadow': 'none'
                });
            });
            $(this).css({
                '-webkit-box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)',
                'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
            });

            $("#menu-left").trigger("close");

            var menuid = $(this).children(":first").attr('id');
            var id = menuid.substring(4, menuid.length);
            console.log('menuid: ' + id);

            renderSubMenu(contentView, subMenuCollection, id);
        });

        // menuCat events
        $('.panel-heading').on('click', function () {
            if ($(this).attr('class') == 'panel-heading') {
                $(this).css({
                    '-webkit-box-shadow': 'none',
                    'box-shadow': 'none'
                });
            } else {
                $(this).css({
                    '-webkit-box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)',
                    'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
                });
            }

        });


        // sub menu 
        var subMenuCollection = new App.MenuList();
        var menusJSON = JSON.parse(localStorage.getItem('menus'));
        var contentView = new App.ContentView();

        contentView.listenTo(subMenuCollection, 'reset', renderSubMenu);

        $.each(menusJSON, function (l, e) {
            subMenuCollection.add(e);
        });

        var renderSubMenu = function (contentView, subMenuCollection, id) {
            // get the id of sub menu when click on it
            var menuCollection = new Backbone.Collection(subMenuCollection.where({
                id: parseInt(id)
            }));
            console.log(menuCollection.length);
            menuCollection.each(function (item) {
                console.log(item);
                contentView.renderContent(item);
            }, contentView);
        };


        // ad images redering
        // var adImgCollection = new App.ImageAdList();
        // var adImgsJSON = JSON.parse(localStorage.getItem('imageAds'));
        // contentView.listenTo(adImgCollection, 'reset', renderAdImage);

        // var renderAdImage = function (contentView, adImgCollection, id) {
        //     // get the id of sub menu when click on it
        //     var menuCollection = new Backbone.Collection(collection.where({
        //         id: parseInt(id)
        //     }));
        //     console.log(menuCollection.length);
        //     menuCollection.each(function (item) {
        //         console.log(item);
        //         contentView.renderContent(item);
        //     }, contentView);
        // };

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

        // image ads
        $('.carousel').carousel();
        $('#imageAdListView div:nth-child(2)').attr('class', 'item active');
        $('#imageAdListView div').find('div').attr('class', 'carousel-caption');

        // Nav logo events
        $('#navLogo').on('click', function(){
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

            // var imageAdCollection = new App.ImageAdList();
            // var imageAdJSON = JSON.parse(localStorage.getItem('imageAds'));
            // var imageAdView = new App.ImageAdView();

            // imageAdView.listenTo(imageAdCollection, 'reset', renderAdImage);

            // $.each(imageAdJSON, function (l, e) {
            //     imageAdCollection.add(e);
            // });

            // var renderAdImage = function (imageAdView, imageAdCollection) {
            //     // get the id of sub menu when click on it
            //     var adCollection = new Backbone.Collection(imageAdCollection);

            //     adCollection.each(function (item) {
            //         console.log(item);
            //         imageAdView.render(item);
            //     }, imageAdView);
            // };

            var ImageAdListView = new App.ImageAdListView();
            console.log("ImageAdListView: " + ImageAdListView);  
        });

    });
});