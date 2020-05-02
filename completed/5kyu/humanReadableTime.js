"use strict";

// https://www.codewars.com/kata/52685f7382004e774f0001f7

/**
 * @description Возвращает секунды в виде строки "hh:mm:ss".
 * @param {Number} seconds Количество секунд.
 */
function humanReadable(seconds) {
	let hours = Math.floor( seconds / 60 / 60 );
	seconds -= (hours * 60 * 60);

	let mins = Math.floor( seconds / 60 );
	seconds -= (mins * 60);

	hours = (hours < 10) ? "0" + hours : hours;
	mins  = (mins < 10) ? "0"  + mins  : mins;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	return `${hours}:${mins}:${seconds}`;
}