require.config({
    paths: {
        jquery: 'jquery.min',
        underscore: "underscore",
        backbone: "backbone",
        localStorage: "backbone.localStorage"
    }
});
require(['jquery.min', 'bootstrap.min', 'jquery.mmenu.min.all', 'underscore', 'backbone', 'store+json2.min', 'backbone.localStorage', 'setting', 'helper'], function(util) {
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

	// Backbone.sync = function(method, model, options) {
	//     if(true) {  // if offline use local storage
	//     	alert("sync!");
	//         return Backbone.loaclSync.apply(this, arguments);
	//     }
	//     else { // otherwise use REST
	//         return Backbone.ajaxSync.apply(this, arguments);
	//     }
	// }

	$("#menu-left").trigger("toggle");

	//loading json data from server to build ImageAd list

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

});