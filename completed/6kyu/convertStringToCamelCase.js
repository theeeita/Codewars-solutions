"use strict";

// https://www.codewars.com/kata/517abf86da9663f1d2000003

/**
 * Превращает строку, разделенную через "-" или "_" в camelCase-строку.
 * @param {String} str Исходная строка
 */
const toCamelCase = str => {
	return str.replace(/(?:[-_](\w{1}))/ig, (match, firstLetter) => firstLetter.toUpperCase());
 }