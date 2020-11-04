"use strict";

// https://www.codewars.com/kata/556deca17c58da83c00002db

/**
 * Возвращает n-ную последовательность числе Tribonacci.
 * @param {Array} signature Начальная последовательность
 * @param {Number} n Длина последовательности
 */
function tribonacci(signature, n) {
  const result = [ ];
  if(n > 0) {
    
    if(n < 3) return signature.slice(0, n);
    
    result.push( ... signature );
    while(result.length < n) {
      result.push( getNext(result) );
    }
    
  }
  return result;
}

/**
 * Считает и возвращает следующее число в последовательности Tribonacci.
 * @param {Array} seq Последовательность чисел
 */
const getNext = seq => {
  const temp = seq.slice(seq.length - 3);
  return temp.reduce((sum, item) => sum += item, 0);
}