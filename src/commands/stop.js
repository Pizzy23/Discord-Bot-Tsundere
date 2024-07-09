const {
  EmbedBuilder,
  ApplicationCommandType,
  WebhookClient,
  PermissionsBitField,
} = require("discord.js"); // packages
const { EmbedPlayer } = require("../util/embed/embedPlayer");
const embed = new EmbedPlayer();
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();
module.exports = {
  name: "stop", // name of the command
  description: "Stop the music and the queue", // description of the command
  aliases: ["stop"], // aliases of the cmd
  usage: "stop", // usage of the cmd
  category: "Music", // cmd category
  inVoiceChannel: true,
  sameVoice: true,
  options: [], // options string
  execute: async (client, message, args) => {
    if (vali.vali(client, message) == true) {
      const { member, guildId } = message;
      const queue = await client.distube.getQueue(guildId);
      try {
        const queue = client.distube.getQueue(message);
        if (!queue) return embed.noQueueVoice(message);
        queue.stop();
        return embed.stopTheMusic(message);
      } catch (e) {
        console.log(e);
      }
    } else {
      return embedClass.noPermission(message);
    }
  },
};
