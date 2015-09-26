(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .factory('ExampleArray', ExampleArray);

  /** @ngInject */
  function ExampleArray($firebaseArray, Example) {
    var service = angular.extend(Example, {
      // extensions...
    });

    return $firebaseArray.$extend(service);
  }
})();
