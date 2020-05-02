"use strict";

// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

/**
 * @description Возвращает объект с пиковыми элементами массива и их позициями (если их несколько, в виде массива).
 * @param {Array} arr Исходный массив целых чисел.
 */
function pickPeaks(arr){
	let peakIndex = [],
			peakItems = [];

	for(let i = 1; i < arr.length; i++) {
		if(arr[i] === arr[i + 1]) {
			let j = i;
			while(arr[j] === arr[j + 1]) j++;
			if(arr[j] > arr[i - 1] && arr[j] > arr[j + 1]) {
				peakItems.push(arr[i]);
				peakIndex.push(i);
			}
			i = j;
		} else {
				if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
					peakItems.push(arr[i]);
					peakIndex.push(i);
				}
		}
	}

	return {
		pos: peakIndex,
		peaks: peakItems
	}
}