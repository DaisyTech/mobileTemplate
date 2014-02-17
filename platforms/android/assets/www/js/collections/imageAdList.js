var App = App || {};

App.ImageAdList = Backbone.Collection.extend({
	model: App.ImageAd,
	localStorage: new Backbone.LocalStorage("imageAds"),
	url: baseAPIUrl + 'imageAds',
	comparator: function(item) {
        return item.get('id');
    }
});