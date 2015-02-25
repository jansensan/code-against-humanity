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
