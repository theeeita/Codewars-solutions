"use strict";

// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

/**
 * Удаляет из url все, что идет после символа "#" (якорь).
 * @param {String} url Адрес
 */
const removeUrlAnchor = url => url.replace(/#.+/i, "");