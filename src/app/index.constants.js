/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')

    // Set all outside libraries as angular constants to be used like services
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment);
})();
