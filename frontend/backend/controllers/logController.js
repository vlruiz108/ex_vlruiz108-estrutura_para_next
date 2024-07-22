const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

exports.createLog = async (req, res) => {
  const { userId, action, details } = req.body;
  try {
    const logId = uuidv4();
    await admin.firestore().collection('logs').doc(logId).set({
      userId,
      action,
      details,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(201).send({ logId });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
