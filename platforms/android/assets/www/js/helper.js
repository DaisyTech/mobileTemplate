var App = App || {};
// Backbone.sync = function(method, model, options) {
// 	    if(true) {  // if offline use local storage
// 	    	alert("sync!");
// 	        return Backbone.localSync.apply(this, arguments);
// 	    }
// 	    else { // otherwise use REST
// 	        return Backbone.ajaxSync.apply(this, arguments);
// 	    }
// 	}

require([
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
    ], function(util) {

    $(document).ready(function() {
    	var me = this;
    	var collection = new App.MenuList();

    	var menusJSON = JSON.parse(localStorage.getItem('menus'));
    	var contentView = new App.ContentView();

    	contentView.listenTo( collection, 'reset', render );

    	$.each(menusJSON, function(l, e){
			collection.add(e);
		});

		$("#menu-left").trigger("toggle");

		// swipe event, open sidebar menu
		// $('#main-content').hammer().on("swipeleft", function(event) {
	 //    	event.gesture.preventDefault();
	 //    	alert("left");
		// 	$("#menu-left").trigger("open");
		// });

		// bottom navbar events
		$('.bottomNavItem').on('click', function(){
			$.each($('.bottomNavItem'), function(l, e){
				$(e).css({
					'background-color':'#5BC0D5',
					'-webkit-box-shadow': 'none',
					'box-shadow': 'none'
				});
			});
			$(this).css({
				'background-color':'#39b3d7',
				'-webkit-box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)',
				'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
			});
		});

		// Sub menu item events
		$('.menuContainer').on('click', function(){
			$.each($('.menuContainer'), function(l, e){
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
		 	var id  = menuid.substring(4, menuid.length);
		 	console.log('menuid: ' + id);
		 	
		 	render(contentView, collection, id);
		});

		// menuCat events
		$('.panel-heading').on('click', function(){
			if($(this).attr('class') == 'panel-heading') {
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

		var render = function(contentView, collection, id) {
			// get the id of sub menu when click on it
		 	var menuCollection = new Backbone.Collection(collection.where({id : parseInt(id)}));
		 	console.log(menuCollection.length);
		 	menuCollection.each(function(item) {
		 		console.log(item);
				contentView.renderContent( item );
			}, contentView);
		}
	});
});