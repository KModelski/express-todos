import express from 'express';
import { todosRouter } from './routes/todos.routes';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();
const basePath = '/api/v1';

app.get('/', (_req, res) => {
  res.send({ message: 'List of endpoints available on /api/v1' });
});

app.use(`${basePath}/todos`, todosRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
