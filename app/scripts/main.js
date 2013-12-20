/*global backboneOfflineFirst, $, Backbone*/


window.backboneOfflineFirst = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        new this.Routers.ApplicationRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    backboneOfflineFirst.init();
});
