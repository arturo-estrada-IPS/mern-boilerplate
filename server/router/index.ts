import { Router } from 'express';
import { hello, postHello } from '../handlers/helloWorld.handler';

export default function Routes(): Router {
  const router = Router();

  router.route('/')
    .get(hello)
    .post(postHello);

  return router;
}
