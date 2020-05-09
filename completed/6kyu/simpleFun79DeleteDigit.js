"use strict";

// https://www.codewars.com/kata/5894318275f2c75695000146

/**
 * @description Находит максимальное число, которое можно получить из n, удаляя только одну цифру.
 * 
 * @param {Number} n Исходное число.
 */
function deleteDigit(n) {
  const given		= n,
				numbers = [],
				digits 	= n.toString().split("");

	let _digits = n.toString().split("");

	for(let i = 0; i < digits.length; i++) {
		_digits.splice(i, 1);
		numbers.push (+_digits.join(""));
		_digits = digits.map(item => item);
	}

	return Math.max(...numbers);
}