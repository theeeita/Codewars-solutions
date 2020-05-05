"use strict";

// https://www.codewars.com/kata/525f4206b73515bffb000b21

/**
 * @description Суммирует два числа посимвольно как в столбик. Возвращает сумму в виде строки.
 * 
 * @param {Number} a Первое число.
 * @param {Number} b Второе число.
 */
function add(a, b) {
	const digitsA = a.split("").map(n => +n),
				digitsB = b.split("").map(n => +n);

	let limit = 0,
			spare = 0,
			res 	= [];

	while(true) {
		if(digitsA.length === digitsB.length) {
			limit = digitsA.length;
			break;
		}
		(digitsA.length > digitsB.length) ? digitsB.unshift(0) : digitsA.unshift(0);
	}

	for(let i = limit - 1; i >= 0; i--) {
		let temp = +digitsB[i] + +digitsA[i] + spare;
		if(temp >= 10) {
			spare = 1;
			(i === 0) ? res.unshift( `1${+temp.toString()[1]}` ) : res.unshift(+temp.toString()[1]);
		} else {
			res.unshift(+temp);
			spare = 0;
		}
	}

	return res.join("");
}