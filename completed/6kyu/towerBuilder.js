"use strict";

// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

/**
 * @description Возвращает массив в виде "башни" от 1 до n. Уровни на котором количество символов меньше, чем на максимальном
 * содержат пробелы с обеих сторон.
 * @param {Number} n Количество уровней.
 */
function towerBuilder(n) {
	let tower = [],
			start = 1,
			floors = n;

	tower.push("*");

	if(n > 1) {
		while(start <= floors - 1) {
			let temp = "*".repeat(tower[start  -1].length + 2);
			tower.push(temp);
			start++;
		}

		let maxLength = tower[tower.length - 1].length;

		for(let i = 0; i < tower.length; i++) while(tower[i].length < maxLength) tower[i] = " " + tower[i] + " ";
	}

	return tower;
}