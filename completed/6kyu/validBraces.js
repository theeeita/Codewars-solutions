"use strict";

// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

/**
 * @description Проверяет, правильно ли расставлены скобки в строке. Если да - true, иначе - false.
 * 
 * @param {String} braces Исходная строка.
 */
function validBraces(braces){
	const queue = [];

	for(const char of braces) {
		if(char === "(" || char === "{" || char === "[") queue.push(char);
		else {
			if(queue.length === 0) return false;
			if(
				(char === ")" && getLastElem(queue) === "(") ||
				(char === "}" && getLastElem(queue) === "{") ||
				(char === "]" && getLastElem(queue) === "[")
			) queue.pop();
      else break;
		}
	}

	return queue.length === 0;

}

/**
 * @description Возвращает последний элемент массива или undefined, если он пустой.
 * 
 * @param {Array} arr Исходный массив.
 */
function getLastElem(arr) {
	return arr[arr.length - 1];
}