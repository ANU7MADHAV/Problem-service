import sanitizeMarkdownContent from "../utils/markdownSanitizer.js";

class ProblemService {
  constructor(ProblemRepository) {
    this.problemRepository = ProblemRepository;
  }
  async createProblem(problemData) {
    try {
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblems() {
    const probelms = await this.problemRepository.getProblems();
    return probelms;
  }

  async getProblem(id) {
    try {
      const problem = await this.problemRepository.getProblem(id);
      return problem;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProblem() {
    try {
      const update = await this.problemRepository.updateProblem(
        id,
        problemData
      );
      return update;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProblem(id) {
    try {
      const deleteProblem = await this.problemRepository(id);
      return deleteProblem;
    } catch (error) {
      console.log(this.deleteProblem);
    }
  }
}

export default ProblemService;
