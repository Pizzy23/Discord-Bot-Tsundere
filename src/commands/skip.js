const { EmbedPlayer } = require("../util/embed/embedPlayer");
const embed = new EmbedPlayer();
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();
module.exports = {
  name: "skip",
  description: "Skip to the next song",
  aliases: ["next"],
  category: "Music",
  execute: async (client, message, args) => {
    if (vali.vali(client, message) == true) {
      const queue = client.distube.getQueue(message);
      if (!queue) return embed.noSong(message);
      try {
        if (queue.songs.length > 1) {
          const song = await queue.skip(message);
          return embed.skipMusic(message, song);
        }
        queue.stop();
        return embed.lastSkipMusic(message);
        return;
      } catch (e) {
        return embed.genericError(message);
      }
    } else {
      return embedClass.noPermission(message);
    }
  },
};
