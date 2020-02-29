// eslint-disable-next-line no-unused-vars
import { NextFunction, Request, Response } from 'express';
import chalk from 'chalk';

export function routeNotFound(req: Request, res: Response) {
  console.error(chalk.red(`${req.path} not found`));
  res.status(404).send({ message: 'Requested resource was not found' });
}

export function genericErrorHandler(err: any, _req: Request, res: Response, next: NextFunction) {
  if (err) {
    res.status(500).send({
      message: 'An unhandled error occured',
      err
    });
  } else {
    next();
  }
}
