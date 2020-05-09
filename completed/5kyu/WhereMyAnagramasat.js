"use strict";

// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

/**
 * @description Возвращает массив, который содержит все анаграммы из массива слов к исходному.
 * Если найти их не удасться, возвращает пустой массив.
 * 
 * @param {String} word Слово, к которому надо подобрать анаграммы.
 * @param {Array} words Массив слов, из которых надо отобрать анаграммы.
 */
function anagrams(word, words) {
	return words.reduce((result, item) => {
		if(wordValue(word) === wordValue(item)) result.push(item);
		return result;
	}, []);

}

function wordValue(word) {
	return word.split("").reduce((value, char) => value + char.charCodeAt(0), 0);
}