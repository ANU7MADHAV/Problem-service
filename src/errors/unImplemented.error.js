import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

class UnImplemented extends BaseError {
  constructor(methodName) {
    super(
      "Unimplemented error",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} not implemented`,
      details
    );
  }
}
