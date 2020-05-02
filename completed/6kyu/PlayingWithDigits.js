"use strict";

// https://www.codewars.com/kata/5552101f47fc5178b1000050

/**
 * @description Возвращает число k = n *k = d1^p + d2^(p + 1), где d1, d2 ... - цифры числа n.
 * @param {Number} n - Исходное число.
 * @param {Number} p - Исходная степень для цифр числа n.
 */
function digPow(n, p){
	let step = p,
			digits = String(n).split("").map(value => +value),
			temp = 0;

	for(let item of digits) {
		temp += item ** step;
		step++;
	}

	for(let i = 1; n <= temp; i++) {
		if(n * i === temp) return i;
	}

	return -1;
}