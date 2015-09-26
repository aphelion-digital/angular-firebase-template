(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .controller('ExampleController', ExampleController);

  /** @ngInject */
  function ExampleController($log, currentAuth, ExampleFactory, FIREBASE_ROOT) {
    var vm = this;
    var exampleFactory;

    vm.example = null;
    vm.examples = [];
    vm.errors = [];
    vm.create = create;
    vm.inspect = inspect;
    vm.save = save;
    vm.remove = remove;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      exampleFactory = new ExampleFactory(FIREBASE_ROOT);
      vm.examples = exampleFactory.find()
        .$loaded()
        .then(function(examples) {
          vm.example = examples[0];
        })
        .catch(failure);
    }

    /**
     * Create new data store
     */
    function create() {
      reset();

      vm.example = {};
    }

    /**
     * Inspect a given data store
     */
    function inspect(id) {
      reset();

      vm.example = vm.examples.$getRecord(id);
    }

    /**
     * Save a data store
     */
    function save(form) {
      reset();

      if (checkForm(form)) {
        // Check if data is new or not
        if (vm.example.$id) {
          vm.examples.$save(vm.example)
            .then(success)
            .catch(failure);
        } else {
          // Must put in String for server data verification
          vm.example.userId = String(currentAuth.uid);
          vm.examples.$add(vm.example)
            .then(success)
            .catch(failure);
        }
      }
    }

    /**
     * Remove a data store
     */
    function remove() {
      reset();

      if (vm.example.$id) {
        vm.examples.$remove(vm.example)
          .then(function() {
            vm.example = vm.examples[0];
          })
          .catch(failure);
      }
    }

    /**
     * Check form is valid
     */
    function checkForm(form) {
      if (form.$invalid) {
        vm.errors.push('Please fill out the required inputs');
        $log.debug('Form invalid');
        $log.debug(form);

        return false;
      }

      return true;
    }

    /**
     * Reset page errors etc.
     */
    function reset() {
      vm.errors = [];
    }

    /**
     * Default handle success callback
     */
    function success() {
      // code...
    }

    /**
     * Default handle callback failure errors
     */
    function failure(error) {
      vm.errors.push('An error occured. We appologise for the inconvenience.');
      $log.debug(error);
    }
  }
})();
