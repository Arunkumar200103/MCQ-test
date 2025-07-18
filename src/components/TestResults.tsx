import React from 'react';
import { Trophy, Clock, CheckCircle, XCircle, Download, RotateCcw } from 'lucide-react';
import { TestResult } from '../types';
import { exportStudentResult } from '../utils/excel';

interface TestResultsProps {
  result: TestResult;
  onRestart: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ result, onRestart }) => {
  const getGradeInfo = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 70) return { grade: 'B+', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 60) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 50) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (percentage >= 40) return { grade: 'D', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { grade: 'F', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const gradeInfo = getGradeInfo(result.percentage);
  const correctAnswers = result.answers.filter(a => a.isCorrect).length;
  const wrongAnswers = result.answers.filter(a => !a.isCorrect).length;
  const unanswered = result.totalQuestions - result.answers.length;

  const handleDownload = () => {
    exportStudentResult(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Trophy className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Completed!</h1>
          <p className="text-gray-600">Here are your results</p>
        </div>

        {/* Results Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Score Section */}
            <div className="text-center">
              <div className={`${gradeInfo.bg} rounded-full p-6 w-32 h-32 flex items-center justify-center mx-auto mb-4`}>
                <span className={`text-4xl font-bold ${gradeInfo.color}`}>
                  {gradeInfo.grade}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {result.score} / {result.totalQuestions}
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                {result.percentage}% Score
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {result.studentName}</p>
                  <p><span className="font-medium">Batch:</span> {result.batch}</p>
                  <p><span className="font-medium">Completed:</span> {result.completionTime}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Test Statistics</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Correct Answers: {correctAnswers}</span>
                  </div>
                  <div className="flex items-center">
                    <XCircle className="w-5 h-5 text-red-500 mr-3" />
                    <span>Wrong Answers: {wrongAnswers}</span>
                  </div>
                  {unanswered > 0 && (
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-500 mr-3" />
                      <span>Unanswered: {unanswered}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Time Taken: {Math.round(result.timeTaken / 60)} minutes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Analysis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Category Breakdown</h4>
              <div className="space-y-2">
                {['HTML', 'CSS'].map(category => {
                  const categoryAnswers = result.answers.filter((answer, index) => {
                    // Find the question for this answer
                    const questionIndex = index; // Assuming answers are in order
                    return questionIndex < 25 ? category === 'Frontend' : category === 'Backend' ;
                  });
                  const categoryCorrect = categoryAnswers.filter(a => a.isCorrect).length;
                  const categoryTotal = category === 'HTML' ? 25 : 25;
                  const categoryPercentage = Math.round((categoryCorrect / categoryTotal) * 100);
                  
                  return (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-gray-600">{category}</span>
                      <span className="font-medium">{categoryCorrect}/{categoryTotal} ({categoryPercentage}%)</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Recommendations</h4>
              <div className="text-sm text-gray-600 space-y-2">
                {result.percentage >= 80 ? (
                  <p>🎉 Excellent performance! You have a strong understanding of Frontend and Backend concepts.</p>
                ) : result.percentage >= 60 ? (
                  <p>👍 Good job! Focus on reviewing the topics where you missed questions.</p>
                ) : (
                  <p>📚 Keep studying! Consider revisiting fundamental concepts in Frontend and Backend .</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Results
          </button>
          <button
            onClick={onRestart}
            className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Take Another Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;