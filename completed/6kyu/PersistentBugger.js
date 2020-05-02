"use strict";

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

/**
 * @description Возвращает количество шагов по умножению цифр числа, потом цифр полученного произведения до тех пор,
 * пока длина числа не станет меньше 10.
 * 
 * @param {Number} num Исходное число.
 */
const persistence = number => {
	let numLength = String(number).length,
			tempProduct = number,
			count = 0;
			
	 while(numLength > 1) {
		tempProduct = getDigitProduct(tempProduct);
		numLength = String(tempProduct).length;
		count++;
	 }
	 
	 return count;
}

/**
 * @description Вспомогательная функция. Возвращает произведение цифр числа.
 * @param {Number} num Исходное число.
 */ 
function getDigitProduct(num) {
	let result = 1;
	let digits = String(num).split("");
	digits.forEach(item => {
		result *= +item;
	});
	return result;
}