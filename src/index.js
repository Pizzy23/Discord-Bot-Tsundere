"use strict";

const keepAlive = require("./server");
keepAlive;

const fs = require("fs");

const chalk = require("chalk");
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const express = require("express");
require("console-stamp")(console, { format: ":date(yyyy/mm/dd HH:MM:ss)" });

const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { EmbedPlayer } = require("./util/embed/embedPlayer");
const { EmbedClass } = require("./util/embed/embedBase");

let client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [Partials.Channel],
  disableMentions: "everyone",
});

client.important = require("./Config/config");
client.embed = require("./Config/embed.json");

const { DisTube } = require("distube");

client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  leaveOnEmpty: false,
  leaveOnFinish: true,
  leaveOnStop: true,
  nsfw: true,
  //   searchSongs: 5,
  plugins: [
    new SpotifyPlugin(),
    Spoti(client),
    new SoundCloudPlugin(),
    new YtDlpPlugin(),
  ],
});
client.distube.setMaxListeners(15);
client.config = {
  name: client.important.TSUND_NAME,
  master: client.important.OWNER_ID,
  prefix: client.important.TSUND_PREFIX,
  playing: `${client.important.TSUND_PREFIX} || help para pedir minha ajuda`,
  defaultVolume: 50,
  maxVolume: 100,
  autoLeave: true,
  autoLeaveCooldown: 5000,
  displayVoiceState: true,
  port: client.important.PORT,
  serverPermissions: client.important.SERVER_PERMISSIONS,
};

client.commands = new Collection();

const color = {
  white: "\x1B[0m",
  grey: "\x1B[2m",
  green: "\x1B[32m",
};

const setEnvironment = () => {
  return new Promise((resolve, reject) => {
    client.config.name =
      typeof client.important.BOT_NAME === "undefined"
        ? client.config.name
        : client.important.BOT_NAME;

    client.config.prefix =
      typeof client.important.PREFIX === "undefined"
        ? client.config.prefix
        : client.important.PREFIX;

    client.config.playing =
      typeof client.important.PLAYING === "undefined"
        ? client.config.playing
        : client.important.PLAYING;

    client.config.defaultVolume =
      typeof client.important.DEFAULT_VOLUME === "undefined"
        ? client.config.defaultVolume
        : Number(client.important.DEFAULT_VOLUME);

    client.config.maxVolume =
      typeof client.important.MAX_VOLUME === "undefined"
        ? client.config.maxVolume
        : Number(client.important.MAX_VOLUME);

    client.config.autoLeave =
      typeof client.important.AUTO_LEAVE === "undefined"
        ? client.config.autoLeave
        : String(client.important.AUTO_LEAVE) === "true"
        ? true
        : false;

    client.config.autoLeaveCooldown =
      typeof client.important.AUTO_LEAVE_COOLDOWN === "undefined"
        ? client.config.autoLeaveCooldown
        : Number(client.important.AUTO_LEAVE_COOLDOWN);

    client.config.displayVoiceState =
      typeof client.important.DISPLAY_VOICE_STATE === "undefined"
        ? client.config.displayVoiceState
        : String(client.important.DISPLAY_VOICE_STATE) === "true"
        ? true
        : false;

    client.config.port =
      typeof client.important.PORT === "undefined"
        ? client.config.port
        : Number(client.important.PORT);

    //console.log('setEnvironment: ', client.config);
    resolve();
  });
};

const loadEvents = () => {
  console.log(`-> loading Events ......`);
  return new Promise((resolve, reject) => {
    const files = fs
      .readdirSync(`${__dirname}/events/`)
      .filter((file) => file.endsWith(".js"));

    console.log(`+--------------------------------+`);
    for (const file of files) {
      try {
        const event = require(`${__dirname}/events/${file}`);
        console.log(`| Loaded event ${file.split(".")[0].padEnd(17, " ")} |`);

        client.on(file.split(".")[0], event.bind(null, client));
        delete require.cache[require.resolve(`${__dirname}/events/${file}`)];
      } catch (error) {
        reject(error);
      }
    }
    console.log(`+--------------------------------+`);
    console.log(`${color.grey}-- loading Events finished --${color.white}`);

    resolve();
  });
};

const loadCommands = () => {
  console.log(`-> loading Commands ......`);
  return new Promise((resolve, reject) => {
    const files = fs
      .readdirSync(`${__dirname}/commands/`)
      .filter((file) => file.endsWith(".js"));

    console.log(`+---------------------------+`);
    for (const file of files) {
      try {
        const command = require(`${__dirname}/commands/${file}`);

        console.log(
          `| Loaded Command ${command.name.toLowerCase().padEnd(10, " ")} |`
        );

        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`${__dirname}/commands/${file}`)];
      } catch (error) {
        reject(error);
      }
    }
    console.log(`+---------------------------+`);
    console.log(`${color.grey}-- loading Commands finished --${color.white}`);

    resolve();
  });
};

Promise.resolve()
  .then(() => setEnvironment())
  .then(() => loadEvents())
  .then(() => loadCommands())
  .then(() => {
    console.log(`${color.green}*** All loaded successfully ***${color.white}`);
    client.login(client.important.TSUND_TOKEN);
  });

const settings = (queue, song) =>
  `**Volume**: \`${queue.node.volume}%\` | **Loop**: \`${
    queue.repeatMode ? (queue.repeatMode === 2 ? "All" : "ONE") : "Off"
  }\``;

const status = (queue) => `Volume: ${queue.volume}%\n`;
client.distube
  .on("playSong", (queue, song) =>
    queue.textChannel.send(
      `✅ | Esta tocando essa musica: \`${song.name}\` - \`${
        song.formattedDuration
      }\`\ Chamada por: ${song.user}\n${status(queue)}`
    )
  )
  .on("addSong", (queue, song) =>
    queue.textChannel.send(
      `✅ | Adicionado { ${song.name} } - \`${song.formattedDuration}\` - Foi adicionado por { ${song.user} }`
    )
  )
  .on("addList", (queue, playlist) =>
    queue.textChannel.send(
      `✅ | Adicionado { \`${playlist.name}\` playlist (${
        playlist.songs.length
      } songs) Na fila \n${status(queue)}`
    )
  )
  .on("error", (channel, e) => {
    console.error(e);
    if (channel)
      channel.send(
        `❌ || Alguma coisa aconteceu, certeza que foi culpa do mestre.. ${e
          .toString()
          .slice(0, 1974)}`
      );
    else console.error(e);
  })
  .on("empty", (message) => {
    const textChannel = queue.textChannel;
    textChannel.send("Estou cansada de você, apenas vou sair.");
  })
  .on("searchNoResult", (message, query) =>
    message.channel.send(
      `❌ | Não achei oque você chama de musica \`${query}\`!`
    )
  )
  .on("finish", (queue) => {
    queue.textChannel.send(
      "Aqui eu tirei suas musicas, não como se não gostasse de tocar elas."
    );
  });

function Spoti(client) {
  if (client.important.ACTIVE_SPOT == "ON") {
    console.log(
      chalk.green("[") +
        chalk.yellow.bold("TSUND_TRACKS") +
        chalk.green("]") +
        chalk.yellow(" You enabled the Spotify more tracks!")
    );
    return TSUNDSpotiisOn(client);
  } else {
    console.log(
      chalk.green("[") +
        chalk.yellow.bold("TSUND_TRACKS") +
        chalk.green("]") +
        chalk.red(" You disabled the Spotify more tracks!")
    );
    return TSUNDSpotiisOff();
  }
}

function TSUNDSpotiisOff() {
  return new SpotifyPlugin({
    emitEventsAfterFetching: true,
  });
}
function TSUNDSpotiisOn(client) {
  return new SpotifyPlugin({
    parallel: true,
    emitEventsAfterFetching: true,
    api: {
      clientId: client.important.SPOTIFY_CLIENT_ID,
      clientSecret: client.important.SPOTIFY_SECRET,
    },
  });
}
