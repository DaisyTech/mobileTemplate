var App = App || {};

App.MenuCatListView = Backbone.View.extend({
	el: $( '#menuCatListView' ),

	initialize: function() {
		var me = this;
		this.collection = new App.MenuCatList();

		// loading collection from local storage
		console.log(localStorage.getItem('menuCategories'));

		var menuCategoriesJSON = JSON.parse(localStorage.getItem('menuCategories'));
		$.each(menuCategoriesJSON, function(l, e){
			me.collection.add(e);
		});


		// loading collection from REST api
		// this.collection.fetch({reset : true});
		this.render();

		this.listenTo( this.collection, 'add', this.renderMenuCat );
		this.listenTo( this.collection, 'reset', this.render );

	},

	events: {
		
	},

	// render menuCats by rendering each menuCat in its collection
	render: function() {
		this.collection.each(function( item ) {
			console.log(item);
			this.renderMenuCat( item );
		}, this );
	},

	// render a menuCat by creating a menuCatView and appending the
	// element it renders to the menuCatListView' element
	renderMenuCat: function( item ) {
		var menuCatView = new App.MenuCatView({
			model: item
		});
		this.$el.append( menuCatView.render().el );
	}
});

$(function() {
	var MenuCatListView = new App.MenuCatListView();	
})