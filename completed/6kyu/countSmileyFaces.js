"use strict";

// https://www.codewars.com/kata/583203e6eb35d7980400002a

/**
 * @description Возвращает количество элементов массива, которые являются смайликами допустимого шаблона.
 * Смайлк может быть с носом или без.
 * Допустимые носы: "-", "~".
 * Допустимые рты: ")", "D".
 * Допустимые глаза: ":", ";".
 * 
 * @param {Array} array Исходный массив.
 */
const countSmileys = array => {
	let counter = 0;
	const VALID_NOSE  = [ "-", "~" ],
				VALID_EYES  = [ ":", ";" ],
				VALID_MOUTH = [ ")", "D" ];

	for(let item of array) {
		if(item.length == 2) {
			let [ eyes, mouth ] = item.split("");
			if(VALID_EYES.includes(eyes) && VALID_MOUTH.includes(mouth)) counter++;
		} else {
			let [ eyes, nose, mouth ] = item.split("");
			if(VALID_EYES.includes(eyes) && VALID_NOSE.includes(nose) && VALID_MOUTH.includes(mouth)) counter++;
		}
	}

	return counter;
};