import express, { Application, Request, Response } from 'express';
import userRoute from './routes/userRoute';

const app: Application = express();

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => res.status(200).send('Server on and healthy!'));

app.use('/', userRoute);

export default app;
