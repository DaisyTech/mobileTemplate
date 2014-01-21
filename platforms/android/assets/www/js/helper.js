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
    'views/menuCatList'], function(util) {
});