/*global backboneOfflineFirst, Backbone*/

backboneOfflineFirst.Collections = backboneOfflineFirst.Collections || {};

(function () {
    'use strict';

    backboneOfflineFirst.Collections.TodosCollection = Backbone.Collection.extend({

		url: '/todos',

        model: backboneOfflineFirst.Models.TodoModel

    });

})();
