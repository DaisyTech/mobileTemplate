var App = App || {};

App.ImageAdListView = Backbone.View.extend({
	el: $( '#ImageAdListView' ),

	initialize: function() {
		this.collection = new App.ImageAdList();
		this.collection.fetch({reset : true});
		this.render();

	},

	events: {
		
	},

	// render imageAds by rendering each imageAd in its collection
	render: function() {
		this.collection.each(function( item ) {
			this.renderImageAd( item );
		}, this );
	},

	// render a imageAd by creating a imageAdView and appending the
	// element it renders to the ImageAdListView' element
	renderImageAd: function( item ) {
		var imageAdView = new App.imageAdView({
			model: item
		});
		this.$el.append( imageAdView.render().el );
	}
});

$(function() {
	var ImageAdListView = new App.ImageAdListView();	
})