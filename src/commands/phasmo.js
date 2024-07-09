const { Phasmo } = require("../services/phasmo");
const { EmbedClass } = require("../util/embed/embedBase");
const { ClearStringClass } = require("../util/clearString");
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();

const phasmo = new Phasmo();
module.exports = {
  name: "phasmo",
  aliases: ["ph", "g"],
  description: "GET THE GHOST",
  usage: "Ghost",
  options: [],

  async execute(client, message, args) {
    const embed = new EmbedClass();
    if (vali.valiPhasmo(client, message)) {
      return phasmo.calls(client, message);
    } else {
      return embed.noPermission(message);
    }
  },
};
