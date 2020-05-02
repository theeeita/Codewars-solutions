"use strict";

// https://www.codewars.com/kata/550554fd08b86f84fe000a58

/**
 * @description Возвращает все подстроки, которые есть в словах в отсортированном порядке.
 * @param {Array} subs Массив подстрок.
 * @param {Array} words Массив слов.
 */
function inArray(subs, words) {
	let temp = new Set;
	for(let subString of subs) {
		for(let word of words) if(word.includes(subString)) temp.add(subString);
	}
	return Array.from(temp).sort();
}