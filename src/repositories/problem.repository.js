import Problem from "../models/problem.model.js";

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      if (!problem) {
        return new Error();
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblems() {
    try {
      const problems = await Problem.find();
      if (!problems) {
        throw new NotFound("Problem", id);
      }
      return problems;
    } catch (error) {
      console.log(error);
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
      if (!updateProblem) {
        throw new NotFound("Problem", id);
      }
      return updateProblem;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProblem(id) {
    try {
      const problem = await Problem.deleteOne(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProblemRepository;
