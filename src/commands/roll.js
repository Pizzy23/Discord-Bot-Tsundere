const { Dice } = require("../services/dice");
const dice = new Dice();
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();

module.exports = {
  name: "roll",
  aliases: ["r"],
  description: "Roll dice",
  usage: "roll",
  options: [],

  async execute(client, message, args) {
    if (vali.vali(client, message) == true) {
      let output = await dice.calls(message, args);
      if (output == undefined) {
        output = "Você fez algo errado idiota.";
        return message.reply(output);
      }
      return message.reply(output);
    } else {
      return embedClass.noPermission(message);
    }
  },
};
