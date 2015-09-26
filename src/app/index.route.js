(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    // This is the redirection route
    $urlRouterProvider.otherwise('/');
  }
})();
