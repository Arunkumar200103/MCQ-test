import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TestResult } from '../types';

export const exportToExcel = (results: TestResult[]) => {
  const workbook = XLSX.utils.book_new();
  
  // Create summary sheet
  const summaryData = results.map(result => ({
    'Student Name': result.studentName,
    'Batch': result.batch,
    'Score': result.score,
    'Total Questions': result.totalQuestions,
    'Percentage': `${result.percentage}%`,
    'Time Taken (minutes)': Math.round(result.timeTaken / 60),
    'Completion Time': result.completionTime
  }));
  
  const summarySheet = XLSX.utils.json_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');
  
  // Create detailed sheet
  const detailedData: any[] = [];
  results.forEach(result => {
    result.answers.forEach((answer, index) => {
      detailedData.push({
        'Student Name': result.studentName,
        'Batch': result.batch,
        'Question Number': index + 1,
        'Selected Option': answer.selectedOption + 1,
        'Correct': answer.isCorrect ? 'Yes' : 'No',
        'Time Spent (seconds)': answer.timeSpent
      });
    });
  });
  
  const detailedSheet = XLSX.utils.json_to_sheet(detailedData);
  XLSX.utils.book_append_sheet(workbook, detailedSheet, 'Detailed Results');
  
  // Save the file
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `MCQ_Test_Results_${new Date().toISOString().split('T')[0]}.xlsx`);
};

export const exportStudentResult = (result: TestResult) => {
  const workbook = XLSX.utils.book_new();
  
  const data = [{
    'Student Name': result.studentName,
    'Batch': result.batch,
    'Score': result.score,
    'Total Questions': result.totalQuestions,
    'Percentage': `${result.percentage}%`,
    'Time Taken (minutes)': Math.round(result.timeTaken / 60),
    'Completion Time': result.completionTime
  }];
  
  const worksheet = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Result');
  
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, `${result.studentName}_MCQ_Result.xlsx`);
};