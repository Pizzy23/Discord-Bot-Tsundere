const embed = require("../embeds/embeds");
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();
module.exports = {
  name: "server",
  aliases: [],
  showHelp: false,
  description: "Show currently active servers",
  usage: "server",
  options: [],

  execute(client, message) {
    if (vali.vali(client, message) == true) {
      let serverlist = "";
      serverlist = client.guilds.cache
        .map(
          (g) =>
            `Guild ID: ${g.id}\n Guild: ${g.name}\n Members: ${g.memberCount}`
        )
        .join("\n\n");

      return message.reply({
        embeds: [embed.Embed_server(serverlist)],
        allowedMentions: { repliedUser: false },
      });
    } else {
      return embedClass.noPermission(message);
    }
  },
};
