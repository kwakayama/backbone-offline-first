/*global backboneOfflineFirst, M*/

backboneOfflineFirst.Collections = backboneOfflineFirst.Collections || {};

(function () {
    'use strict';

    backboneOfflineFirst.Collections.TodosCollection = M.Collection.extend({

        model: backboneOfflineFirst.Models.TodoModel,

		entity: 'todos',

        url: 'http://localhost:8200/bikini/todos',

        store: M.BikiniStore.create({
			localStore: M.LocalStorageStore
        })

    });

})();
