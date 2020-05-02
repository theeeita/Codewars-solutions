"use strict";

// https://www.codewars.com/kata/54d496788776e49e6b00052f

// work in progress

function sumOfDivided(list) {
	const mapFactors = new Map();
	for(const number of list) {
		const numberFactors = getPrimeFactorsUnique(number);
		for(const factor of numberFactors) {
			mapFactors.set( factor, mapFactors.has(factor) ? mapFactors.get(factor) + number : number );
		}
	}

	const result = Array.from(mapFactors.keys())
								.sort((a, b) => a - b)
								.map(item => [ item, mapFactors.get(item) ]);
	
	return result;
}


/**
 * @description Раскладывает переданное число на простые множители, убирая дубли.
 * 
 * @param {Number} number Исходное число.
 */
function getPrimeFactorsUnique(number) { 
	const factors = [];
	for(let i = 2; i <= number; i++) {
		if(number % i === 0 && isPrime(i)) {
			factors.push(i);
			factors.push(...getPrimeFactorsUnique(number / i));
			break;
		}
	}
	return Array.from(new Set(factors));
}

/**
 * @description Проверяет, простое ли переданное число (если на true) или составное (иначе false).
 * 
 * @param {Number} number Исходное число.
 */
function isPrime(number) {
	for(let i = 2; i < number; i++) {
		if(number % i === 0) return false;
	}
	return true;
}