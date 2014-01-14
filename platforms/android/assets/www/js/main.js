require(['jquery.min', 'bootstrap.min', 'jquery.mmenu.min.all', 'underscore-min', 'backbone-min', 'store+json2.min', 'setting', 'helper'], function(util) {
    $("#menu-left").mmenu({
    	// position: "right",
    	dragOpen: true,
    	header      : true,
    	searchfield : true,
    	labels: {
            fixed: true
         },
    	// classes : "mm-light",
    	slidingSubmenus : false
	});

	$("#menu-left").trigger("toggle");


	// loading json data from server to build ImageAd list
	$.ajax({
	  	type:"get",
	  	url:baseAPIUrl + 'menuCategories',
	  	success:function(json){
			// do stuff with json
			console.log(json);
			$.each(json, function(i, e){
				$('#main-content').append('<p>' + e.title + '</p>')
			});
		}
	});

	// loading json data form server to build main Category list

	// loading json data from server to build sub menu

});