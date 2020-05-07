"use strict";

// https://www.codewars.com/kata/5235c913397cbf2508000048

/**
 * @description Возващает результат математической операции.
 * 
 * @param {String | Number} a Левый операнд.
 * @param {String} oper Действие (умножение, деление, сложение, вычитание).
 * @param {String | Number} a Правый операнд.
 */
function calculate(a, oper, b) {
	switch (oper) {
		case "*":
			return +a * +b;
		case "/":
			return (+b === 0) ? NaN : +a / +b; // на ноль не делим
		case "+":
			return +a + +b;
		case "-":
			return +a - +b;
	}
}

/**
 * @description Разбвает строку на числа и символы операций или скобок (вспомогательная функция для методов evaluate класса Calculator).
 * Например, строка "((110 / 21) + 3) - 1" превратится в массив [ "(", "(", "110", "/", "21", ")", "+", "3", ")", "-", "1" ]
 *
 * @param {String} str Исходная строка, которую надо разбить.
 */
function smartSplit(str) {
	let expression = str.split(" "),
			result = [];

	for(let i = 0; i < expression.length; i++) {
		let part = expression[i].split("");
		if(part.includes("(")) {
			let brackets = part.filter(item => item === "("),
					number   = part.filter(item => !isNaN(item)).join("");

			result.push(...brackets, number);
		} else if(part.includes(")")) {
			let brackets = part.filter(item => item === ")"),
					number   = part.filter(item => !isNaN(item)).join("");

			result.push(number, ...brackets);
		} else result.push(part.join(""));
	}
	
	return result;

}

/**
 * @constructor
 * @description Создает объекты-калькуляторы с методом evaluate, который принмает математическое выражение в виде строки.
 */
const Calculator = function() {
	this.evaluate = function(str) {
		let temp = smartSplit(str),
				hasBrackets = temp.some(item => item === "("),
				hasMulDiv = temp.some(item => item === "*" || item === "/");

		// Обработка выражений в скобках:
		if(hasBrackets) {
			for(let i = 0; i < temp.length; i++) {
				let item = temp[i];
				if(isNaN(item)) {
					if(item === "(") {
						let close = i,
								counter = 0;

						while(close < temp.length) {
							if(temp[close] === "(") counter++;
							if(temp[close] === ")") counter--;
							if(counter === 0) break;
							close++;
						}

						let subExpression = temp.slice(i, close).map(item => {
									if(item === "+" || item === "-" || item === "*" || item === "/") return ` ${item} `;
									return item;
								}).join("").slice(1);

						temp[i] = this.evaluate(subExpression);
						temp.splice(i + 1, close - i);
						i = 0;
					}
				}

			}
		}

		// Обработка операций умножения или деления:
		if(hasMulDiv) {
			for(let i = 0; i < temp.length; i++) {
				let item = temp[i];
				if(isNaN(item)) {
					if(item !== "*" && item !== "/") continue;
					else if((item === "*" || item === "/") && (item.slice(i + 1).includes("*") || item.slice(i + 1).includes("/"))) continue;
					else {
						let before = i - 1,
								after  = i + 1,
								action = temp[i];

								temp[before] = calculate(+temp[before], action, +temp[after]);
								temp.splice(before + 1, after - before);
								i = 0;
					}
				}
			}
		}

		// Все остальные операции:
		for(let i = 0; i < temp.length; i++) {
			let item = temp[i];
			if(isNaN(item)) {
				let before = i - 1,
						after  = i + 1,
						action = temp[i];
				temp[before] = calculate(+temp[before], action, +temp[after]);
				temp.splice(before + 1, after - before);
				i = 0;
			}
		}

		return temp[0];

	}

};