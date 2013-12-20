/*global backboneOfflineFirst, Backbone*/

backboneOfflineFirst.Models = backboneOfflineFirst.Models || {};

(function () {
	'use strict';

	backboneOfflineFirst.Models.TodoModel = Backbone.Model.extend({

		// models must have a type. maps to type in hoodie store.
		type: 'todo',

		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function() {
			this.save({
				completed: !this.get('completed')
			});
		}
	});

})();
