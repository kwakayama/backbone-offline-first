/*global backboneOfflineFirst, Backbone*/

backboneOfflineFirst.Collections = backboneOfflineFirst.Collections || {};

(function () {
    'use strict';

    backboneOfflineFirst.Collections.ApplicationCollection = Backbone.Collection.extend({

        model: backboneOfflineFirst.Models.ApplicationModel

    });

})();
