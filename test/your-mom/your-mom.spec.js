(function () {
  'use strict';

  describe('ng.useless.YourMom', function () {

    var el, scope;

    beforeEach(module('ng.useless.YourMom'));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      var html = '<div><your-mom></your-mom></div>';
      el = $compile(html)(scope);
      scope.$apply();
    }));

    it('should be displayed in a div', function () {
      expect(el[0].firstChild.innerText).toBe('Your Mom');
    });

    it('should stop calling me');

  });

})();
