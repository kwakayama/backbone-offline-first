/*global backboneOfflineFirst, $, Backbone*/


window.backboneOfflineFirst = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        //init hoodie
        Backbone.connect('http://127.0.0.1:6004');

        Backbone.hoodie.store.on('add', function (newObject) {
            console.log('listener add', newObject);
        });

        Backbone.hoodie.store.on('remove', function (newObject) {
            console.log('listener remove', newObject);
        });

        Backbone.hoodie.account.on('signin', function (user) {
            console.log('welcome:', user);
        });

        Backbone.hoodie.account.signUp('joe@example.com', 'secret');
        Backbone.hoodie.account.signIn('joe@example.com', 'secret');

        console.log('Hello from Backbone!');
        new this.Routers.ApplicationRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    backboneOfflineFirst.init();
});
