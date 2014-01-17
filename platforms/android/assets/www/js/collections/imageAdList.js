var App = App || {};

App.ImageAdList = Backbone.Collection.extend({
	model: App.ImageAd,
	url: '/api/imageAdList'
});