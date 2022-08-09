import { Request, Response } from 'express';

const HealthCheck = async (_req: Request, res: Response): Promise<any> => {
  return res.json({ success: true });
} 

export { HealthCheck };