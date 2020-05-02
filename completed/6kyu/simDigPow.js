"use strict";

// https://www.codewars.com/kata/5626b561280a42ecc50000d1

/**
 * @description Находит все числа удовлетворяющие условию d1^1 + d2+2+ dn^n = value, где d1, d2, ... dn
 * цифры каждого числа в промежутке от a до b (включительно).
 * @param {Number} a Начало промежутка.
 * @param {Number} b Конец промежутка.
 */
function sumDigPow(a, b) {
	let result = [];
	while(a <= b) {
		if(isFulfilled(a)) result.push(a);
		a++;
	}

	return result;
}

/**
 * @description Проверяет, удовлетворяет ли число условию: d1^1 + d2+2+ dn^n = value, где d1, d2, ... dn - цифры value.
 * @param {Number} value Исходное число.
 */
function isFulfilled(value) {
	let digits = String(value).split("").map(item => +item),
			step = 1,
			sum  = 0;
	for(let item of digits) {
		sum += (item ** step);
		step++;
	}

	return (sum === value) ? true : false;
}