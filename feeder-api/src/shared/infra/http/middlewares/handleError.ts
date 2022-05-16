import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

const handleError = async (err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  else if (err instanceof SyntaxError)
    return response.status(422).json({
      status: 'error',
      message: 'Unprocessable Entity.'
    });

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
}

export default handleError;
