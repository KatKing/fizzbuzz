var fizzBuzz = document.getElementById("fizzbuzz_list");

var fizzList = "";

var i;
for (var i = 1; i <= 100; i ++){

	fizzList += "<li>";

	if ((i % 3 === 0) && (i % 5 === 0)){
		fizzList += 'fizzbuzz';
	}
	else if (i % 3 === 0){
		fizzList +=  'fizz';
	}
	else if (i % 5 === 0){
		fizzList +=  'buzz';
	} else {
		fizzList += i;
	}
	fizzList += "</li>";
} 


fizzbuzz_list.innerHTML += fizzList;