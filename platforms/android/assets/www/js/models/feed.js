var App = App || {};

App.Feed = Backbone.Model.extend({

    id : 'id',
    icon_image_url : 'icon_image_url',
    body_image_url : 'body_image_url',
	title : 'title',
	description : 'description',
	owner_id : 'owner_id',
	created_time : 'created_time',
	expired_time : 'expired_time'

});