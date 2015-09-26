(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .factory('Example', Example);

  /** @ngInject */
  function Example(Firebase, $firebaseObject) {
    var service = {
      // function called to check if server data needs to update
      $$updated: function() {
        var changed = $firebaseObject.prototype.$$updated.apply(this, arguments);

        if (changed) {
          // set updated time
          this.updatedAt = Firebase.ServerValue.TIMESTAMP;
        }

        return changed;
      },

      // configure the default values for data store
      $$defaults: function() {
        return {
          createdAt: Firebase.ServerValue.TIMESTAMP,
          updatedAt: Firebase.ServerValue.TIMESTAMP,
        };
      },
    };

    return service;
  }
})();
