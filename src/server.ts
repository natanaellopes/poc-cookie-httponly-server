import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router } from './routes';

const app = express();

const port = process.env.PORT || 3333;

app.use(cors({credentials: true, origin: (_origin, callback) => {
  return callback(null, true);
}}));

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server started on port ${port}`));
