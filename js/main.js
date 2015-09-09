$(function() {

	$("#submitN").click(function() {
		var num = $('#chooseN').val();
		if (!isNaN(num)) {
			writeFizzBuzz(num);
		} else {
			console.log("You didn't put in a number!");
		}
	});

	var writeFizzBuzz = function(n) {
		for (i = 1; i <= n; i++) {
			if (i % 3 == 0 & i % 5 != 0) {
				console.log("Fizz");
			} else if (i % 3 != 0 & i % 5 == 0) {
				console.log("Buzz");
			} else if (i % 3 == 0 & i % 5 == 0) {
				console.log("FizzBuzz");
			} else {
				console.log(i);
			}
		}
	};

});