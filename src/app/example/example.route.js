(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('base.example', {
        url: '/example',
        templateUrl: 'app/example/views/example.html', // use suffix '.html' instead of '.jade' as it accesses redered version
        controller: 'ExampleController',
        controllerAs: 'vmEC',
      });
  }
})();
