var App = App || {};

App.BottomNavBarItemView = Backbone.View.extend({
	tagName: 'div',
	className: 'bottomNavItem',
	template: $('#bottomNavBarItemTemplate').html(),

	events: {

	},

	render: function() {
		//tmpl is a function that takes a JSON object and returns html
		var tmpl = _.template(this.template);

		console.log(this.model.toJSON());
		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		$(this.el).html( tmpl( this.model.toJSON()));
		
		return this;
	}
});