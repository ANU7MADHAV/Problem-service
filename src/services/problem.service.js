import sanitizeMarkdownContent from "../utils/markdownSanitizer";

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
}

export default ProblemService;
