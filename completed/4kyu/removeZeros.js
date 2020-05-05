"use strict";

// https://www.codewars.com/kata/52aae14aa7fd03d57400058f

/**
 * @description Перемещает все 0 или с строки "0" в конец массива, остальные элементы не меняют свой порядок.
 * По условию задачи эта функция не может использовать никакие методы Object.prototype/Array.pototype
 * или создавать какие-то временные объекты или массивы.
 * 
 * @param {Array} Исходный массив.
 */
function removeZeros(array) {
	let temp 	= "",
			tail 	= "",
			start = 0;

	for(let i = 0; i < array.length; i++) {
		let current = array[i];
		if(typeof current === "object" && current !== null) {
			temp += `-${"{" + i + "}"}-`;
			continue;
		}
		if(current === 0 || current === "0") {
			 tail += `-${ (typeof current === "string") ? "\"" + current + "\"" : current }-`;
			continue;
		}
		if(current === null || current === false || typeof current === "string" || (current > 0)) {
			temp += `-${ (typeof current === "string") ? "\"" + current + "\"" : current }-`;
		}
	}

	temp += tail;

	for(let i = 1; i < temp.length - 1; i++) {
		let current = temp[i];

		if(current === "-") continue;
		else {
		
			if(current === "t" || current === "f" || current === "n") {
				let j = i,
						value = "";
				while(temp[j] !== "-") {
					value += temp[j];
					j++;
				}
				i = j;
				array[start] = ( value === "true" ) ? true : ( value === "null" ) ? null : false;
				start++;
				continue;
			}
			
			if(current === "\"") {
				let j = i + 1,
						str = "";
				while(temp[j] !== "\"") {
					str += temp[j];
					j++;
				}
				i = j;
				array[start] = str;
				start++;
				continue;
			}
			
			if(current === "{") {
				let j = i + 1,
						objIndex = "";
				while(temp[j] !== "}") {
					objIndex += temp[j];
					j++;
				}
				i = j;
				array[start] = array[objIndex];
				start++;
			}
			
			if(!isNaN(current)) {
				let j = i + 1,
						n = ""+current;
				do {
					if(temp[j] === "-") break;
					if(temp[j] === "." || !isNaN(temp[j])) {
						n += temp[j];
						j++;
					}
				} while(!isNaN(temp[j]));
				i = j;
				array[start] = +n;
				start++;
			}
		}

	}

	return array;
}