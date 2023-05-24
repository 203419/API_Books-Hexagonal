import { BookModel } from "./bookModelDB";
import { Book } from "../domain/bookModel";

export class BookRepositoryImp {
    async save(book: Book): Promise<void> {
        const sequelizeBook = {
            title: book.title,
            author: book.author,
            price: book.price,
        };
        await BookModel.create(sequelizeBook);
    }

    async findAll(): Promise<Book[]> {
        const books = await BookModel.findAll();
        return books.map(book => new Book(book.title, book.author, book.price));
    }
}

