"use strict";

// https://www.codewars.com/kata/52f831fa9d332c6591000511

// work in progress

function parseMolecule(formula) {
	const result = {};

	for(let i = 0; i < formula.length; i++) {
		let currentChar = formula[i],
				nextChar = formula[i + 1];
		
		// Скобочные молекулы
		if(currentChar === "(" || currentChar === "{" || currentChar === "[") {
			let openIndex  = i,
					closeIndex = i + 1,
					bracketsCount = 1;

			while(closeIndex < formula.length) {

				if(
						(currentChar === "(" && formula[closeIndex] === "(") ||
						(currentChar === "[" && formula[closeIndex] === "[") ||
						(currentChar === "{" && formula[closeIndex] === "{")
					) bracketsCount++;
				
				if(
						(currentChar === "(" && formula[closeIndex] === ")") ||
						(currentChar === "[" && formula[closeIndex] === "]") ||
						(currentChar === "{" && formula[closeIndex] === "}")
					) bracketsCount--;

				if(bracketsCount === 0) break;
				closeIndex++;
			}

			let subFormula  = formula.slice(openIndex + 1, closeIndex),
					subMultiple = isNaN(formula[closeIndex + 1]) ? 1 : parseInt(formula.slice(closeIndex + 1)),
					addLength = String(subMultiple).length;

			i = closeIndex + addLength;
			let subResult = parseMolecule(subFormula);

			for(let [ elem, value ] of Object.entries(subResult)) {
				if(elem in result) result[elem] += value * subMultiple;
				else result[elem] = value * subMultiple;
			}
		}
		
		// Парсинг вне скобок:
		if(
				isNaN(currentChar) &&
				currentChar !== "(" &&
				currentChar !== "[" &&
				currentChar !== "{"
			) {
			if(nextChar === undefined || isUpperCase(nextChar) && isNaN(nextChar)) result[currentChar] = 1;
			else {
				let nextIndex = i + 1,
						mainElem  = currentChar;

				while(nextIndex < formula.length) {
					if(!isUpperCase(formula[nextIndex])) mainElem += formula[nextIndex];
					if(
						isUpperCase(formula[nextIndex]) ||
						!isNaN(formula[nextIndex]) ||
						currentChar !== "(" ||
						currentChar !== "[" ||
						currentChar !== "{"
					) break;
					nextIndex++;
				}
			
				let count = isNaN(formula[nextIndex]) ? 1 : parseInt(formula.slice(nextIndex)),
						addLength = String(count).length;
				i += addLength;
				result[mainElem] = count;
				i = nextIndex;
			}
		}
	}
	return result;
}

function isUpperCase(char) {
	return char === char.toUpperCase();
}