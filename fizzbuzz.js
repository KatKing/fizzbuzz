
function fizzBuzzRefactor(number){
	number = document.getElementById("userNumber").value;
	if (isNaN(number) || number != Math.floor(number)){
		return window.alert("Please enter a numeric value with no decimals to play FIZZBUZZ!");
		document.getElementById("number").value = "";
	} else if (number === ""){
		return window.alert("Please enter a number to get started!");
	}
	
var fizzList = "";
var i;
for (var i = 1; i <= number; i ++){

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

}

function clear(){
	document.getElementById('userNumber').value = "";
	document.getElementById("fizzbuzz_list").innerHTML = "";
	
}

//Call the Function
document.getElementById("generateFizzBuzz").onclick = function() { fizzBuzzRefactor(); };
document.getElementById('clear').onclick = function(){clear();};


