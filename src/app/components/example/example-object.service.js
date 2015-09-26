(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .factory('ExampleObject', ExampleObject);

  /** @ngInject */
  function ExampleObject($firebaseObject, Example) {
    var service = angular.extend(Example, {
      // extensions...
    });

    return $firebaseObject.$extend(service);
  }
})();
