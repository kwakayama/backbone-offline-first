/*global backboneOfflineFirst, Backbone, JST*/

backboneOfflineFirst.Views = backboneOfflineFirst.Views || {};

(function () {
	'use strict';

	backboneOfflineFirst.Views.TodolistView = Backbone.View.extend({

		el: '#todo-app',

		template: JST['app/scripts/templates/todoList.ejs'],

		events: {
			'submit': 'createTodo'
		},

		initialize: function () {
			this.collection = new backboneOfflineFirst.Collections.TodosCollection();
			console.log(this.collection);
			this.render();
			this.listenTo(this.collection, 'add', this.addTodoItem);
			this.listenTo(this.collection, 'reset', this.addAllTodoItems);
		},

		render: function () {
			this.$el.html(this.template());
			return this;
		},

		createTodo: function (event) {
			console.log('todoList.js (34) :');
			event.preventDefault();

			var title = this.$('#new-todo').val().trim();

			if (title) {
				var todo = new backboneOfflineFirst.Models.TodoModel({
					title: title
				});
				this.collection.add(todo);

				$('#new-todo').val('');
			}
		},

		addTodoItem: function (todo) {
			var view = new backboneOfflineFirst.Views.TodoView({ model: todo });
			this.$('ul').append(view.render().el);
		},

		addAllTodoItems: function () {
			this.collection.each(this.addTodoItem, this);
		}
	});

})();
