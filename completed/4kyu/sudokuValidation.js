"use strict";

// https://www.codewars.com/kata/529bf0e9bdf7657179000008

/**
 * @description Проверяет, правильность заполненности таблицы Судоку. Каждая подтаблица 3х3 должна содержать в себе числа от 0 до 9.
 * 
 * @param {Array} grid Массив из 9 подмассивов из 9 элементов, которые являются целыми числами от 1 до 9 или 0 если клетка пустая.
 */
function validSolution(grid) {
	const VALID = "123456789";
	let start = 0;

	for(let i = 0; i < grid.length; i++) {
		let col = 0,
				counter = 0,
				temp = [];

		if(i === 3 || i === 6) start = 0;
		if(i >= 3 && i <= 6) col = 3;
		if(i >= 6) col = 6;

		while(counter < 3) {
			temp.push(...grid[col].slice(start, start + 3));
			col++;
			counter++;
		}

		if(temp.sort((a, b) => a - b).join("") !== VALID) return false;
		start += 3;
	}

	return true;
}