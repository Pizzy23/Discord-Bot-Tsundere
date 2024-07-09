const match = require("nodemon/lib/monitor/match");
const { FireBase } = require("../util/firebase");

class CabacoClass {
  constructor() {
    this.fb = new FireBase();
  }

  async getCabaco(input, id, user, validation, message) {
    const strClear = validation;
    if (strClear == "list") {
      const fbList = await this.fb.cabacoList(message);
      let list = [];
      fbList.forEach((item, index) => {
        list[index] = `<@${item.id}> ${item.text}: ${item.num}`;
      });
      return list;
    }
    if (strClear == "dd") {
      const add = await this.fb.cabacoAdd(user, id, message);
      return add;
    }

    if (strClear !== "list") {
      return "Insira algum comando existente. <List ou Add @DaPessoa>";
    }
  }
}

module.exports = { CabacoClass };
