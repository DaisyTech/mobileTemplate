var App = App || {};

App.FeedListView = Backbone.View.extend({
	el: $( '#feedListView' ),

	initialize: function() {
		var me = this;
		this.collection = new App.FeedList();

		// loading collection from local storage
		console.log(localStorage.getItem('feeds'));

		var feedsJSON = JSON.parse(localStorage.getItem('feeds'));
		$.each(feedsJSON, function(l, e){
			me.collection.add(e);
		});


		// loading collection from REST api
		// this.collection.fetch({reset : true});
		this.render();

		this.listenTo( this.collection, 'add', this.renderFeed );
		this.listenTo( this.collection, 'reset', this.render );

	},

	events: {
		
	},

	// render feeds by rendering each Feed in its collection
	render: function() {
		this.collection.each(function( item ) {
			console.log(item);
			this.renderFeed( item );
		}, this );
	},

	// render a Feed by creating a feedView and appending the
	// element it renders to the feedListView' element
	renderFeed: function( item ) {
		var feedView = new App.FeedView({
			model: item
		});
		this.$el.append( feedView.render().el );
	}
});

$(function() {
	var feedListView = new App.FeedListView();	
})