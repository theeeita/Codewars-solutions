"use strict";

// https://www.codewars.com/kata/573992c724fc289553000e95

// work in progress...

function smallest(number) {
	let numberDigits = getDigits(number),
			minElement   = Math.min(...numberDigits),
			minIndex     = numberDigits.findIndex(item => item === minElement);

	if(minIndex === 0) {
		let temp = rearrenge(numberDigits),
				tempIndex   = numberDigits.findIndex(item => item === temp[1]);

		return [ +temp.join(""), tempIndex, 1 ];
	}

	numberDigits.splice(minIndex, 1);
	return [ +(minElement + numberDigits.join("")), minIndex, (minElement === 0) ? minIndex : 0 ];

}

function getDigits(number) {
 return number.toString()
				 			.split("")
				 			.map(item => +item);
}

function rearrenge(array) {
	let min   = Math.min(...array),
			index = array.findIndex(item => item === min);

	if(index === 0) return [ array[0], ...rearrenge(array.slice(1)) ];
	array.splice(index, 1);
	array.unshift(min);
	return array;
}