"use strict";

// https://www.codewars.com/kata/520446778469526ec0000001

/**
 * @description Проверят совпадают ли вложенные структуры массивов.
 * @method
 * @param {Array} other Массив, с которым надо сравнить исходный.
 */
Array.prototype.sameStructureAs = function (other) {
  if(!Array.isArray(other) || this.length !== other.length) return false;

  for(let i = 0; i < this.length; i++) {
    if(Array.isArray(this[i]) && !Array.isArray(other[i])) return false;
    if(Array.isArray(this[i]) && Array.isArray(other[i])) return this[i].sameStructureAs(other[i]);
  }
  
  return true;
};