import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

class InternalServer extends BaseError {
  constructor(details) {
    super(
      "Internal Server error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      `Something went wrong !!`,
      details
    );
  }
}
