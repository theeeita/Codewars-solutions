"use strict";

// https://www.codewars.com/kata/57f7e7617a28db2a2200021a

/**
 * @description Умножает каждый элемент переданного массива на указанное число. Возвращает новый массив, не меняя исходный.
 * 
 * @param {Number} mult Множитель.
 * @param {Array}  array Исходный массив.
 */
function multiply(mult, array) {
	return array.map(item => Math.round( mult / (1 / item )));
}