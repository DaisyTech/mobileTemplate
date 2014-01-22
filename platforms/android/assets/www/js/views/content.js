var App = App || {};

App.ContentView = Backbone.View.extend({
	el: $( '#main-content'),

	events: {
		
	},

	renderContent: function( item ) {
		var menuContentView = new App.MenuContentView({
			model: item
		});

		this.$el.html( menuContentView.render().el );
	}
});