/*global backboneOfflineFirst, Backbone*/

backboneOfflineFirst.Routers = backboneOfflineFirst.Routers || {};

(function () {
    'use strict';

    backboneOfflineFirst.Routers.ApplicationRouter = Backbone.Router.extend({
		routes: {
            '': 'defaultAction'
        },

        defaultAction: function () {
            new backboneOfflineFirst.Views.TodolistView();
        }
    });

})();
