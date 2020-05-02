"use strict";

// https://www.codewars.com/kata/5412509bd436bd33920011bc

/**
 * @description Маскриует символы в строке, кроме последних 4-х символов.
 * Если строка состоит из 4 символов или меньше возвращает строку как есть.
 * Заменяет символы на "#".
 * 
 * @param {String} string Исходная строка.
 */
function maskify(string) {
	return (string.length > 4) ? string.slice(0, string.length - 4).replace(/./g, "#") + string.slice(string.length - 4) : string;
}