import "dotenv/config";

import express from 'express';
import cors from 'cors';
import rootRouter from '@routes/index';
import { corsOptions } from '@config/cors.config';
import { connectDB } from "./config/db.config";
import { globalErrorHandler } from '@middleware/error.middleware';

const PORT: number = Number(process.env.PORT) || 3000;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', rootRouter);

app.get('/', (req, res) => {
  console.log(req.query);

  res.status(200).json(
    'Сервер работает'
  )
})

app.use(globalErrorHandler);

const startServer = () => {
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
