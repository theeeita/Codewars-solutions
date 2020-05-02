"use strict";

// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

/**
 * @description Сворачивает диапазоны в массиве (Диапазоны: arr[i + 1] - arr[i] больше 1).
 * @param {Array} list Исходный массив.
 */
function solution(list){
	let result = [],
			temp   = [];
	
	for(let i = 0; i < list.length; i++) {
		let curr = list[i],
				next = list[i + 1];

		if(!temp.includes(curr)) temp.push(curr);
		if(next - curr === 1) temp.push(next);
		else {
			let item = (temp.length === 1) ? curr : (temp.length === 2) ? temp.join(",") : temp[0]+"-"+temp[temp.length - 1];
			temp = [];
			result.push(item);
		}
	}

	return result.join(",");
}