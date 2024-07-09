const Discord = require("discord.js");

class EmbedPlayer {
  constructor() {
    this.embed = new Discord.EmbedBuilder();
  }
  noInChatVoice(message) {
    const embed = this.embed
      .setColor("FF0000")
      .setTitle("QUER QUE EU ENTRE ONDE??")
      .setDescription("❌ NEM ESTA EM SALA PRA TOCAR ESSE SEU RUIDO HORRIVEL.")
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  noQueueVoice(message) {
    const embed = this.embed
      .setColor("FF0000")
      .setTitle("Não colocou musica.")
      .setDescription("❌ Como você quer dar loop em uma musica inexistente!?.")
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  notYoutubeLink(message) {
    const embed = this.embed
      .setColor("#FF0000")
      .setTitle(
        "❌ Tenta colocar algo do youtube sabe. Não fique colocando links dos seus hentais."
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  genericError(message) {
    const embed = this.embed
      .setColor("#FF0000")
      .setTitle(
        " ❌  Alguma coisa aconteceu, certeza que foi culpa do mestre.."
      );
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }

  noSong(message) {
    const embed = this.embed
      .setColor("#FF0000")
      .setTitle("❌ Daria pra você colocar sua musica terrivel?! ")
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  notSongForLoop(message) {
    const embed = this.embed
      .setColor("#FF0000")
      .setTitle("❌ Como você quer dar loop em uma musica inexistente!?")
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  ifNotRecevingLoopCommand(message) {
    const embed = this.embed
      .setColor("#FF0000")
      .setTitle("❌ Tente usar algum commando valido para isso aqui!")
      .setDescription(
        "Off - Para desativar \n One - Apenas uma musica \n All - Todas as musicas"
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  loopSucceeded(message, mode) {
    if (mode == "Repeat queue") mode = "Repetindo a playlist";
    if (mode == "Repeat song") mode = "Repetindo somente uma musica";
    const embed = this.embed
      .setColor("#008000")
      .setTitle(`✅ Parabens voce conseguiu acionar ${mode}`)
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  fishingPlalist(message) {
    const embed = this.embed
      .setColor("#89CFF0")
      .setTitle(
        `Aqui eu tirei suas musicas, não como se não gostasse de tocar elas.`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  stopTheMusic(message) {
    const embed = this.embed
      .setColor("#89CFF0")
      .setTitle(
        `Aqui eu tirei suas musicas, não como se não gostasse de tocar elas.`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  songPlaying(message, song) {
    const embed = this.embed
      .setColor("#89CFF0")
      .setTitle("Musica ativa!")
      .setDescription(
        `Esta tocando: ${song.name}  -  ${song.formattedDuration}  -  \nEnviado por: ${song.user}`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  skipMusic(message, song) {
    const embed = this.embed
      .setColor("#89CFF0")
      .setTitle("Musica Pulada!")
      .setDescription(
        `Musica pulada   -   Musica Atual: ${song.name}\nPor: ${message.member}`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  lastSkipMusic(message) {
    const embed = this.embed
      .setColor("#89CFF0")
      .setTitle("Musica Final!")
      .setDescription(
        `Musica pulada, então acabou por não ter mais musicas suas.`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  randomMusic(message) {
    const embed = this.embed
      .setColor("#89CFF0")
      .setTitle("Aleatorias!")
      .setDescription(
        `Suas musicas estão todas embaralhadas agora se vira.`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  noPlaylist(message) {
    const embed = this.embed
      .setColor("#FF0000")
      .setTitle("Erro!")
      .setDescription(
        `Por enquanto o mestre não descobriu a magia, para fazer esse tipo de link funcionar... Apenas tente colocar todas ai.`
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
}
module.exports = { EmbedPlayer };
