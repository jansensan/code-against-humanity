(function () {
  'use strict';
  /**
   * @ngdoc object
   * @name ngUseless
   */
  angular.module('ngUseless')
    .factory('ngUseless', ngUseless);

  function ngUseless() {
    var _name;

    // Public API
    var model = {};
    model.name = name;

    /**
     * @ngdoc function
     * @name ngUseless#name
     * @methodOf ngUseless
     * @function
     *
     * @description
     * Getter/Setter method for name
     *
     * @param {String=} aName The name you would like to set.
     * @return {String} The current value of name.
     */
    function name(aName) {
      if (!arguments.length) {
        return _name;
      }
      _name = aName;
    }

    return model;
  }

})();
