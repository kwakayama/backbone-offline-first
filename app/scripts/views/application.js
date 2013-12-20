/*global backboneOfflineFirst, Backbone, JST*/

backboneOfflineFirst.Views = backboneOfflineFirst.Views || {};

(function () {
    'use strict';

    backboneOfflineFirst.Views.ApplicationView = Backbone.View.extend({

        template: JST['app/scripts/templates/application.ejs']

    });

})();
