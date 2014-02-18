var App = App || {};

App.FeedList = Backbone.Collection.extend({
	model: App.Feed,
	localStorage: new Backbone.LocalStorage("feeds"),
	url: baseAPIUrl + 'feeds',
	comparator: function(item) {
        return item.get('id');
    }
});