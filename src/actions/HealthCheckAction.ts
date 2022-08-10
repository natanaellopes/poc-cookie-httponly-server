import { Request, Response } from 'express';

const HealthCheckAction = async (_req: Request, res: Response): Promise<any> => {
  return res.json({ success: true });
} 

export { HealthCheckAction };