"use strict";

// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

/**
 * @description Возвращает элементы массива, собранные в виде "спирали" по часовой стрелке.
 * @param {Array} arr Исходный массив N x N.
 */
const snail = arr => {
	let result = [],
			temp = [],
			lastIndex = arr.length - 1;

	if(arr.length <= 1) return arr[0];

	for(let i = 0; i < arr.length; i++) {

		if(i == 0) {
			result.push(...arr[i]);
			continue;
		}

		if(i == lastIndex) {
			result.push(...arr[i].reverse());
			let j = i - 1;
			while(j > 0) {
				result.push(arr[j][0]);
				j--;
			}
			if(temp.length > 0) result.push( ...snail(temp) );
		}

		else {
			temp.push( arr[i].slice(1, lastIndex) );
			result.push(arr[i][lastIndex]);
		}

	}

	return result;
};