"use strict";

// https://www.codewars.com/kata/53c8bcb1689f84238c000661

/**
 * @description Возвращает массив, рвспаковывая диапазон между двумя числами (может быть только один) с вычисленным шагом или равным 1.
 * [ a,b,c..n ]. Шаг между числами определяется или b - a или равен 1, если в массиве лишь c...n
 * Если диапазон отсутствует возвращает массив "как есть".
 * Если входные данные пустые - вернет пустой массив.
 * 
 * Если установить фильты, то оставит в возвращаемом массиве, лишь те элементы, которые проходят их.
 * Если установить функцию-трансформатор, то преобразует каждое значение возвращаемого массива этой функцией.
 * 
 * @param {Object} options Объект вида { generator: "Выражение", filters: [ функции-фильтры ], transform: функция-трансформатор }
 */
function ArrayComprehension(options) {
	const range = extractRange(options),
				{
					filters		= false,
					transform = false,
				} = options;

	if(!filters && !transform) return range;

	if(filters && !transform) {
		const filtered = [];

		for(const num of range) if(filters.every(handler => handler(num))) filtered.push(num);

		return filtered;
	}

	if(!filters && transform) {
		const transformed = [];

		for(const num of range) transformed.push( transform(num) );

		return transformed;
	}

	const full = [];

	for(const num of range) if(filters.every(handler => handler(num))) full.push( transform(num));

	return full;

}

// Функция из предыдущей задачи "Haskell List" (Haskell List Dot Notation)
// Ссылка на страницу Codewars: https://www.codewars.com/kata/53c8b29750fe70e4a2000610
// Ссылка на файл с решением: https://github.com/theeeita/Codewars-solutions/blob/master/completed/5kyu/HaskellListDotNotation.js

function extractRange(options) {
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