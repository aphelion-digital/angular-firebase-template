/* global
  moment:false,
  jQuery:false,
  Firebase:false,
  _:false
*/
(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')

    // Set all outside libraries as angular constants to be used like services
    .constant('moment', moment)
    .constant('jQuery', jQuery)
    .constant('Firebase', Firebase)
    .constant('lodash', _)

    // App constants
    .constant('FIREBASE_ROOT', 'https://angular-firebase-tmp.firebaseio.com');
})();
