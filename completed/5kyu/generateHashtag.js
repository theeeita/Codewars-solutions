"use strict";

// https://www.codewars.com/kata/52449b062fb80683ec000024

/**
 * @description Генерирует hashtag в виде #CamelCase, не превышающий 140 символов.
 * @param {String} string Входная строка (не должна быть пустой или только из пробелов).
 */
const generateHashtag = string => {
	if(string.length === "") return false;

	let words = string.split(" ").filter(item => item !== ""),
			result = "#";

	if(words.length) {
		for(let item of words) {
			item = item[0].toUpperCase() + item.slice(1);
			result += item;
		}
		return (result.length > 140) ? false : result;
	}

	return false;
	
};