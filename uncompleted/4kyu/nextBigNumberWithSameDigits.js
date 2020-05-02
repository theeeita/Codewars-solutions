"use strict";

// https://www.codewars.com/kata/55983863da40caa2c900004e/

// work in progress

function rearrenge(number) {

	const digits = getDigits(number);

	let lastIndex  = digits.length - 1,
			pivotIndex = lastIndex - 1,
			pivot = null,
			replacer = null;

	while(digits[lastIndex] < digits[pivotIndex]) {
		lastIndex--;
		pivotIndex--;
	}

	pivot = digits[pivotIndex];

	const unchangedPart = +digits.slice(0, pivotIndex).join(""),
				incrementPartSorted = digits.slice(pivotIndex + 1).sort((a, b) => a - b);

	for(let i = 0; i < incrementPartSorted.length; i++) {
		let item = incrementPartSorted[i];
		if(item > pivot) {
			replacer = item;
			incrementPartSorted[i] = pivot;
			break;
		}
	}

	return +[ unchangedPart, replacer, ...incrementPartSorted ].join("");
}

function getDigits(number) {
	return number.toString().split("").map(digit => +digit);
}