import { Request, Response, NextFunction } from 'express';

export const disableHsts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.set('Strict-Transport-Security', 'max-age=0');
  next();
};
