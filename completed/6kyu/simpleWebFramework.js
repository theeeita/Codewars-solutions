"use strict";

// https://www.codewars.com/kata/588a00ad70720f2cd9000005

// ES 6
/**
 * @class
 * Класс, описывающий объект роутер.
 */
class Router {
	constructor() {
		this._bound = new Map();
	}


	/**
	 * @private Формирует ключ для привязки данных к роутеру или вызова обработчика по этим данным.
	 * @param {String} url URL-адрес.
	 * @param {String} method Метод передачи.
	 */
	_formatProp(url, method) {
		return`${url.trim()}${method.trim()}`;
	}

	/**
	 * @description Привзяывает к url и методу определенный обработчик.
	 * 
	 * @param {String} url URL-адрес.
	 * @param {String} method Метод передачи.
	 * @param {Function} handler Функция обработчик для этих url и method.
	 */
	bind(url, method, handler) {
		this._bound.set(this._formatProp(url, method), handler);
	}

	/**
	 * @description Выполняет запрос по привязанным url и method. Или сообщение об ошибке, если такие параметры
	 * не привязаны к данному роутеру.
	 * 
	 * @param {String} url URL-адрес.
	 * @param {String} method Метод передачи.
	 */
	runRequest(url, method) {
		const prop = this._formatProp(url, method);
		return this._bound.has(prop) ? this._bound.get(prop)() : "Error 404: Not Found";
	}
}


// ES 5
// function Router() {
//  this._bound = new Map();
  
//  this._formatProp = function(url, method) {
//    return`${url.trim()}${method.trim()}`;
//  }

//  this.bind = function(url, method, handler) {
//    this._bound.set(this._formatProp(url, method), handler);
//  }

//  this.runRequest = function(url, method) {
//    const prop = this._formatProp(url, method)
//    return this._bound.has(prop) ? this._bound.get(prop)() : "Error 404: Not Found";
//  }
// }