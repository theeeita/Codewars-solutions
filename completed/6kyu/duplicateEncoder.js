"use strict";

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

/**
 * @description Возвращает новую строку, которая шифрует переданную строку.
 * Алгоритм: если какой-то символ (независимо от регистра) встречается больше 1 раза, на его место ставится ")" иначе "(".
 * 
 * @param {String} word Исходная строка.
 */
function duplicateEncode(word){
	const data = countChars(word);

	let result = "";

	for(const char of word) {
		result += ( data.get(char.toLowerCase()) === 1 ) ? "(" : ")";
	}

	return result;
}

/**
 * @description Считает сколько раз каждый символ встречается в строке. Результат возвращается в виде Map { char: count }.
 * 
 * @param {String} str Строка, символы которой надо посчитать.
 */
function countChars(str) {
	const data = new Map(),
				temp = str.toLowerCase();
	for(let i = 0; i < temp.length; i++) {
		let count = 1;
		for(let j = i + 1; j < temp.length; j++) {
			if( temp[i] === temp[j] ) count++;
		}
		if( !data.has(temp[i]) ) data.set(temp[i], count);
	}

	return data;
}