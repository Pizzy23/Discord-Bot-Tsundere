const { EmbedPlayer } = require("../util/embed/embedPlayer");
const embed = new EmbedPlayer();
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();
module.exports = {
  name: "shuffle",
  description: "Shuffle Musics",
  aliases: ["shuffle"],
  category: "Music",
  execute: async (client, message, args) => {
    if (vali.vali(client, message) == true) {
      const queue = client.distube.getQueue(message);
      if (!queue) return embed.genericError(message);
      queue.shuffle();
      embed.randomMusic(message);
    } else {
      return embedClass.noPermission(message);
    }
  },
};
