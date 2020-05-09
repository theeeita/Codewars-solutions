"use strict";

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/

/**
 * @description Сортирует нечетные элементы массива по возрастанию. Четные элементы не меняют свой порядок.
 * 
 * @param {Array} array Массив чисел.
 */
function sortArray(array) {
	const oddsData = new Map(),
				evens = array.filter(item => item % 2 !== 0).sort((a, b) => a - b);

	array.forEach((item, pos) => { if(item % 2 === 0) oddsData.set(pos, item) });

	for(const pos of oddsData.keys()) evens.splice(pos, 0, oddsData.get(pos));

	return evens;
}