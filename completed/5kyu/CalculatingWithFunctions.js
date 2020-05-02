"use strict";

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(action) {
	return (action) ? calculate(0, action) : 0;
}

function one(action) {
	return (action) ? calculate(1, action) : 1;
}

function two(action) {
	return (action) ? calculate(2, action) : 2;
}

function three(action) {
	return (action) ? calculate(3, action) : 3;
}

function four(action) {
	return (action) ? calculate(4, action) : 4;
}

function five(action) {
	return (action) ? calculate(5, action) : 5;
}

function six(action) {
	return (action) ? calculate(6, action) : 6;
}

function seven(action) {
	return (action) ? calculate(7, action) : 7;
}

function eight(action) {
	return (action) ? calculate(8, action) : 8;
}

function nine(action) {
	return (action) ? calculate(9, action) : 9;
}

function plus(step = 0) {
	function add() { return step };
	return add;
}

function minus(step = 0) {
	function decr() { return step };
	return decr;
}

function times(step = 0) {
	function mult() { return step };
	return mult;
}

function dividedBy(step = 1) {
	function div() { return (step === 0) ? NaN : step };
	return div;
}

function calculate(data, action) {
	switch(action.name) {
		case "decr":
			return data - action();
		case "add":
			return data + action();
		case "mult":
			return data * action();
		case "div":
			return Math.floor(data / action());
	}
}