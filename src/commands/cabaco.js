const { CabacoClass } = require("../services/cabaco");
const { EmbedClass } = require("../util/embed/embedBase");
const { ClearStringClass } = require("../util/clearString");
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();
const cabaco = new CabacoClass();

module.exports = {
  name: "cabaco",
  aliases: ["c"],
  description: "Cabaço count",
  usage: "cabacice",
  options: [],

  async execute(client, message, args) {
    const embed = new EmbedClass();
    if (vali.valiCabaco(client, message) == true) {
      const clearString = new ClearStringClass();
      const id = message.author.id;
      const user = message.author.username;
      const input = message.content;
      let validation = clearString.cabacoClear(input);

      if (validation == "list") {
        let output = await cabaco.getCabaco(input, id, user, validation);
        return embed.list(message, output);
      }
      if (validation == "dd") {
        let idForEmb = input.replace(/[a-z *]/g, "") || (/[A-Z *]/g, "");
        let id = input.replace(/[a-z *@<>]/g, "") || (/[A-Z *@<>]/g, "");
        id = id.replace(/\s/g, "");
        let output = await cabaco.getCabaco(
          input,
          id,
          user,
          validation,
          message
        );
        return embed.add(message, idForEmb, output);
      } else {
        let output = await cabaco.getCabaco(
          input,
          id,
          user,
          validation,
          message
        );
        return embed.noCommand(message, output);
      }
    } else {
      return embed.noPermission(message);
    }
  },
};
