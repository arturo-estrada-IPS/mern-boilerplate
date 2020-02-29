// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';

export const hello = (_req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
};

export const postHello = (req: Request, res: Response) => {
  res.json({
    body: req.body,
    message: 'success'
  });
};
