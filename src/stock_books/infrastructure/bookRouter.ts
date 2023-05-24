import { Router, Request, Response } from 'express';
import { AddBookUseCase } from '../application/addBookUseCase';
import { BookRepositoryImp } from './bookRepositoryImp';
import { Book } from '../domain/bookModel';

export const bookRouter = Router();

const bookRepository = new BookRepositoryImp();
const addBookUseCase = new AddBookUseCase(bookRepository);

// POST
bookRouter.post('/', async (req: Request, res: Response) => {
    const { title, author, price } = req.body;
    try {
        const book = new Book(title, author, price);
        await addBookUseCase.execute(book);
        res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
});

// GET
bookRouter.get('/', async (req: Request, res: Response) => {
    try {
        const books = await bookRepository.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error });
    }
});
