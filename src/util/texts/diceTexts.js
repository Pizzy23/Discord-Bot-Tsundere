class DiceTexts {
  diceOutput(dice, throwDice, resultDices, author) {
    if (dice.numDice !== 1) {
      return (
        `${author} Roll With Bonus: ` +
        "`" +
        "[" +
        throwDice +
        "]" +
        "`" +
        " Result: " +
        "`" +
        "[" +
        resultDices +
        "]" +
        "`"
      );
    }
    if (!dice.modifier == 0) {
      return (
        `${author} Roll: ` +
        "`" +
        "[" +
        dice.nobuff +
        "]" +
        "`" +
        " Result: " +
        "`" +
        "[" +
        throwDice +
        "]" +
        "`"
      );
    }

    return (
      `${author} Roll: ` +
      "`" +
      "[" +
      throwDice +
      "]" +
      "`" +
      " Result: " +
      "`" +
      "[" +
      throwDice +
      "]" +
      "`"
    );
  }
}
module.exports = { DiceTexts };
