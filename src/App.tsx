import React, { useState } from 'react';
import { GraduationCap, Users } from 'lucide-react';
import RegistrationForm from './components/RegistrationForm';
import MCQTest from './components/MCQTest';
import TestResults from './components/TestResults';
import TeacherDashboard from './components/TeacherDashboard';
import { Student, Answer, TestResult, AppState } from './types';

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'registration',
    currentStudent: null,
    currentQuestionIndex: 0,
    answers: [],
    testStartTime: 0,
    testResults: []
  });

  const handleStudentRegistration = (student: Student) => {
    setAppState(prev => ({
      ...prev,
      currentStudent: student,
      currentPage: 'test',
      testStartTime: Date.now()
    }));
  };

  const handleTestComplete = (answers: Answer[], timeTaken: number) => {
    if (!appState.currentStudent) return;

    const score = answers.filter(answer => answer.isCorrect).length;
    const percentage = Math.round((score / 50) * 100);

    const testResult: TestResult = {
      studentId: appState.currentStudent.id,
      studentName: appState.currentStudent.name,
      batch: appState.currentStudent.batch,
      answers,
      score,
      totalQuestions: 50,
      percentage,
      completionTime: new Date().toLocaleString(),
      timeTaken
    };

    setAppState(prev => ({
      ...prev,
      currentPage: 'results',
      answers,
      testResults: [...prev.testResults, testResult]
    }));
  };

  const handleRestart = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'registration',
      currentStudent: null,
      currentQuestionIndex: 0,
      answers: [],
      testStartTime: 0
    }));
  };

  const handleTeacherLogin = () => {
    setAppState(prev => ({
      ...prev,
      currentPage: 'teacher-dashboard'
    }));
  };

  const getCurrentTestResult = (): TestResult | null => {
    if (!appState.currentStudent) return null;
    return appState.testResults.find(result => result.studentId === appState.currentStudent!.id) || null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {appState.currentPage === 'registration' && (
        <div>
          <RegistrationForm onRegister={handleStudentRegistration} />
          {/* Teacher Login Button */}
          <div className="fixed top-4 right-4">
            <button
              onClick={handleTeacherLogin}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg"
            >
              <Users className="w-4 h-4 mr-2" />
              Teacher Login
            </button>
          </div>
        </div>
      )}

      {appState.currentPage === 'test' && appState.currentStudent && (
        <MCQTest
          student={appState.currentStudent}
          onTestComplete={handleTestComplete}
        />
      )}

      {appState.currentPage === 'results' && getCurrentTestResult() && (
        <TestResults
          result={getCurrentTestResult()!}
          onRestart={handleRestart}
        />
      )}

      {appState.currentPage === 'teacher-dashboard' && (
        <TeacherDashboard
          results={appState.testResults}
          onBack={handleRestart}
        />
      )}
    </div>
  );
}

export default App;