import { Request, Response } from 'express';
import { randomUUID } from 'crypto';

const TokenAction = async (_req: Request, res: Response): Promise<any> => {
  const token = randomUUID();

  const expires = new Date(Date.now() + (1000 * 60 * 60 * 2)); // 2 hours

  res.cookie('X-Token-Bearer', token, {
    expires,
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    domain: 'localhost',
  });

  return res.json({ 
    cookie_expires: expires, 
    user: {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@email.com',
    }
  });
} 

export { TokenAction };