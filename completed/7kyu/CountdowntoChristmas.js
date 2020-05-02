"use strict";

// https://www.codewars.com/kata/56f6b23c9400f5387d000d48

/**
 * @description Считает, сколько дней осталось до Рождества (25 декабря).
 *
 * @param {Date} days Объект даты, от которой необходимо произвести рассчет.
 */
function daysUntilChristmas(days) {
	let year  = days.getFullYear(),
			given = days.getTime() / 1000,
			final = new Date(year, 11, 25, 0, 0, 0) / 1000,
			loopGiven = null;

	if(given > final) {
		loopGiven = new Date(year + 1, 11, 25, 0, 0, 0) / 1000;
		return Math.abs((final - loopGiven) / 86400) - Math.abs((final - given) / 86400);
	}

	return Math.abs((final - given) / 86400);
}