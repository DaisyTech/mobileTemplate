var App = App || {};

App.ImageAdListView = Backbone.View.extend({
	el: $( '#imageAdListView' ),

	initialize: function() {
		var me = this;
		this.collection = new App.ImageAdList();
		// this.collection.fetch({reset : true});

		var imageAdsJSON = JSON.parse(localStorage.getItem('imageAds'));
		$.each(imageAdsJSON, function(l, e){
			me.collection.add(e);
		});

		this.render();

		this.listenTo( this.collection, 'add', this.renderImageAd );
		this.listenTo( this.collection, 'reset', this.render );
	},

	events: {
		
	},

	// render imageAds by rendering each imageAd in its collection
	render: function() {
		this.collection.each(function( item ) {
			this.renderImageAd( item );
		}, this );

		this.afterRender();
	},

	// render a imageAd by creating a imageAdView and appending the
	// element it renders to the ImageAdListView' element
	renderImageAd: function( item ) {
		var imageAdView = new App.ImageAdView({
			model: item
		});
		this.$el.append( imageAdView.render().el );
	},

	afterRender: function() {
		// $('.carousel').carousel();
        $('#imageAdListView div:nth-child(2)').attr('class', 'item active');
        $('#imageAdListView div').find('div').attr('class', 'carousel-caption');
	}
});

$(function() {
	App.ImgAdListView = new App.ImageAdListView();	
})