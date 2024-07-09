const Discord = require("discord.js");
const chalk = require("chalk");

class EmbedClass {
  list(message, output) {
    let string = "";
    output.forEach((item) => {
      string = string + `\n${item}`;
    });
    const embed = new Discord.EmbedBuilder()
      .setColor("800080")
      .setTitle("**NUMERO DE CABAÇOS ATUALMENTE**")
      .setDescription(string)
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  add(message, id, output) {
    let content = output.numeroCabaco;
    const embed = new Discord.EmbedBuilder()
      .setColor("800080")
      .setTitle(`**CABAÇO ADICIONADO COM EXITO**`)
      .setDescription(`${id}, ATUALMENTE ELE ESTA COM: ${content}`)
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  noCommand(message, output) {
    const embed = new Discord.EmbedBuilder()
      .setColor("800080")
      .setTitle(`Comando incorreto`)
      .setDescription(`${output}`)
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  achivementeKarma(message) {
    const randomNumber = Math.floor(Math.random() * 99990) + 10;
    const randomMultipleOf100 = Math.floor(randomNumber / 100) * 100;
    const input = message.content;
    let idForEmb = input.replace(/[a-z *]/g, "") || (/[A-Z *]/g, "");
    const embed = new Discord.EmbedBuilder()
      .setColor("0096FF")
      .setTitle(
        `**Uma conquista dificilmente alcançada por um idiota completo** \n\n Contabilizando Karma adicional será fornecido`
      )
      .setDescription(
        `${idForEmb} Você adiquiriu ${randomMultipleOf100} de karma`
      );
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  noPermission(message) {
    const embed = new Discord.EmbedBuilder()
      .setColor("800080")
      .setTitle(`SEM PERMISSAO`)
      .setDescription(
        `Você não tem permissao para utilizar esse comando. Afinal o mestre não autorizou você. ${message.author}`
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
module.exports = { EmbedClass };
