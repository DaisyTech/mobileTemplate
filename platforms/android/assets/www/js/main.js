require(['jquery.min', 'bootstrap.min', 'jquery.mmenu.min.all'], function(util) {
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
	});

	$("#menu-left").trigger("toggle");
});