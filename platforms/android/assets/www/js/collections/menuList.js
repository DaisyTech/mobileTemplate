var App = App || {};

App.MenuList = Backbone.Collection.extend({
	model: App.Menu,
	localStorage: new Backbone.LocalStorage("menus"),
	url: baseAPIUrl + 'menus',
	comparator: function(item) {
        return item.get('pos_num');
    }
});