"use strict";

// https://www.codewars.com/kata/529b54d9aba78c924d00088e

/**
 * @description Заменяет в строке str все совпадения с ключами obj в формате {key} на его значения по этим ключам.
 * 
 * @param {String} str Исходная строка.
 * @param {Object} obj Объект вида { {target}: replace }
 */
function format(str, obj) {

	if(Array.isArray(obj)) {
		for(const prop of Object.keys(obj)) {
			const target = `{${prop}}`,
						replacer = obj[prop];
	
			while(str.includes(target)) {
				str = str.replace(target, replacer);
			}
	
		}
	} else {
		const first  = [],
					spare  = [],
					values = Array.from(Object.values(obj));

		for(const prop of Object.keys(obj)) {
			const target = `{${prop}}`;
			(!values.some(val => val.includes(target))) ? spare.push(target) : first.push(target);
		}
	
		for(const target of first) {
			while(str.includes(target)) str = str.replace(target, obj[ target.slice(1, target.length - 1) ]);
		}
	
		for(const target of spare) {
			while(str.includes(target)) str = str.replace(target, obj[ target.slice(1, target.length - 1) ]);
		}
	}

	return str;
}