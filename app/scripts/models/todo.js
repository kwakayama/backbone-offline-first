/*global backboneOfflineFirst, M*/

backboneOfflineFirst.Models = backboneOfflineFirst.Models || {};

(function () {
	'use strict';

	backboneOfflineFirst.Models.TodoModel = M.Model.extend({

		idAttribute: '_id',

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
		},
		entity: 'todos',

        url: 'http://localhost:8200/bikini/todos',

	});

})();
