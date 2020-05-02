"use strict";

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

/**
 * @description Находит сумму наибольшего подмассива в исходном массиве. Пустой массив или содержащий только 0 или отрицательные числа вернет 0.
 * @param {Array} array Исходный массив.
 */
const maxSequence = array => {
	if(array.length === 0 || array.every(item => item <= 0)) return 0;

	let maxResult = 0,
			subResult = 0;

	for(let item of array) {
		subResult += item;
		maxResult = Math.max(maxResult, subResult);
		if(subResult < 0) subResult = 0;
	}

	return maxResult;
};