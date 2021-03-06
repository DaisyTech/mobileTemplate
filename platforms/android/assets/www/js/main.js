var App = App || {};
require.config({
    paths: {
        jquery: 'jquery.min',
        underscore: "underscore",
        backbone: "backbone",
        localStorage: "backbone.localStorage"
    }
});
require(['jquery.min', 'bootstrap.min', 'jquery.mmenu.min.all', 'underscore', 'backbone', 'store+json2.min', 'backbone.localStorage', 'hammer.min', 'setting', 'helper'], function(util) {

	// loading json data form server to build main Category list
	$.ajax({
	  	type:"get",
	  	url:baseAPIUrl + 'menuCategories',
	  	success:function(json){
			// do stuff with json
			// console.log(json);
			// $.each(json, function(i, e){
			// 	$('#main-content').append('<p>' + e.title + '</p>')
			// });

			// save as localStorage
			//localStorage.setItem('menuCategories', json);
			localStorage.setItem('menuCategories', JSON.stringify(json));
			// console.log(localStorage.getItem("menuCategories"));
		}
	});

	// loading json data from server to build sub menu
	$.ajax({
	  	type:"get",
	  	url:baseAPIUrl + 'menus',
	  	success:function(json){
			// save as localStorage
			localStorage.setItem('menus', JSON.stringify(json));
		}
	});

	// loading json data from server to build images ads
	$.ajax({
	  	type:"get",
	  	url:baseAPIUrl + 'imageAds',
	  	success:function(json){
			// save as localStorage
			localStorage.setItem('imageAds', JSON.stringify(json));
		}
	});

	// loading json data from server to build feeds list
	$.ajax({
	  	type:"get",
	  	url:baseAPIUrl + 'feeds',
	  	success:function(json){
			// save as localStorage
			localStorage.setItem('feeds', JSON.stringify(json));
		}
	});

	// loading json data from server to build feeds list
	$.ajax({
	  	type:"get",
	  	url:baseAPIUrl + 'bottomNavBarItems',
	  	success:function(json){
			// save as localStorage
			localStorage.setItem('bottomNavBarItems', JSON.stringify(json));
		}
	});
});
