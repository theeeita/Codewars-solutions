"use strict";

// https://www.codewars.com/kata/525f50e3b73515a6db000b83

/**
 * @description Форматирует строку в строку с телефонным номером (xxx) xxx-xxxx
 * 
 * @param {Array} numbers Массив из 10-ти цифр от 0 до 9.
 */
function createPhoneNumber(numbers) {
	let result = "(";
	for(let i = 0; i < numbers.length; i++) result += (i === 2) ? `${numbers[i]}) ` : (i === 5) ? `${numbers[i]}-` : numbers[i];
	return result;
}