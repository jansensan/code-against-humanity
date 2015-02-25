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

(function () {
  'use strict';
  /**
   * @ngdoc overview
   * @name ng.useless.YourMom
   * @description
   * `ng.useless.YourMom` is an angular module for Your Mom.
   */
  angular.module('ng.useless.YourMom', [])
    .directive('yourMom', YourMom);

  /**
   * @ngdoc directive
   * @name ng.useless.YourMom.directives:yourMom
   * @restrict E
   * @description
   * Your Mom anywhere you please
   * @example
   <example module="example">
   <file name="script.js">
   angular.module('example', ['ng.useless.YourMom'])
   .controller('Ctrl', Ctrl);
   function Ctrl() {
         var vm = this;

       }
   </file>
   <file name="index.html">
   <div ng-controller="Ctrl as vm">
   <your-mom></your-mom>
   </div>
   </file>
   </example>
   *
   **/
  function YourMom() {
    return {
      restrict: 'E',
      template: '<span>Your Mom</span>'
    };
  }

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLXVzZWxlc3MubW9kdWxlLmpzIiwibmctdXNlbGVzcy5qcyIsInlvdXItbW9tL3lvdXItbW9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJuZy11c2VsZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBAbmdkb2Mgb3ZlcnZpZXdcbiAgICogQG5hbWUgbmdVc2VsZXNzXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmdVc2VsZXNzYCBpcyBhbiBhbmd1bGFyIG1vZHVsZSBmb3Igc29tZXRoaW5nIGV4Y2l0aW5nXG4gICAqL1xuICBhbmd1bGFyLm1vZHVsZSgnbmdVc2VsZXNzJywgW10pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvKipcbiAgICogQG5nZG9jIG9iamVjdFxuICAgKiBAbmFtZSBuZ1VzZWxlc3NcbiAgICovXG4gIGFuZ3VsYXIubW9kdWxlKCduZ1VzZWxlc3MnKVxuICAgIC5mYWN0b3J5KCduZ1VzZWxlc3MnLCBuZ1VzZWxlc3MpO1xuXG4gIGZ1bmN0aW9uIG5nVXNlbGVzcygpIHtcbiAgICB2YXIgX25hbWU7XG5cbiAgICAvLyBQdWJsaWMgQVBJXG4gICAgdmFyIG1vZGVsID0ge307XG4gICAgbW9kZWwubmFtZSA9IG5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBAbmdkb2MgZnVuY3Rpb25cbiAgICAgKiBAbmFtZSBuZ1VzZWxlc3MjbmFtZVxuICAgICAqIEBtZXRob2RPZiBuZ1VzZWxlc3NcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKlxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIEdldHRlci9TZXR0ZXIgbWV0aG9kIGZvciBuYW1lXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZz19IGFOYW1lIFRoZSBuYW1lIHlvdSB3b3VsZCBsaWtlIHRvIHNldC5cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjdXJyZW50IHZhbHVlIG9mIG5hbWUuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbmFtZShhTmFtZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBfbmFtZTtcbiAgICAgIH1cbiAgICAgIF9uYW1lID0gYU5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8qKlxuICAgKiBAbmdkb2Mgb3ZlcnZpZXdcbiAgICogQG5hbWUgbmcudXNlbGVzcy5Zb3VyTW9tXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBgbmcudXNlbGVzcy5Zb3VyTW9tYCBpcyBhbiBhbmd1bGFyIG1vZHVsZSBmb3IgWW91ciBNb20uXG4gICAqL1xuICBhbmd1bGFyLm1vZHVsZSgnbmcudXNlbGVzcy5Zb3VyTW9tJywgW10pXG4gICAgLmRpcmVjdGl2ZSgneW91ck1vbScsIFlvdXJNb20pO1xuXG4gIC8qKlxuICAgKiBAbmdkb2MgZGlyZWN0aXZlXG4gICAqIEBuYW1lIG5nLnVzZWxlc3MuWW91ck1vbS5kaXJlY3RpdmVzOnlvdXJNb21cbiAgICogQHJlc3RyaWN0IEVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFlvdXIgTW9tIGFueXdoZXJlIHlvdSBwbGVhc2VcbiAgICogQGV4YW1wbGVcbiAgIDxleGFtcGxlIG1vZHVsZT1cImV4YW1wbGVcIj5cbiAgIDxmaWxlIG5hbWU9XCJzY3JpcHQuanNcIj5cbiAgIGFuZ3VsYXIubW9kdWxlKCdleGFtcGxlJywgWyduZy51c2VsZXNzLllvdXJNb20nXSlcbiAgIC5jb250cm9sbGVyKCdDdHJsJywgQ3RybCk7XG4gICBmdW5jdGlvbiBDdHJsKCkge1xuICAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgIH1cbiAgIDwvZmlsZT5cbiAgIDxmaWxlIG5hbWU9XCJpbmRleC5odG1sXCI+XG4gICA8ZGl2IG5nLWNvbnRyb2xsZXI9XCJDdHJsIGFzIHZtXCI+XG4gICA8eW91ci1tb20+PC95b3VyLW1vbT5cbiAgIDwvZGl2PlxuICAgPC9maWxlPlxuICAgPC9leGFtcGxlPlxuICAgKlxuICAgKiovXG4gIGZ1bmN0aW9uIFlvdXJNb20oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZTogJzxzcGFuPllvdXIgTW9tPC9zcGFuPidcbiAgICB9O1xuICB9XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=