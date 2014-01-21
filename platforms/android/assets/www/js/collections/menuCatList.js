var App = App || {};

App.MenuCatList = Backbone.Collection.extend({
	model: App.MenuCat,
	localStorage: new Backbone.LocalStorage("menuCategories"),
	url: baseAPIUrl + 'menuCategories',
	comparator: function(item) {
        return item.get('pos_num');
    }
});