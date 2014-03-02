var App = App || {};

App.BottomNavBarItemList = Backbone.Collection.extend({
	model: App.BottomNavBarItem,
	localStorage: new Backbone.LocalStorage("bottomNavBarItems"),
	url: baseAPIUrl + 'bottomNavBarItems',
	comparator: function(item) {
        return item.get('pos_num');
    }
});