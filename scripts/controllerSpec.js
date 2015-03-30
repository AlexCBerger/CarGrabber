describe('Controller: topnav', function() {
	beforeEach(module('cs3380'));
	var ctrl;
	beforeEach(inject(function($controller){
		ctrl = $controller('topnav');
	}));

	it('should have tabs available on load', function() {
		expect(ctrl.tabs).toEquel(["home", "search", "buy"]);
	});
});