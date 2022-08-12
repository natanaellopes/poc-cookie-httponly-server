import { Request, Response } from 'express';

const ShowCookiesAction = async (req: Request, res: Response): Promise<any> => {
  const cookies = req.headers.cookie;

  console.log(cookies)

  if(!cookies) {
    return res.json({ success: false });
  }

  const parsedCookies = cookies.split('; ');
  let cookiesObject = {};

  parsedCookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    cookiesObject = { ...cookiesObject, [key]: value };
  });

  return res.json(cookiesObject);
} 

export { ShowCookiesAction };