"use strict";

// https://www.codewars.com/kata/525caa5c1bf619d28c000335

/**
 * @description Проверяет статус игры в крестики нолики. Если победил игрок, который ставит крестики возвращает 1, если нолики - 2.
 * Если ничья -1, если еще не закончено - 0.
 * 
 * @param {Array} board Двумерный массив
 */
function isSolved(board) {
	// 0 === empty, 1 === "X", 2 === "O"
	let drawable = false;
			
	const lines = getLines(board);

	for(const line of lines) {
		if(line.includes(0)) drawable = true;
		if(checkLine(line, 1)) return 1;
		if(checkLine(line, 2)) return 2;
	}

	return (drawable) ? -1 : 0;

}

/**
 * @description Возвращает все строки и столбцы матрицы, а также две диагонали.
 * 
 * @param {Array} board Матрица размерности N x N (для игры в "крестики-нолики" используется 3х3)
 */
function getLines(board) {
	let rows = [],
			line = [];

	for(let i = 0; i < board.length; i++) {
		rows.push(board[i]);
		let start = 0,
				line = [];
		while(start < board.length) {
			line.push( board[start][i] );
			start++;
		}
		rows.push(line);
	}

	for(let i = 0; i < board.length; i++) {
		line.push(board[i][i]);
		if(i === board.length - 1) {
			let j = i,
					start = 0,
					line = [];
			while(j >= 0) {
				line.push(board[j][start]);
				j--;
				start++;
			}
			rows.push(line);
		}
	}

	line = [];

	for(let i = 0; i < board.length; i++) {
		for(let j = 0; j < board[i].length; j++) {
			if(i === j) line.push(board[i][j]);
		}
	}
	
	rows.push(line);

	return rows;
}

/**
 * @description Проверяет строку/столбец/диагональ из матрицы на выйгрышь в "крестики-нолики".
 * 
 * @param {Array} line Строка/столбец/диагональ.
 * @param {Number} value Символ крестика (1) или нолика (2).
 */
function checkLine(line, value) {
	const filledSame = line.every(item => item === value),
				resultSum  = line.reduce((acc, item) => acc + item, 0);

	return (resultSum === value * line.length) && filledSame;
}