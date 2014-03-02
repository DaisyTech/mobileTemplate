var App = App || {};

App.BottomNavBarItemListView = Backbone.View.extend({
	el: $( '.bottomNav' ),

	initialize: function() {
		var me = this;
		this.collection = new App.BottomNavBarItemList();
		// this.collection.fetch({reset : true});

		var bottomNavBarItemsJSON = JSON.parse(localStorage.getItem('bottomNavBarItems'));
		$.each(bottomNavBarItemsJSON, function(l, e){
			me.collection.add(e);
		});

		this.render();

		this.listenTo( this.collection, 'add', this.renderBottomNavBarItem );
		this.listenTo( this.collection, 'reset', this.render );
	},

	events: {
		'click .bottomNavItem' : 'bottomNavItemClick',
	},

	// render BottomNavBarItems by rendering each BottomNavBarItem in its collection
	render: function() {
		this.collection.each(function( item ) {
			this.renderBottomNavBarItem( item );
		}, this );

		this.afterRender();
	},

	// render a BottomNavBarItem by creating a BottomNavBarItemView and appending the
	// element it renders to the BottomNavBarItemListView' element
	renderBottomNavBarItem: function( item ) {
		var bottomNavBarItemView = new App.BottomNavBarItemView({
			model: item
		});
		this.$el.append( bottomNavBarItemView.render().el );
	},

	afterRender: function() {
		var itemSize = JSON.parse(localStorage.getItem('bottomNavBarItems')).length;
		var colSize = 12/itemSize;
		$.each($('.bottomNavItem'), function(l, x) {
			var c = "col-xs-" + colSize + " bottomNavItem";
			$(x).attr('class', c);
			var ic = "glyphicon " + $(x).find('p').attr('class');
			$(x).find('p').attr('class', ic);
		});
	},

	bottomNavItemClick: function(e) {
		$.each($('.bottomNavItem'), function (l, x) {
            $(x).css({
            	'background-color': '#5BC0D5',
                '-webkit-box-shadow': 'none',
                'box-shadow': 'none'
			});
        });

		var target = $(e.target).closest('.bottomNavItem');
        target.css({
        	'background-color': '#39b3d7',
            '-webkit-box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)',
            'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
		});
        var p = target.find('p');
        if(p.attr('id') == 'navMenu') {
        	$('#main-content').html('<h1>THIS IS MENU</h1>');
		} else if(p.attr('id') == 'navOrder') {
        	$('#main-content').html('<h1>THIS IS ORDER</h1>');
        } else if(p.attr('id') == 'navMore') {
            $('#main-content').html('<h1>THIS IS MORE</h1>');
		}
	}
});

$(function() {
	App.BottomNBIListView = new App.BottomNavBarItemListView();	
})