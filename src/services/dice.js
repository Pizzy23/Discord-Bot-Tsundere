const { DiceTexts } = require("../util/texts/diceTexts");

class Dice {

  _separator(input) {
    const pieces = this.sliceInput(input);
    if (!pieces) {
      console.error("Invalid input format.");
      throw new Error("Você está errando, tô chateada com você.");
    }
    return this.validation(pieces) ? this._objCreate(pieces) : null;
  }

  sliceInput(input) {
    const cleanedInput = input
      .replace(/[*&roll|seque]/g, "")
      .replace(/\s/g, "");
    return cleanedInput.match(/^([1-9]\d*)?d([1-9]\d*)([+-]\d+)?$/i);
  }

  _throwDice(dice, id) {
    let results = [];
    for (let i = 0; i < dice.numDice; i++) {
      const roll = this.calculateRoll(dice, id);
      dice.nobuff = roll;
      results.push(dice.modifier ? this.applyModifier(roll, dice) : roll);
    }
    return results;
  }

  calculateRoll(dice, id) {
    return Math.floor(Math.random() * dice.numSides) + 1;
  }

  applyModifier(roll, dice) {
    const modifierValue = parseInt(dice.modifier.substr(1));
    return dice.modifier.startsWith("+")
      ? roll + modifierValue
      : roll - modifierValue;
  }

  _objCreate(pieces) {
    return {
      numDice: parseInt(pieces[1]) || 1,
      numSides: parseInt(pieces[2]),
      modifier: pieces[3] || 0,
      diceTotal: 0,
      numModifier: parseInt(pieces[3]) || 0,
      nobuff: 0,
    };
  }

  validation(pieces) {
    if (parseInt(pieces[2]) < 1) {
      throw new Error("Quer que eu role um dado sem lados?");
    }
    if (parseInt(pieces[1]) > 100) {
      throw new Error("Não posso jogar mais de 100 dados.");
    }
    if (parseInt(pieces[2]) > 99999) {
      throw new Error("Não existe dado com mais de 99999 lados.");
    }
    return true;
  }

  async calls(message, args) {
    const text = new DiceTexts();
    try {
      const dice = this._separator(message.content);
      const throws = this._throwDice(dice, message.author.id);
      const total = throws.reduce((acc, curr) => acc + curr, 0);
      return text.diceOutput(dice, throws, total, message.author);
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = { Dice };
