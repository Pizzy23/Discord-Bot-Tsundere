const { Sequencer } = require("../services/sequencer");
const sequencer = new Sequencer();
const Discord = require("discord.js");
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();

module.exports = {
  name: "sequence",
  aliases: ["s"],
  description: "Sequencial Dices",
  usage: "sequence",
  options: [],

  async execute(client, message, args) {
    if (vali.vali(client, message) == true) {
      let output = await sequencer.instance(message, args);
      if (output == undefined) {
        output = "Você fez algo errado idiota.";
        return message.channel.send(output);
      }
      if (typeof output === "string") {
        return message.reply(output);
      } else {
        let string = "";
        output.forEach((item, index) => {
          string = string + `\n${item}`;
        });
        const embed = new Discord.EmbedBuilder()
          .setColor("800080")
          .setTitle("Roll")
          .setDescription(string)
          .setTimestamp();
        return message
          .reply({
            embeds: [embed],
            allowedMentions: { repliedUser: false },
          })
          .catch(console.error);
      }
    } else {
      return embedClass.noPermission(message);
    }
  },
};
