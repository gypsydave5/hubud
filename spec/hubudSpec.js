describe("hubud", function() {
	var username; 

	beforeEach(function() {

		username = "NineInchNade";

	});

	describe("api token", function() {
		
		it("has an api token", function() {
			expect(API_TOKEN).toBe("49bf3d1c4360a29e76973028ae09571d89250153"); 

		});
	});


	describe("can access data from api", function() {

		it("can get data from the api", function() {
			expect(userData).not.toBe(null);

		});


	});


});