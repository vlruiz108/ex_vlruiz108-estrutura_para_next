const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

exports.uploadImage = async (req, res) => {
  const { userId, imageUrl, location } = req.body;
  try {
    const imageId = uuidv4();
    await admin.firestore().collection('images').doc(imageId).set({
      userId,
      imageUrl,
      location,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.status(201).send({ imageId });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
