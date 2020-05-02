"use strict";

// https://www.codewars.com/kata/52a382ee44408cea2500074c

/**
 * @description Возваращает определитель матрицы (n x n) методом разложения на миноры.
 * @param {Array} matrix Двухмерный массив (кол-во строк и столбцов должны быть равны).
 */
function determinant(matrix) {
	if(matrix.length === 1 && matrix[0].length === 1) return matrix[0][0];
	if(matrix.length === 2) return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
	else {
		let count = matrix.length,
				result = 0,
				firstLine = matrix[0];

		for(let step = 0; step < count; step++) {
			let temp = [];

			for(let i = 1; i < matrix.length; i++) {
				let line = [];
				for(let j = 0; j < matrix[i].length; j++) if(j !== step) line.push(matrix[i][j]);
				if(line !== 0) temp.push(line);
			}

			if(temp !== 0) {
				let minorStep = firstLine[step] * determinant(temp);
				if(step % 2 === 0) result += minorStep;
				else result -= minorStep;
			}
		}

		return result;
	}
}