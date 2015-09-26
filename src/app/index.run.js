(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    // $log.debug messages will only output when config sets debug to true
    $log.debug('runBlock end');
  }
})();
