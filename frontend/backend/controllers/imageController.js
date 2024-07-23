import * as admin from 'firebase-admin';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const uploadImage = async (req: Request, res: Response) => {
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
