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

		// close that when click the sub menu item
		$('.menuContainer').on('click', function(){
			$("#menu-left").trigger("close");

			var menuid = $(this).children(":first").attr('id');
		 	var id  = menuid.substring(4, menuid.length);
		 	console.log('menuid: ' + id);
		 	
		 	render(contentView, collection, id);
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