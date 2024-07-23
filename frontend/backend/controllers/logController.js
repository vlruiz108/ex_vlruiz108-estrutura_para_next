import * as admin from 'firebase-admin';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const createLog = async (req: Request, res: Response) => {
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
