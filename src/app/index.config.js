(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Toggle debug logs
    $logProvider.debugEnabled(true);
  }
})();
