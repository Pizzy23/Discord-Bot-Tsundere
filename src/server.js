const express = require("express");
const { Dice } = require("./services/dice");

const server = express();
const dice = new Dice();
server.use(express.json());

server.all("/", (req, res) => {
  res.send("Bot On");
});

server.post("/modi", (req, res) => {
  let { diceOn, buffed, debuffed } = req.body;
  if (diceOn == null) {
    res.status(404).send("Invalid diceOn");
  }
  if (buffed == "" && debuffed == "") {
    buffed = "559901601167441920";
    debuffed = "229724269150470144";
    dice.setParams(diceOn, buffed, debuffed);
    res.status(200).send("Nice :)");
  }

  dice.setParams(diceOn, buffed, debuffed);
  res.status(200).send(buffed + "\n" + debuffed);
});

function keepAlive() {
  const PORT = process.env.PORT || 3001;
  server.listen(PORT, () => {
    console.log("-> Server Online : ", PORT);
  });
}

module.exports = keepAlive();
