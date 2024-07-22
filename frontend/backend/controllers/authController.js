const admin = require('firebase-admin');

exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
