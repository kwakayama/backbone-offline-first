/*global backboneOfflineFirst, Backbone*/

backboneOfflineFirst.Collections = backboneOfflineFirst.Collections || {};

(function () {
    'use strict';

    backboneOfflineFirst.Collections.TodosCollection = Backbone.Collection.extend({

        model: backboneOfflineFirst.Models.TodoModel

    });

})();
