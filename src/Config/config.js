require("dotenv").config();

module.exports = {
  ACTIVE_SPOT: process.env.SPOT_MUSIC,
  ACTIVE_BOT: process.env.BOT_STATUS,

  TSUND_TOKEN: process.env.TOKEN,
  OWNER_ID: "229724269150470144",
  OWNER_TAG: "( ・・)つ#2311",
  OWNER_LINK: "https://discord.com/users/939867069070065714",
  DEV_GUILD: "1016098280133898293",
  TSUND_NAME: process.env.BOT_NAME,

  TSUND_TRACKS: parseBoolean(process.env.TSUND_TRACKS || false),
  SPOT_SECRET: process.env.SPOTIFY_SECRET,
  SPOT_CLIENT: process.env.SPOTIFY_CLIENT_ID,

  MAIN_COLOR: "#2F3136",
  ERR_COLOR: "#ED2828",
  TSUND_PREFIX: process.env.PREFIX,
  CHANNEL: "1027435338706210847",

  EMBEDS_COLOR: "#FFFFFF",
  DEFAULT_VOLUME: 50,
  MAX_VOLUME: 100,
  AUTO_LEAVE: true,
  AUTO_LEAVE_COOLDOWN: 5000,
  DISPLAY_VOICE_STATE: true,
  PORT: process.env.PORT,

  SERVER_PERMISSIONS: [
    process.env.RPG,
    process.env.SHARK,
    process.env.MY,
    process.env.ACEROLA,
    process.env.BELLU,
    process.env.AYY,
  ],
};

function parseBoolean(ask) {
  if (typeof ask === "string") {
    ask = ask.trim().toLowerCase();
  }
  switch (ask) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
