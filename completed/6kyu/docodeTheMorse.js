"use strict";

// https://www.codewars.com/kata/54b724efac3d5402db00065e

/**
 * @description Возвращает строку, переданную в виде азбуки Морзе в виде строки на латинском языке в верхнем регистре.
 * 
 * @param {String} morseCode Строка в виде кода азбуки Морзе.
 */
function decodeMorse(morseCode){
	const words = morseCode.trim().split("   ");
	let phrase = [];
 
	for(const word of words) {
		let letters = word.split(" "),
				temp = "";
		for(const char of letters) {
		 temp += MORSE_CODE[char]; // MORSE_CODE[] на codewars
		}
 
		phrase.push(temp);
	}
 
	 return phrase.join(" ").toUpperCase().trim();
 }