'use strict'

var names = ['Cindy', 'Logan', 'Chris', 'Kathryn'];
var compliment = ' is awesome!';

function complimentGiver(array, phrase){
	var complimented = [];
	for (var i = 0; i < array.length; i++){
		complimented.push(array[i] + phrase)
	}
	return complimented;
}

console.log(complimented(names, compliment));