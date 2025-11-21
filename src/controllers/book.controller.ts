import { Request, Response } from 'express';
import { z } from 'zod';

export const BookSchema = z.object({
    id: z.string().min(1, { message: "Book ID is required" }),
    title: z.string().min(1, { message: "Book Title is required" }),
    date: z.string().optional()
});
export type Book = z.infer<typeof BookSchema>; // TypeScript type from Zod schema

// DTO - Data Transfer Object
export const CreateBookDTO = BookSchema.pick({ id: true, title: true }); // what client sends to server
export type CreateBookDTO = z.infer<typeof CreateBookDTO>;

// export type Book = {
//     id: string;
//     title: string;
//     date?: string;
// }
export const book: Book[] = [
    { id: "B-1", title: "1984" },
    { id: "B-2", title: "To Kill a Mockingbird", date: "2015-12-10" }
];

export class BookController {
    createBook = (req: Request, res: Response) => {
        const validation = CreateBookDTO.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({ errors: validation.error });
        }
        const { id, title } = validation.data;
        // const { id, title  } = req.body; // destructuring
        // const id: string = req.body.id;
        // if(!id){
        //     return res.status(400).json({ message: "Book ID is required" });
        // }
        // if(!title){
        //     return res.status(400).json({ message: "Book Title is required" });
        // }

        const checkBook = book.find(elem => elem.id === id);
        if(checkBook){
            return  res.status(409).json({ message: "Book ID already exists" });
        }
        const newBook: Book = { id, title };
        // same as { id: id, title: title } , if key and variable name are same
        book.push(newBook);
        return res.status(201).json(newBook);
    }

    getBooks = (req: Request, res: Response) => {
        const return_book: Book[] = book;
        res.status(200).json(return_book);
    }
}