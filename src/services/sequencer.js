const { Dice } = require("../services/dice");

class Sequencer extends Dice {
  constructor() {
    super();
    this.maxDices = 30;
    this.array = [];
    this.obj = {};
  }

  async instance(message, args) {
    try {
      this.array = [];
      this.id = message.author.id;
      this._setSeparator(message.content);
      const validation = this.validation(this.slice);
      if (validation === true) {
        this.obj = this.makeObj(this.slice);
        if (this.obj.numDice > this.maxDices) {
          return "Você achas que tenho 30 dados para jogar aqui? Me compra antes de reclamar.";
        }
        return this.processDiceThrows();
      } else {
        return validation;
      }
    } catch (e) {
      return this.setError(e.message);
    }
  }

  processDiceThrows() {
    for (let i = 0; i < this.obj.numDice; i++) {
      const roll = this.throwDice();
      const result = this.obj.modifier
        ? this.applyModifier(roll, this.obj.modifier, this.obj.numModifier)
        : roll;
      const line =
        "Roll: " +
        "`" +
        `[${roll}]` +
        "`" +
        " Result: " +
        "`" +
        `[${result}]` +
        "`";
      this.array.push(line);
    }
    return this.array;
  }

  throwDice() {
    let baseRoll = Math.floor(Math.random() * this.obj.numSides) + 1;
    return baseRoll;
  }

  applyModifier(roll, modifier, numModifier) {
    return modifier === "+" ? roll + numModifier : roll - numModifier;
  }

  _setSeparator(input) {
    this.slice = this.sliceInput(input);
  }

  sliceInput(input) {
    const trimmedInput = input.trim().replace(/^([&*])s\s*/, "");
    const match = trimmedInput.match(/^(\d*)d(\d+)([+-]\d+)?$/i);
    return match
      ? {
          numDice: parseInt(match[1]) || 1,
          numSides: parseInt(match[2]),
          modifier: match[3] || "",
        }
      : null;
  }

  setError(error) {
    console.error(error);
    return error;
  }

  validation(dice) {
    if (!dice) return "Invalid input format.";
    if (dice.numSides < 1) return "Dice sides must be at least 1.";
    if (dice.numDice > this.maxDices)
      return `Cannot throw more than ${this.maxDices} dice.`;
    return true;
  }

  makeObj(dicer) {
    const modifierMatch = dicer.modifier.match(/^([+-])(\d+)$/);
    return {
      numDice: parseInt(dicer.numDice) || 1,
      numSides: parseInt(dicer.numSides),
      modifier: modifierMatch ? modifierMatch[1] : "+",
      numModifier: modifierMatch ? parseInt(modifierMatch[2]) : 0,
      diceTotal: 0,
      nobuff: 0,
    };
  }
}

module.exports = { Sequencer };
