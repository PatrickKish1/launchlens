import quizData from './questions.json';

export const QUIZ_QUESTIONS = quizData.questions;

// Helper function for tests
export const getQuestionById = (id) => {
  return QUIZ_QUESTIONS.find(q => q.id === id);
};