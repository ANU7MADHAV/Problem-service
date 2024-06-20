import { StatusCodes } from "http-status-codes";
import ProblemService from "../services/problem.service.js";
import ProblemRepository from "../repositories/problem.repository.js";

export const pingProblemController = (req, res) => {
  res.json({ message: "pingcontroller server alive" });
};

const problemService = new ProblemService(new ProblemRepository());

export const addProblem = async (req, res, next) => {
  try {
    const createProblem = await problemService.createProblem(req.body);
    // if (!createProblem) {
    //   return res.status(StatusCodes.NOT_ACCEPTABLE).send("failed to create");
    // }
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: "Successfully created a problem",
      data: createProblem,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getProblem = async (req, res, next) => {
  console.log("hello");
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

export const getProblems = async (req, res) => {
  try {
    const problems = await problemService.getProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: problems,
    });
  } catch (error) {
    console.log(error);
  }
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
