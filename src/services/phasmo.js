const { ghost, evidencesParser } = require("../util/mocks/ghosts");
const { EmbedGhosts } = require("../util/embed/embedGhost");
const embed = new EmbedGhosts();

class Phasmo {
  _clearString(str, prefix) {
    const phasmoReplace = new RegExp(`\\${prefix}\\s*ph\\s*`, "g");
    const string = str.replace(phasmoReplace, "");
    if (string == "") {
      throw new Error("Sem evidencia");
    }
    return string;
  }
  _parseEvidence(evidence) {
    let str = evidence.replace(/\s/g, "_");
    let slice = str.split("_");
    let evide = [];
    slice.forEach(function (index) {
      let ev = evidencesParser[index];
      evide.push(ev);
    });
    return evide;
  }
  _detectGhost(evidence) {
    let validGhosts = [];
    let parseEvidence = this._parseEvidence(evidence);
    ghost.forEach(function (ghost) {
      let isValid = parseEvidence.every(function (evidence) {
        return ghost.evidence.includes(evidence);
      });
      if (isValid) {
        validGhosts.push(ghost);
      }
    });
    if (validGhosts.length == 0) {
      throw new Error("Sem Fantasmas.");
    }
    return validGhosts;
  }
  calls(client, message) {
    const prefix = client.important.TSUND_PREFIX;
    try {
      const string = this._clearString(message.content, prefix);
      const valid = this._detectGhost(string);
      if (valid.length !== 0) {
        valid.forEach(function (ghost) {
          embed.ghostIsValid(message, ghost);
        });
      }
      if (valid.length === 0) {
        return embed.noGhost(message);
      }
    } catch (e) {
      if (e.message == "Sem Fantasmas.") {
        return embed.noGhost(message);
      }
      return embed.evidencesCorrectInput(message);
    }
  }
}

module.exports = { Phasmo };
