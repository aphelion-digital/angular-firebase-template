(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
