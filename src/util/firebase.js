const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const firebaseConfig = require("../../firebaseCred.json");
const app = initializeApp({ credential: cert(firebaseConfig) });
const db = getFirestore(app);
const { EmbedClass } = require("./embed/embedBase");
const { allId, names } = require("./idMock");

class FireBase {
  constructor() {
    this.fb = db;
    this.embed = new EmbedClass();
  }
  async cabacoList() {
    try {
      let index;
      let response = [];
      for (index in allId) {
        index = parseInt(index);
        let id = allId[index];
        let res = await this.cabacoGet(id);
        response[index] = res = {
          id: id,
          num: res.numeroCabaco,
          name: res.name,
          text: res.text,
        };
      }
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async cabacoGet(id) {
    try {
      const db = this.fb;
      const cabacoRef = db.collection("cabacos").doc(id);
      const res = await cabacoRef.get();
      if (!res.exists) {
        return (err = "Mensagem de erro bem generica");
      }
      return res.data();
    } catch (e) {
      console.log(e);
    }
  }
  async cabacoAdd(user, str, message) {
    try {
      const db = this.fb;
      const cabacoRef = db.collection("cabacos").doc(str);
      let res1 = await cabacoRef.get();
      if (res1) {
        res1 = res1.data();
        await cabacoRef.set({
          name: user,
          numeroCabaco: res1.numeroCabaco + 1,
          text: res1.text,
        });
        res1.numeroCabaco = res1.numeroCabaco + 1;
        if (
          res1.numeroCabaco == 10 ||
          res1.numeroCabaco == 20 ||
          res1.numeroCabaco == 30 ||
          res1.numeroCabaco == 40 ||
          res1.numeroCabaco == 50
        ) {
          this.embed.achivementeKarma(message);
        }
        return (res1 = { name: user, numeroCabaco: res1.numeroCabaco });
      }
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = { FireBase };
