const { EmbedPlayer } = require("../util/embed/embedPlayer");
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const embed = new EmbedPlayer();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();

module.exports = {
  name: "queue",
  aliases: ["q"],
  description: "Queue Musics",
  category: "Music",
  execute: async (client, message) => {
    if (vali.vali(client, message) == true) {
      const queue = client.distube.getQueue(message);
      if (!queue) return message.channel.send(` There is nothing playing!`);
      const q = queue.songs
        .map(
          (song, i) =>
            `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${
              song.formattedDuration
            }\``
        )
        .join("\n");
      message.channel.send(`**Server Queue**\n${q}`);
    } else {
      return embedClass.noPermission(message);
    }
  },
};
