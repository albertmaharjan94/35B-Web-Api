import { Router, Request, Response } from 'express';
import { BookController } from '../controllers/book.controller';

const bookController = new BookController();

const router: Router = Router();

router.get('/', bookController.getBooks);

export default router;