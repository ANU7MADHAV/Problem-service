import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

class BadRequest extends BaseError {
  constructor(property, details) {
    super(
      "BadRequest",
      StatusCodes.BAD_REQUEST,
      `Invalid structure for ${property} provided`,
      details
    );
  }
}
