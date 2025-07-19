const { cleanMarkdown } = require("../utils");

class ProblemService {
  constructor(ProblemRepository) {
    this.ProblemRepository = ProblemRepository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = cleanMarkdown(problemData.description);
      const problem = await this.ProblemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems (){
    const problems = await this.ProblemRepository.getAllProblems();
    return problems;
  }
}

module.exports = { ProblemService };
