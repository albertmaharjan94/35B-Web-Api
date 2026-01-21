import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './database/mongodb';
import { PORT } from './config';
import cors from 'cors';
import dotenv from "dotenv";
import path from "path";

dotenv.config();
// can use .env variable below this
console.log(process.env.PORT);

import authRoutes from "./routes/auth.route";
import bookRoutes from './routes/book.route';
import authUserRoutes from './routes/admin/user.route';


const app: Application = express();

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

let corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3005"],
    // which domain can access your backend server
    // add frontend domain in origin 
}
// origin: "*", // allow all domain to access your backend server
app.use(cors(corsOptions)); // implement cors middleware

// const PORT: number = 3000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/books', bookRoutes);
app.use('/api/admin/users', authUserRoutes);

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

async function startServer() {
    await connectDatabase();

    app.listen(
        PORT, 
        () => {
            console.log(`Server: http://localhost:${PORT}`);
        }
    );
}

startServer();