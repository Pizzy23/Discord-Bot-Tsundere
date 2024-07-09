const { EmbedPlayer } = require("../util/embed/embedPlayer");
const embed = new EmbedPlayer();
const { EmbedClass } = require("../util/embed/embedBase");
const embedClass = new EmbedClass();
const { ValidationServer } = require("../util/serverValidation");
const vali = new ValidationServer();
module.exports = {
  name: "play",
  aliases: ["p"],
  description: "Enter your song link or song name to play",
  usage: "play <URL/song name>",
  voiceChannel: true,
  options: [
    {
      name: "search",
      description: "The song link or song name",
      type: 3,
      required: true,
    },
  ],

  async execute(client, message, args) {
    if (vali.vali(client, message) == true) {
      const { member, guildId, options, guild } = message;
      const voiceChannel = member.voice.channel;
      const string = args.join("");
      try {
        if (!args[0]) {
          return embed.noSong(message);
        }
        if (
          string.includes("playlist") === true &&
          string.includes("spotify") === true
        ) {
          return embed.noPlaylist(message);
        } else if (
          (string.includes("playlist") === true &&
            string.includes("youtube") === true) ||
          (string.includes("playlist") === true &&
            string.includes("youtube") === true)
        ) {
          return embed.noPlaylist(message);
        } else if (
          string.includes("youtube") === true ||
          string.includes("youtu.be") === true
        ) {
          console.log("Player")
          await client.distube.play(message.member.voice.channel, string, {
            message,
            member: message.member,
          });
        } else if (string.includes("spotify") === true) {
          await client.distube.play(message.member.voice.channel, string, {
            message,
            member: message.member,
          });
        } else {
          return embed.notYoutubeLink(message);
        }
      } catch (err) {
        console.log(err);
        return embed.genericError(message);
      }
    } else {
      return embedClass.noPermission(message);
    }
  },
};
