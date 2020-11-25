"use strict";

// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

/**
 * Проверяет, является ли строка валидным ISBN-10 идентификатором.
 * Первые 9 цифр: цифры от 0 до 9, а 10 цифра - "X" (означает римскую 10) или также цифра от 0 до 9.
 * Если сложить произведения цифр и их позиций (начинаются с 1), полученная сумма, делённая по модулю на 11 должна быть равна 0.
 * 
 * @param {String} isbn Исходная строка
 */
function validISBN10(isbn) {
    if(/^\d{9}[\dx]$/i.test(isbn)) {
      const numbers = isbn.split("").map(value => {
        return isNaN(value) ? 10 : +value;
      });
      
      return numbers.reduce((sum, value, pos) => sum += (value * (pos + 1)), 0) % 11 === 0;
    }
  
  return false;
}