"use strict";

// https://www.codewars.com/kata/54d7660d2daf68c619000d95

/**
 * @description Возвращает дроби, привведенные к общему знаменателю (в виде строки).
 * @param {Array} Массив из дробей вида [ числитель, знаменатель ].
 */
function convertFrac(list){
	let denoms = list.map(item => item[1]),
			result = "",
			maxDenom = null;

	maxDenom = getMaxCommonDenom(denoms);

	list.forEach((item, index) => {
		result += `(${(maxDenom / denoms[index]) * item[0]},${maxDenom})`;
	});

	return result;
}

/**
 * @description Находит общий знаменатель.
 * @param {Array} denoms Массив знаменателей.
 */
function getMaxCommonDenom(denoms) {
	let max = Math.max(...denoms);
	while(true) {
		if(denoms.every(item => max % item === 0)) return max;
		max++;
	}
}