"use strict";

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

/**
 * @description Инкрементирует последнее число в строке или просто добавляет 1 к строке, если на ее конце нет чисел.
 * @param {String} string Исходная строка.
 */
function incrementString (string) {
	let temp  = string.split(""),
			chars  = temp.filter(item => isNaN(item)).join(""),
			spare  = temp.filter(item => item == 0),
			number = temp.filter(item => !isNaN(item) && item != 0);

	if(number.length === 0 && spare.length > 0) return chars + spare.slice(0, spare.length - 1).join("") + 1;
	else {
		let incrementor = String(+number.join("") + 1),
				incLength = incrementor.length;

		while(incLength > number.length) {
			spare.pop();
			incLength--;
		}
		
		return chars + spare.join("") + incrementor;
	}
}