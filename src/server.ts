import express from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();

const port = process.env.PORT || 3333;

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server started on port ${port}`));
