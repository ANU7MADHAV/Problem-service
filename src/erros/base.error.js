export default class BaseError extends Error {
  constructor(name, description, statusCode, details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
  }
}
