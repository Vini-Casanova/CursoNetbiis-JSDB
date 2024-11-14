import express from 'express';
import AppRouter from './router/AppRouter.js';
import LogMiddleware from './middlewares/LogMiddleware.js';
import ErrorHandler from './middlewares/ErrorHandler.js';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(LogMiddleware);

app.use('/', AppRouter);

app.use(ErrorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});