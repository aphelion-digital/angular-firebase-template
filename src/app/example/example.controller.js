(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .controller('ExampleController', ExampleController);

  /** @ngInject */
  function ExampleController($log, currentAuth, util, ExampleFactory, FIREBASE_ROOT) {
    var vm = this;
    var exampleFactory;

    vm.example = null;
    vm.examples = [];
    vm.errors = util.errors;
    vm.create = create;
    vm.inspect = inspect;
    vm.save = save;
    vm.remove = remove;

    activate();

    /**
     * Controller init functions
     */
    function activate() {
      util.reset();

      exampleFactory = new ExampleFactory(FIREBASE_ROOT);
      vm.examples = exampleFactory.find();
      vm.examples.$loaded()
        .then(function(examples) {
          vm.example = examples[0];
        })
        .catch(util.failure);
    }

    /**
     * Create new data store
     */
    function create() {
      util.reset();

      vm.example = {};
    }

    /**
     * Inspect a given data store
     */
    function inspect(id) {
      util.reset();

      vm.example = vm.examples.$getRecord(id);
    }

    /**
     * Save a data store
     */
    function save(form) {
      util.reset();

      if (util.checkForm(form)) {
        // Check if data is new or not
        if (vm.example.$id) {
          vm.examples.$save(vm.example)
            .then(util.success)
            .catch(util.failure);
        } else {
          // Must put in String for server data verification
          vm.example.userId = String(currentAuth.uid);
          vm.examples.$add(vm.example)
            .then(function() {
              vm.example = null;
            })
            .catch(util.failure);
        }
      }
    }

    /**
     * Remove a data store
     */
    function remove() {
      util.reset();

      if (vm.example.$id) {
        vm.examples.$remove(vm.example)
          .then(function() {
            vm.example = vm.examples[0];
          })
          .catch(util.failure);
      }
    }
  }
})();
