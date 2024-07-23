import * as admin from 'firebase-admin';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

