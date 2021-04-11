import { Request, Response, NextFunction } from 'express';

const handler = <T>(
  promise: (...params: any) => Promise<Object>,
  params: (req?: Request, res?: Response, next?: NextFunction) => T[] 
) => async (
  request: Request, 
  response: Response, 
  next: NextFunction
) => {
  const boundParameters = params ? params(request, response, next) : [];

  try {
    const result = await promise(...boundParameters);
    return response.json(result || { message: 'OK' });
  }
  catch (error) {
    return response.status(500).json(error.message);
  }
};

export default handler;
