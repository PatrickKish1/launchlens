import { QUIZ_QUESTIONS, getQuestionById } from '../backend/questions';

describe('questions module', () => {
  it('exports questions array', () => {
    expect(Array.isArray(QUIZ_QUESTIONS)).toBe(true);
    expect(QUIZ_QUESTIONS.length).toBeGreaterThan(0);
  });

  it('each question has required fields', () => {
    QUIZ_QUESTIONS.forEach(question => {
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('text');
      expect(question).toHaveProperty('options');
      expect(Array.isArray(question.options)).toBe(true);
    });
  });

  it('getQuestionById returns correct question', () => {
    const testId = QUIZ_QUESTIONS[0].id;
    const question = getQuestionById(testId);
    expect(question.id).toBe(testId);
  });

  it('getQuestionById returns undefined for invalid id', () => {
    expect(getQuestionById(-1)).toBeUndefined();
  });
});