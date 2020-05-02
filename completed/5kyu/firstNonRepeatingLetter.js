"use strict";

// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

/**
 * @description Возвращает первый уникальный символ в строке (в исходном регистре) или пустую строку если все символы повторяются.
 * @param {String} string исходная строка.
 */
const firstNonRepeatingLetter = string => {
	let temp = string.toLowerCase();
  for(let i = 0; i < temp.length; i++) {
		let subStringAfter =  temp.slice(i + 1),
				subStringBefore = temp.slice(0, i);
		if(!subStringAfter.includes(temp[i]) && !subStringBefore.includes(temp[i])) return string[i];
	}
	return "";
}