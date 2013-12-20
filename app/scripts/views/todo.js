/*global backboneOfflineFirst, Backbone, JST*/

backboneOfflineFirst.Views = backboneOfflineFirst.Views || {};

(function () {
    'use strict';

    backboneOfflineFirst.Views.TodoView = Backbone.View.extend({

        tagName: 'li',

        template: JST['app/scripts/templates/todo.ejs'],

		events: {
			'click input[type="checkbox"]': 'toggle',
			'click .destroy': 'clear',
			'dblclick span': 'toggleEdit',
			'submit form': 'toggleEdit',
			'blur form > input': 'close'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		toggle: function () {
			this.model.toggle();
		},

		toggleEdit: function () {
			var input = this.$('form input');
			var title = input.val().trim();

			if (!title) {
				this.model.destroy();
				this.remove();
				return;
			}

			this.$el.toggleClass('editing');

			if (title === this.model.get('title')) {
				// Edit mode.
				input.val(title);
				input.focus();
			} else {
				// Done editing.
				this.model.set('title', title);
				this.model.save();

				this.render();
			}
		},

		/**
		 * on blur, hide the input field (only when it was no submit)
		 * @author Kentaro Wakayama
		 * @date   2013-12-15
		 */
		close: function(){
			if (this.$el.hasClass('editing')) {
				this.$el.removeClass('editing');
			}
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
        clear: function () {
            this.model.destroy();
        }

    });

})();
