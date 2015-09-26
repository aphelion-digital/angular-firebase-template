(function() {
  'use strict';

  angular
    .module('angularFirebaseTemplate')
    .factory('ExampleFactory', ExampleFactory);

  /** @ngInject */
  function ExampleFactory(Firebase, ExampleArray, ExampleObject) {
    function Service(url) {
      this._dir = 'examples';
      this._url = url;
      this._root = new Firebase(this._url);
      this._ref = this._root.child(this._dir);
    }

    Service.prototype.find = function find(filter) {
      var findRef = this._ref;

      if (typeof filter === 'function') {
        if (!(findRef = filter(findRef))) {
          throw new Error('Filter callback in find function must return firebase ref');
        }
      }

      return new ExampleArray(findRef);
    };

    Service.prototype.findById = function findById(exampleId) {
      return new ExampleObject(this._ref.child(exampleId));
    };

    Service.prototype.findByChild = function findByChild(child, value) {
      return new ExampleArray(this._ref.orderByChild(child).equalTo(value));
    };

    return Service;
  }
})();
