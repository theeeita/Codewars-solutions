"use strict";

// https://www.codewars.com/kata/515bb423de843ea99400000a

/**
 * @class
 * Вспомогательный класс для работы с постраничной навигацией. Номера страни начинаются с 0.
 */
class PaginationHelper {

	/**
	 * @param {Array} collection Массив элементов для страниц
 	 * @param {Number} itemsPerPage Максимальное количество элементов на одной странице
	 */
  constructor(collection, itemsPerPage) {
    this._items = [ ...collection ];
    this.itemsPerPage = itemsPerPage;

    this._pages = null;
  }

	/**
	 * @private
	 * Метод, связаывающий страницы и элементы в виде index: items. Начинается с 0.
	 */
  _mapping() {
    const pages = [];

    let tempItems = [ ...this._items ],
        start = 0;

    while(pages.length < this.pageCount()) {
      pages.push( tempItems.slice(start, start += this.itemsPerPage) );
    }

    return pages;
  }

	/**
	 * @public
	 * Возвращает общее количество элементов в экземпляре класса.
	 */
  itemCount() {
    return this._items.length;
  }

	/**
	 * @public
	 * Возвращает общее количество страниц в экземпляре класса.
	 */
  pageCount() {
    return Math.ceil( this._items.length / this.itemsPerPage );
  }

	/**
	 * @public
	 * Возвращает количество элементов на странице, индекс которой передан в качестве параметра или -1, если данные не верны.
	 * @param {Number} index Индекс страницы
	 */
  pageItemCount(index) {
    if(this._pages === null) this._pages = this._mapping();
    return ( index >= this.pageCount() || index < 0 ) ? -1 : this._pages[index].length;
  }

	/**
	 * @public
	 * Возвращает индекс страницы на которой находится элемент, индекс которого переда в качестве параметра или -1 если данные не верны.
	 * @param {Number} index Индекс элемента
	 */
  pageIndex(index) {
    if( index > this._items.length - 1 || index < 0 ) return -1;
    
    if( this._pages === null ) this._pages = this._mapping();
    
    const target = this._items[index];
    for(const [ pos, items ] of Object.entries(this._pages)) {
      if(items.includes(target)) {
        return pos;
      }
    }
  }
  
}