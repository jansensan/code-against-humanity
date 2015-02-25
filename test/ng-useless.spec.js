describe('ngUseless', function () {
  beforeEach( module('ngUseless'));

  describe('name', function () {

    it('sets and gets the name', inject(function (ngUseless) {
      ngUseless.name('ngUseless');
      expect(ngUseless.name()).toBe('ngUseless');
    }));
  });
});
