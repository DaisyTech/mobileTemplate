var App = App || {};
var menusCatsJSON = JSON.parse(localStorage.getItem('menuCategories'));
App.MenuListView = Backbone.View.extend({
	// el: $( '#menuListView'+ ),

	initialize: function() {
		var me = this;
		this.collection = new App.MenuList();

		// loading collection from local storage
		console.log(localStorage.getItem('menus'));

		var menusJSON = JSON.parse(localStorage.getItem('menus'));
		$.each(menusJSON, function(l, e){
			me.collection.add(e);
		});

		// loading collection from REST api
		// this.collection.fetch({reset : true});
		this.render();

		this.listenTo( this.collection, 'add', this.renderMenu );
		this.listenTo( this.collection, 'reset', this.render );

	},

	events: {
		
	},

	// render menus by rendering each menu in its collection
	// render menus under according menuCat where menu.menu_cat_id == menuCat.id
	render: function() {
		var me = this;
		$.each(menusCatsJSON, function(l, e){
			var catID = e.id;
			var cols = new Backbone.Collection(me.collection.where({menu_cat_id : catID}));
			me.el = $( '#menuListView'+ catID);
			console.log(me.el);
			cols.each(function(item) {
				me.renderMenu( item, me.el );
			}, me);
		});
	},

	// render a menus by creating a menuView and appending the
	// element it renders to the menuListView' element
	renderMenu: function( item, el ) {
		var menuView = new App.MenuView({
			model: item
		});
		console.log(el);
		el.append( menuView.render().el );
	}
});

$(function() {
	var MenuListView = new App.MenuListView();	
})