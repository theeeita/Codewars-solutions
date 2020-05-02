"use strict";

// https://www.codewars.com/kata/55960bbb182094bc4800007b

/**
 * @description Вставляет дефисы между двумя нечетными цифрами (превращая число в строку).
 * 
 * @param {Number} num Исходное число.
 */
function insertDash(num) {
	const temp = num.toString().split("");

	for(let i = 0; i < temp.length; i++) {
		let current = temp[i],
				next    = temp[i + 1];
		if(current % 2 !== 0 && next % 2 !== 0 && next) temp[i] = `${current}-`;
	}

	return temp.join("");
}
