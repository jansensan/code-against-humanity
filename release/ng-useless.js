(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngUseless
   * @description
   * `ngUseless` is an angular module for something exciting
   */
  angular.module('ngUseless', []);

})();

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLXVzZWxlc3MubW9kdWxlLmpzIiwibmctdXNlbGVzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im5nLXVzZWxlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEBuZ2RvYyBvdmVydmlld1xuICAgKiBAbmFtZSBuZ1VzZWxlc3NcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIGBuZ1VzZWxlc3NgIGlzIGFuIGFuZ3VsYXIgbW9kdWxlIGZvciBzb21ldGhpbmcgZXhjaXRpbmdcbiAgICovXG4gIGFuZ3VsYXIubW9kdWxlKCduZ1VzZWxlc3MnLCBbXSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8qKlxuICAgKiBAbmdkb2Mgb2JqZWN0XG4gICAqIEBuYW1lIG5nVXNlbGVzc1xuICAgKi9cbiAgYW5ndWxhci5tb2R1bGUoJ25nVXNlbGVzcycpXG4gICAgLmZhY3RvcnkoJ25nVXNlbGVzcycsIG5nVXNlbGVzcyk7XG5cbiAgZnVuY3Rpb24gbmdVc2VsZXNzKCkge1xuICAgIHZhciBfbmFtZTtcblxuICAgIC8vIFB1YmxpYyBBUElcbiAgICB2YXIgbW9kZWwgPSB7fTtcbiAgICBtb2RlbC5uYW1lID0gbmFtZTtcblxuICAgIC8qKlxuICAgICAqIEBuZ2RvYyBmdW5jdGlvblxuICAgICAqIEBuYW1lIG5nVXNlbGVzcyNuYW1lXG4gICAgICogQG1ldGhvZE9mIG5nVXNlbGVzc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogR2V0dGVyL1NldHRlciBtZXRob2QgZm9yIG5hbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gYU5hbWUgVGhlIG5hbWUgeW91IHdvdWxkIGxpa2UgdG8gc2V0LlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGN1cnJlbnQgdmFsdWUgb2YgbmFtZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBuYW1lKGFOYW1lKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIF9uYW1lO1xuICAgICAgfVxuICAgICAgX25hbWUgPSBhTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==