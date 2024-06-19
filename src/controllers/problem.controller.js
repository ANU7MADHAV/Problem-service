import { StatusCodes } from "http-status-codes";

export const pingProblemController = (req, res) => {
  res.json({ message: "pingcontroller server alive" });
};

export const addProblem = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
};

export const getProblem = async (req, res, next) => {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: problem,
    });
  } catch (error) {
    next(error);
  }
};

export const getProblems = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
};

export const deleteProblem = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
};

export const updateProblem = (req, res) => {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
};
