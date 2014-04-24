var App = App || {};
var menusCatsJSON = JSON.parse(localStorage.getItem('menuCategories'));
App.MenuListView = Backbone.View.extend({
	el: $( '.mm-list'),

	initialize: function() {
		this.setElement($('.mm-list'));
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

		// content view initialization
		this.contentView = new App.ContentView();
		this.contentView.listenTo(this.collection, 'reset', this.renderSubMenu);
	},

	events: {
		'click .menuContainer' : 'changeMenuStyle'
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

		this.afterRender();
	},

	// render a menus by creating a menuView and appending the
	// element it renders to the menuListView' element
	renderMenu: function( item, el ) {
		var menuView = new App.MenuView({
			model: item
		});
		console.log(el);
		el.append( menuView.render().el );
	},

	afterRender: function() {
        
	},

	changeMenuStyle: function(e) {
		var target = $(e.target).closest('.menuContainer');
		$.each($('.menuContainer'), function (l, x) {
            $(x).css({
                '-webkit-box-shadow': 'none',
                'box-shadow': 'none'
            });
        });
        target.css({
        	'-webkit-box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)',
        	'box-shadow': 'inset 0 3px 5px rgba(0,0,0,0.125)'
        });

        $("#menu-left").trigger("close");
        
        var menuid = target.children(":first").attr('id');
        var id = menuid.substring(4, menuid.length);

        this.renderSubMenu(this.contentView, this.collection, id);
	},

	renderSubMenu: function (contentView, subMenuCollection, id) {
		$('#main-content').css({
        	'padding' : '0px 10px 60px 10px'
		});
        // get the id of sub menu when click on it
        var menuCollection = new Backbone.Collection(subMenuCollection.where({
        	id: parseInt(id)
		}));
        menuCollection.each(function (item) {
        	console.log(item);
            contentView.renderContent(item);
		}, contentView);
	}
});

$(function() {
	var MenuListView = new App.MenuListView();	
})