"use strict";

// https://www.codewars.com/kata/513e08acc600c94f01000001/

/**
 * @description Принимает в качестве аргумента цвет в RGB формате (rrr, ggg, bbb) и возвращает в виде hex.
 * @param {Numbers} values Коды RGB через запятую, например: 255, 255, 255.
 */
function rgb(...values) {
	if(values.length !== 3) return;
	const codes = (values.every(code => !isNaN(code) && (code >= 0 && code <= 255))) ?
								values : values.map(code => (code < 0) ?
								0 : (code > 255) ? 255 : code ),
				result = codes.reduce((hex, code) => {
					let part = code.toString(16);
					return (part.length === 2) ? hex + part : hex + `0${part}`;
				}, "");

	return result.toUpperCase();
}