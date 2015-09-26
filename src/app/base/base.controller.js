(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .controller('BaseController', BaseController);

  /** @ngInject */
  function BaseController($log, $state, Auth, FIREBASE_ROOT) {
    var vm = this;
    var auth;

    vm.logout = logout;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      auth = Auth.get(FIREBASE_ROOT);
    }

    /**
     * Logout of firebase account
     */
    function logout() {
      auth.$unauth();
      $log.log('Logged out');
      $state.go('main');
    }
  }
})();
