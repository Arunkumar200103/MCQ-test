export interface Student {
  id: string;
  name: string;
  batch: string;
  registrationTime: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'HTML' | 'CSS' | 'JavaScript' |'Java' |'JDBC' |'Spring Boot'|'REST API';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Answer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface TestResult {
  studentId: string;
  studentName: string;
  batch: string;
  answers: Answer[];
  score: number;
  totalQuestions: number;
  percentage: number;
  completionTime: string;
  timeTaken: number;
}

export interface AppState {
  currentPage: 'registration' | 'test' | 'results' | 'teacher-dashboard';
  currentStudent: Student | null;
  currentQuestionIndex: number;
  answers: Answer[];
  testStartTime: number;
  testResults: TestResult[];
}