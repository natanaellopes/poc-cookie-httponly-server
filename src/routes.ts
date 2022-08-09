import { Router } from 'express';

import { HealthCheck } from './actions/HealthCheck';

const router = Router();

router.get('/health', HealthCheck);

export { router };