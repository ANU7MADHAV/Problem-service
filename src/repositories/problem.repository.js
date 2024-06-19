import Problem from "../models/problem.model.js";

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProblem(id, problemData) {
    try {
      const updateProblem = await Problem.findByIdAndUpdate(id, problemData, {
        new: true,
      });
      if (!updatedProblem) {
        throw new NotFound("Problem", id);
      }
      return updateProblem;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProblemRepository;
