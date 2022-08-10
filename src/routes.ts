import { Router } from 'express';
import path from 'path';

import { HealthCheckAction } from './actions/HealthCheckAction';
import { ShowCookiesAction } from './actions/ShowCookiesAction';
import { TokenAction } from './actions/TokenAction';

const router = Router();

router.get('/', (req, res) => {
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + '/views/index.html'))
});

router.get('/health', HealthCheckAction);
router.get('/cookies', ShowCookiesAction);

router.post('/token', TokenAction);

export { router };