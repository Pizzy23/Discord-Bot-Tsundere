const Discord = require("discord.js");
const chalk = require("chalk");

class EmbedGhosts {
  ghostIsValid(message, output) {
    const embed = new Discord.EmbedBuilder()
      .setColor("#89CFF0")
      .setTitle(`${output.name}`)
      .setDescription(
        ` Nome: ${output.name}\n
          Força:  ${output.strength}\n
          Fraqueza: ${output.weakness}\n
          Evidencias: ${output.evidence[0]}, ${output.evidence[1]}, ${
          output.evidence[2]
        }\n
          Evidencia Adicional: ${output.noEvidence}\n
          Caçada:  ${output.hunt}\n
          Unico:  ${output.unique}\n
          Fato:  ${output.fact}\n
          Video:  ${output.video}
          Video: ${output.video2 || "N/A"} 
          `
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  evidencesCorrectInput(message) {
    const embed = new Discord.EmbedBuilder()
      .setColor("800080")
      .setTitle(`Comando incorreto`)
      .setDescription(
        `Jeitos certos para cada evidencia:\n
      EMF 5 > emf
      Orb > orb
      Escrita Fantasma > escrita
      Dots > dots
      Spirit Box > box
      Temperatura Baixa > temperatura
      Impressão Digital > impressao
      `
      )
      .setTimestamp();
    return message.channel
      .send({
        embeds: [embed],
        allowedMentions: { repliedUser: false },
      })
      .catch(console.error);
  }
  noGhost(message) {
    const embed = new Discord.EmbedBuilder()
      .setColor("800080")
      .setTitle(`Não existe tal fantasma...`)
      .setDescription(
        `Nenhum fantasma foi encontrado, por favor coloque provas validas.`
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

module.exports = { EmbedGhosts };
