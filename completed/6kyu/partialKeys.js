"use strict";

// https://www.codewars.com/kata/5e602796017122002e5bc2ed

/**
 * Возвращает proxy-объект, который содержит в себе get-метод,
 * который сравнивает имя указанного свойства с любым уже имеющимся в obj (все "родные" свойства перечислены в алфавитном порядке).
 * Если какое-то из этих свойств начинается с указанного - возвращается его значение.
 * 
 * @param {Object} obj Исходный объект
 */
function partialKeys (obj) {
  return new Proxy(obj, {
    get: (target, prop) => {
			if(prop in target) return target[prop]; // Если такое свойство есть - вернуть его значение.
			
			const definedProps = Object.keys(target).sort(), 	// Получить определенные свойства в лафавитном порядке:
						pattern = new RegExp(`^${ prop }`, "i"); // Определить регулярку: "начинается со строки prop"
      for(const propName of definedProps) {
        if(pattern.test(propName)) return target[propName]; // Если какое-то из свойств совпадает с регуляркой - вернуть его значение
      } 
    }
  });
}