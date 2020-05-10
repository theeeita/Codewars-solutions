"use strict";

// https://www.codewars.com/kata/5739174624fc28e188000465

const Result = {
	"win": 1,
	"loss": 2,
	"tie": 3
};

/**
 * @class
 * Класс описывающий игрока в покер (Техасский Холдем - https://en.wikipedia.org/wiki/Texas_hold_%27em).
 * При создании эксземпляра необходимо указать строку с 5 картами.
 * Имеет метод сравнения с другим игроком (он также должен быть экземпляторм класса PokerHand).
 */
class PokerHand {
	/**
	 * @constructor
	 * 
	 * @param {String} hand строка вида "VS VS VS VS VS", где:
	 * V - значение карты: цифры от 2 до 9, "T" (10), "J" (Валет), "Q" (Дама), "K" (Король), "A" (Туз).
	 * S - масть "D" (бубны), "С" (трефы), "H" (червы), "S" (пики).
	 * 
	 * Пример: "6S AD 7H 4S AS"
	 */
	constructor(hand) {
		this.cards = hand.split(" ");
		this._comboType = {
			"highcard": 1,
			"pair": 2,
			"two-pairs": 3,
			"three-of-kind": 4,
			"straight": 5,
			"flush": 6,
			"full-house": 7,
			"four-of-kind": 8,
			"straight-flush": 9,
			"royal-flush": 10
		};
	
		this._data = {
			"values": [],
			"suits": []
		};
	
		this._replacer = {
			"T": 10,
			"J": 11,
			"Q": 12,
			"K": 13,
			"A": 14
		};
	}

	/**
	 * @private
	 * @method
	 * 
	 * Собирает данные о картах в объект, преобразуя значения карт в числовые значения (елси они не являются ими изначально).
	 * Массив со значениями сортирует по возрастанию.
	 * 
	 * Объект имеет вида: { "values": [ значения, по возрастанию ], "suits": [ "масти" ] }
	 */
	_combine() {
		for(const card of this.cards) {
			isNaN(card[0]) ? this._data["values"].push(this._replacer[card[0]]) : this._data["values"].push(+card[0]);
			this._data["suits"].push(card[1]);
		}

		this._data["values"].sort((a, b) => a - b);

		return this._data;
	}

	/**
	 * @private
	 * @method
	 * 
	 * Вычисляет комбинацию карт игрока. Возвращает объект с типом комбинации, максимальным значением или значениями,
	 * в зависимости от типа комбинации.
	 */
	_getHandCombination() {

		const { suits, values } = this._combine();
		let isFlash  = false,
				isStreet = true;

		if( suits.every(suit => suit === "S") ||
				suits.every(suit => suit === "H") ||
				suits.every(suit => suit === "D") ||
				suits.every(suit => suit === "C")
		) isFlash = true;

		for( let i = 0; i < values.length - 1; i++) {
				if(values[i + 1] - values[i] !== 1) {
					isStreet = false;
					break;
				}
			}

		if(isFlash && isStreet) {
			const type = (Math.max(...values) === 14) ? "royal-flush" : "straight-flush";
			return {
				type: this._comboType[type],
				max: Math.max(...values)
			}
		}

		if(isFlash && !isStreet) {
			return {
				type: this._comboType["flush"],
				max: Math.max(...values)
			}
		}

		if(!isFlash && isStreet) {
			return {
				type: this._comboType["straight"],
				max: Math.max(...values)
			}
		}
		
		if(
			( values.slice(0, 3).every(val => val === values[0]) && values.slice(3).every(val => val === values[3]) ) ||
			( values.slice(0, 2).every(val => val === values[0]) && values.slice(2).every(val => val === values[2]) )
		) {
			return {
				type: this._comboType["full-house"],
				max: {
					"trio": (values[0] === values[2]) ? values[0] : values[3],
					"pair": (values[0] === values[2]) ? values[4] : values[0]
				}
			}
		}

		if(
			( (values.slice(0, 3).every(val => val === values[0])) && (values[0] !== values[3]) ) ||
			( (values.slice(1, 4).every(val => val === values[1])) && (values[1] !== values[0]) && (values[1] !== values[4]) ) ||
			( (values.slice(2).every(val => val === values[2])) && (values[2] !== values[1]) )
		) {
			return {
				type: this._comboType["three-of-kind"],
				max: (values[0] === values[2]) ? values[0] : (values[2] === values[4]) ? values[2] : values[1]
			}
		}

		if(
			values.slice(0, 4).every(val => val === values[0]) ||
			values.slice(1).every(val => val === values[1])
		) {
			return {
				type: this._comboType["four-of-kind"],
				max: (values[0] === values[1]) ? values[0] : values[2],
				spare: (values[0] === values[1]) ? values[4] : values[0]
			}
		}

		if(
			( (values[0] === values[1]) && (values[3] === values[4]) ) ||
			( (values[0] === values[1]) && (values[2] === values[3]) ) ||
			( (values[1] === values[2]) && (values[3] === values[4]) )
		) {
			return {
				type: this._comboType["two-pairs"],
				spare: ((values[0] === values[1]) && (values[3] === values[4])) ? values[2] : ((values[0] === values[1]) && (values[2] === values[3])) ? values[4] : values[0],
				max: ((values[0] === values[1]) && (values[3] === values[4])) ? Math.max( ...(values.slice(0, 2).concat(...values.slice(3))) ) :
					(values[0] === values[1]) && (values[2] === values[3]) ? Math.max(...values.slice(0, 4)) : 
					Math.max(...values.slice(1))
			}
		}

		if(
			values[0] === values[1] ||
			values[1] === values[2] ||
			values[2] === values[3] ||
			values[3] === values[4]
		) {
			let repeated = null;
			outer: for(let i = 0; i < values.length; i++) {
				for(let j = i + 1; j < values.length; j++) {
					if(values[i] === values[j]) {
						repeated = values[i];
						break outer;
					}
				}
			}
			return {
				type: this._comboType["pair"],
				max: repeated
			}
		}

		return {
			type: this._comboType["highcard"],
			max: Math.max(...values)
		}

	}

	/**
	 * @public
	 * @method
	 * 
	 * Метод, сравнивающий комбинацию текущего игрока с другим игроком. Результат возвращается в виде числа:
	 * 1 - победа, 2 - поражение, 3 - ничья.
	 * 
	 * @param {PokerHand} opponent Противник.
	 */
	compareWith(opponent) {
		const self = this._getHandCombination(),
					opps = opponent._getHandCombination();
		
		if(self.type > opps.type) return Result.win;
		if(self.type < opps.type) return Result.loss;

		if(self.max > opps.max) return Result.win;
		if(self.max < opps.max) return Result.loss;

		if(self.type === 7) {

			if(self.max["trio"] > opps.max["trio"]) return Result.win;
			if(self.max["trio"] < opps.max["trio"]) return Result.loss;

			return (self.max["pair"] > opps.max["pair"]) ? Result.win : (self.max["pair"] < opps.max["pair"]) ? Result.loss : Result.tie;
		}

		if(self.type === 3 || self.type === 8) return(self.spare > opps.spare) ? Result.win : (self.spare < opps.spare) ? Result.loss : Result.tie;

		if(self.type === 1 || self.type === 2 || self.type === 4 || self.type === 6) {

			const selfValues = this._data["values"],
						oppsValues = opponent._data["values"];
			
			let index = selfValues.length;

			while(index >= 0) {
				if(selfValues[index] > oppsValues[index]) return Result.win;
				if(selfValues[index] < oppsValues[index]) return Result.loss;
				index--;
			}

			return Result.tie;

		}

		return Result.tie;
	}
}