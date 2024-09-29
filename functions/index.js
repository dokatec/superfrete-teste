const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.addName = functions.https.onRequest(async (req, res) => {
  const {name} = req.body;
  const writeResult = await admin
      .firestore()
      .collection("messages")
      .add({name});
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

exports.getNames = functions.https.onRequest(async (req, res) => {
  db.collection("messages")
      .get()
      .then((docs) => {
        const todos = [];
        docs.forEach((doc) => {
        // eslint-disable-next-line max-len
          todos.push({
            increment_Id: doc.data().increment_id,
            messages: doc.data().name,
          });
        });
        res.json(todos);
      });
});

exports.incrementDocumentID = functions.firestore
    .document("/messages/{docId}")
    .onCreate(async (snap, context) => {
      const name = db.collection("counters").doc("increment_id");
      try {
        await admin.firestore().runTransaction(async (transaction) => {
          const doc = await transaction.get(name);
          const newId = (doc.exists ? doc.data().value : 0) + 1;
          transaction.set(name, {value: newId});
          transaction.update(snap.ref, {increment_id: newId});
        });
      } catch (error) {
        console.error("Erro ao gerar increment_id:", error);
      }
    });
