import { calculateResults } from '../lib/result';

describe('quizLogic', () => {
  const mockQuestions = [
    { id: 1, options: [{ value: "solo" }, { value: "part-time" }] },
    { id: 2, options: [{ value: "time" }, { value: "knowledge" }] }
  ];

  it('returns correct recommendation for DIY preference', () => {
    const answers = ["solo", "time"];
    const results = calculateResults(answers, mockQuestions);
    expect(results.recommendation).toBe("diy");
  });

  it('returns correct recommendation for outsourcing preference', () => {
    const answers = ["part-time", "knowledge"];
    const results = calculateResults(answers, mockQuestions);
    expect(results.recommendation).toBe("outsource");
  });

  it('handles empty answers', () => {
    const results = calculateResults([], mockQuestions);
    expect(results).toHaveProperty('recommendation');
    expect(results).toHaveProperty('scores');
  });

  it('handles tiebreaker situations', () => {
    const answers = ["solo", "part-time"];
    const results = calculateResults(answers, mockQuestions);
    // Should have some deterministic behavior for ties
    expect(["diy", "outsource"]).toContain(results.recommendation);
  });
});