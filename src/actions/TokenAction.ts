import { Request, Response } from 'express';
import { randomUUID } from 'crypto';

const TokenAction = async (_req: Request, res: Response): Promise<any> => {
  const token = randomUUID();

  res.cookie('X-Token-Bearer', token, {
    maxAge: 1000 * 60 * 15, // 15 min
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return res.json({ token });
} 

export { TokenAction };