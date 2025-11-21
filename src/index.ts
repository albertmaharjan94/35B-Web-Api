import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/book.route';

const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// app.get('/api/books/', (req: Request, res: Response) => {
//     const books = [
//         { id: "B-1", title: "1984" },
//         { id: "B-2", title: "To Kill a Mockingbird", date: "2015-12-10" }
//     ];
//     res.status(200).json(books);
// });

app.listen(
    PORT, 
    () => {
        console.log(`Server: http://localhost:${PORT}`);
    }
);