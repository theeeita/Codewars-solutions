"use strict";

// https://www.codewars.com/kata/523f5d21c841566fde000009

/**
 * @description Удаляет из originals все элементы, которые содержаться в repeaters. Изменяет исходный массив.
 * 
 * @param {Array} originals Массив, из которого нужно удалить элементы.
 * @param {Array} repeaters Массив элементов, которые нужно удалить.
 */
function arrayDiff(originals, repeaters) {
	for(const rep of repeaters) {
		while(originals.includes(rep)) {
			const repIndex = originals.findIndex(item => item === rep);
			originals.splice(repIndex, 1);
		}
	}
	return originals;
}