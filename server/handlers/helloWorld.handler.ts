// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express';
import Book from '../models/bookModel';

export const listBooks = (_req: Request, res: Response) => {
  Book.find((err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(data);
  });
};

export const readBook = (req: Request | any, res: Response) => {
  res.json(req.book);
};

export const addBook = (req: Request, res: Response) => {
  // Add validations and logic here
  const book = new Book(req.body);
  book.save()
    .then((result: any) => res.status(201).send(result))
    .catch((err: any) => res.status(500).send(err));
};

export const editBook = (req: Request | any, res: Response) => {
  const { book } = req;
  const {
    title,
    author,
    genre,
    read
  } = req.body;

  book.title = title;
  book.author = author;
  book.genre = genre;
  book.read = read;

  book.save()
    .then((result: any) => res.json(result))
    .then((err: any) => res.status(500).send(err));
};

export const find = (req: Request | any, res: Response, next: NextFunction) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err) res.status(500).send(err);
    req.book = book;
    next();
  });
};
