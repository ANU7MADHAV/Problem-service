import BaseError from "../erros/base.error.js";
import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: {},
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong !!",
    err: err,
    data: {},
  });
};

export default errorHandler;
