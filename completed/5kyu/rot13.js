"use strict";

// https://www.codewars.com/kata/530e15517bc88ac656000716

/**
 * @description Шифрует переданную строку методом rot13. Каждая буква меняется на ту букву, которая в алфавите стоит на 13 позиции от исходной.
 * @param {String} message Исходное сообщение.
 */
const rot13 = message => {
	let temp = message.toLowerCase().split(""),
			alphabet = "abcdefghijklmnopqrstuvwxyz",
			maxIndex = alphabet.length,
			result = "";

	for(let i = 0; i < temp.length; i++) {
		let letter = temp[i];
		if(alphabet.includes(letter)) {
			let letterIndex = alphabet.indexOf(letter),
					replacerIndex = letterIndex + 13;

			if(replacerIndex >= maxIndex) replacerIndex = 13 - (maxIndex - letterIndex);
			let replacer = (letter === message[i]) ? alphabet[replacerIndex] : alphabet[replacerIndex].toUpperCase();

			result += replacer;
			continue;
		}
		result += letter;
	}

	return result;
}