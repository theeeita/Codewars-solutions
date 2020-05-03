"use strict";

/**
 * @description Распаковывает математическое выражение вида (ax + b)^n. по формуле Бинома Ньютона.
 * a, b n - числовые значения коэффициентов. x - строковое имя переменной ("x", "y" ...).
 * 
 * Все коэффициенты могут быть равны 0, 1 и имень любой знак. Само выражение может
 * иметь в себе имя переменной "e", оно не будет распаковано в число.
 * 
 * @param {String} exp Выражение вида (ax+b)^n.
 */
function expand(exp) {
	let data = expressData(exp),
			pow  = data.pow,
			[ a, x, b ] = data.exp;

	if(pow < 2) {
		return (pow === 1) ? `${(a === 1) ? "" : a }${x}${ (!b) ? "" : (b > 0) ? "+"+b : b }` : "1";
	}

	let result = `${ (a === 1 || a === -1) ? (a >= 0 || pow % 2 === 0) ? "" : "-" : a ** pow}${x}^${pow}`,
			tail = b ** pow,
			step = 1,
			coeffs = [];

	while(pow > step) {
		const multer = (factorial(pow)) / ( (factorial(step)) * factorial(pow - step) ),
					temp = multer * ( a ** (pow - step) ) * ( (b) ? b ** step : 1 );
					if(!b) break;
					

		coeffs.push(temp);
		step++;
	}

	for(const item of coeffs) {
		pow -= 1;
		result += `${ (item > 0) ? "+" : "" }${ (item === 1) ? "" : item }${ (pow === 1) ? x : x + "^" + pow }`;
	}

	return `${result}${ (!tail) ? "" : (tail > 0) ? "+"+tail : tail }`;

}

// Вспомогательные функции:

/**
 * @description Возвращает математическое выражение (ax + b)^n в виде объекта,
 * a, b n - числовые значения коэффициентов. x - строковое имя переменной ("x", "y" ...).
 * который содержит в себе, коэффициенты и имя переменной выражения в скобках и степень:
 * { exp: [ a, x, b ], pow: n }
 * 
 * Все коэффициенты могут быть равны 0, 1 и имень любой знак. Само выражение может
 * иметь в себе имя переменной "e", оно не будет распаковано в число.
 * 
 * @param {String} str Выражение вида (ax+b)^n.
 */
function expressData(str) {
	const express = [],
				bracket = str.slice(1, str.indexOf(")")),
				pow = parseInt(str.slice(str.indexOf("^") + 1));

	for(let i = 0; i < bracket.length; i++) {

		let current = bracket[i],
				start = (current === "-") ? i + 1 : i,
				number = (str.slice(start).includes("e") && str.slice(start)[0] !== "e") ? parseIgnoreE( bracket.slice(start) ) : isNaN(parseFloat(bracket.slice(start))) ? 1 : parseFloat(bracket.slice(start)),
				nextIndex = (number === 1) ? start : start + number.toString().length,
				coeff = (current === "-") ? -number : number;

			console.log(number, nextIndex);

			express.push([ coeff, bracket[nextIndex] || "no-var" ]);
			i = nextIndex;
	}

	return {
		exp: (express[1][0] === 0) ? [ express[0][0], express[0][1] ] : [ express[0][0], express[0][1], express[1][0] ],
		pow: pow
	}
}

/**
 * @description Вычисляет факториал переданного числа. n! = 1 * 2 * 3 * ... n
 * 
 * @param {Number} number Переданное число.
 */
function factorial(number) {
	if(number < 2) return number;
	let result = 1;
	for(let i = 2; i <= number ; i++) result *= i;
	return result;
}

/**
 * @description Парсит строку с числом, которое содержит в себе символ "e" и ингорирует его, не распаковывая его в число.
 * 
 * @param {String} str Исходная строка.
 */
function parseIgnoreE(str) {
	let index  = 0,
			result = "";

	while(str[index] !== "e") {
		result += str[index];
		index++;
	}

	return result;
}