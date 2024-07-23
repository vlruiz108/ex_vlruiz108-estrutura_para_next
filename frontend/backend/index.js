import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';

admin.initializeApp();

const app = express();
const authRoutes = require('./routes/authRoutes');
const imageRoutes = require('./routes/imageRoutes');
const logRoutes = require('./routes/logRoutes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/images', imageRoutes);
app.use('/logs', logRoutes);

exports.api = functions.https.onRequest(app);

