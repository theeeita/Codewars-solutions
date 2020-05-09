"use strict";

// https://www.codewars.com/kata/53c8b29750fe70e4a2000610

/**
 * @description Возвращает массив, распаковывая диапазон между двумя числами (может быть только один).
 * [ a,b,c..n ]. Шаг между числами определяется или b - a или равен 1, если в массиве лишь c...n
 * Если диапазон отсутствует возвращает массив "как есть".
 * Если входные данные пустые - вернет пустой массив.
 * 
 * @param {Object} options Объект со свойством generator, который содержит в себе выражение в виде строки.
 */
function ArrayComprehension(options) {
	if(!options.generator || options.generator.trim() === "") return [];

	const expression = options.generator.trim();
	if(!expression.includes("..")) return expression
																				.split(",")
																				.map(item => +item);

	const temp   = expression.split(",")
														.filter(item => item !== "")
														.map(item => item.trim()),
				start 	= parseInt(temp[temp.length - 1]),
				stop 		= parseInt(expression.slice( expression.lastIndexOf(".") + 1)),
				step 		= (temp.length > 1) ? start - +temp[0] : 1,
				output	= ((temp.length > 1) ? [ +temp[0], (start > stop && step > 0) ?
									null : start ] : (start > stop && step > 0) ?
									[] : [ start ])
									.filter(item => item !== null);

	if(output.length !== 0) {
		let index = output.length - 1;
		while( (step > 0) ? output[index] + step <= stop : output[index] + step >= stop ) {
			output.push( output[index] + step );
			index++;
		}
	}
	
	return output;
}