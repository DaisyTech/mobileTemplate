var App = App || {};

App.imageAdList = Backbone.Collection.extend({
	model: App.ImageAd,
	url: '/api/imageAdList'
});