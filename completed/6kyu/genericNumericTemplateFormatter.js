"use strict";

// https://www.codewars.com/kata/59901fb5917839fe41000029

/**
 * Форматирует строку с числом по указанному формату. Если число отстуствует берет шаблон: 1234567890,
 * Если строка с числом короче шаблона - строка повторяет сама себя, пока они не станут равны.
 * 
 * @param {String} template Строка-шаблон (например "xxx xxxxx xx")
 * @param {String} input Строка с числом
 */
function numericFormatter(template, input) {

	if(!input) input = "1234567890";
	while(input.length < template.length) input += input.slice(0, template.length - input.length);

	let	start = 0;

	return template.replace(/([a-z]+)/ig, function(match, part) {
		let stop = part.length;
		return input.slice(start, start += stop);
	});

}