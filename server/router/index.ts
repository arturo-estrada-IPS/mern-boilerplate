import { Router } from 'express';
import {
  listBooks,
  readBook,
  editBook,
  addBook,
  find
} from '../handlers/helloWorld.handler';

export default function Routes(): Router {
  const router = Router();

  router.use('/:bookId', find);

  router.route('/')
    .get(listBooks)
    .post(addBook);

  router.route('/:bookId')
    .put(editBook)
    .get(readBook);

  return router;
}
