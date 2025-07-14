import { Question } from '../types';

export const questions: Question[] = [
  // Java Questions (25 questions)
  {
    id: 1,
    question: "Which of the following is NOT a primitive data type in Java?",
    options: ["int", "float", "String", "boolean"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "What is the output of System.out.println(10 + 20 + \"Hello\" + 30 + 40)?",
    options: ["30Hello70", "30Hello3040", "1020Hello3040", "50Hello70"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 3,
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "extends", "inherits", "super"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "null", "0"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "Which method is called when an object is created in Java?",
    options: ["main()", "constructor", "init()", "start()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "What is the purpose of the 'final' keyword in Java?",
    options: ["To make a variable constant", "To prevent inheritance", "To prevent method overriding", "All of the above"],
    correctAnswer: 3,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "Which collection class allows duplicate elements?",
    options: ["HashSet", "LinkedHashSet", "ArrayList", "TreeSet"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 8,
    question: "What is the difference between == and equals() in Java?",
    options: ["No difference", "== compares references, equals() compares values", "== compares values, equals() compares references", "Both compare values"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "Which of the following is used to handle exceptions in Java?",
    options: ["try-catch", "throw", "throws", "All of the above"],
    correctAnswer: 3,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "What is the output of: String str = null; System.out.println(str.length());",
    options: ["0", "null", "NullPointerException", "Compilation error"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 11,
    question: "Which access modifier allows access from anywhere?",
    options: ["private", "protected", "public", "default"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "What is autoboxing in Java?",
    options: ["Converting object to primitive", "Converting primitive to object", "Boxing objects", "None of the above"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 13,
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "begin()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "What is the use of 'super' keyword in Java?",
    options: ["To call parent constructor", "To access parent methods", "To access parent variables", "All of the above"],
    correctAnswer: 3,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 15,
    question: "Which of the following is immutable in Java?",
    options: ["ArrayList", "String", "HashMap", "StringBuilder"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 16,
    question: "What is the output of: System.out.println(\"Hello\".charAt(1));",
    options: ["H", "e", "l", "o"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 17,
    question: "Which interface is implemented by all collections in Java?",
    options: ["List", "Set", "Collection", "Map"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 18,
    question: "What is method overloading in Java?",
    options: ["Same method name with different parameters", "Same method name with same parameters", "Different method names", "None of the above"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 19,
    question: "Which operator is used to check if an object is an instance of a class?",
    options: ["instanceof", "is", "typeof", "class"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 20,
    question: "What is the purpose of garbage collection in Java?",
    options: ["To clean code", "To free memory", "To optimize performance", "To handle exceptions"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 21,
    question: "Which of the following is a checked exception in Java?",
    options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "IOException", "IllegalArgumentException"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 22,
    question: "What is the use of 'static' keyword in Java?",
    options: ["To create class-level variables", "To create class-level methods", "To avoid creating objects", "All of the above"],
    correctAnswer: 3,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 23,
    question: "Which of the following is NOT a loop in Java?",
    options: ["for", "while", "do-while", "repeat"],
    correctAnswer: 3,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 24,
    question: "What is the maximum value of int in Java?",
    options: ["2147483647", "2147483648", "9223372036854775807", "65535"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 25,
    question: "Which method is used to convert a string to uppercase in Java?",
    options: ["toUpper()", "toUpperCase()", "upper()", "upperCase()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },

  // JDBC Questions (25 questions)
  {
    id: 26,
    question: "What does JDBC stand for?",
    options: ["Java Database Connectivity", "Java Data Base Connection", "Java Database Connection", "Java Data Base Connectivity"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 27,
    question: "Which package contains JDBC classes and interfaces?",
    options: ["java.sql", "java.jdbc", "java.database", "java.db"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 28,
    question: "What is the first step in JDBC connection process?",
    options: ["Create Connection", "Load Driver", "Execute Query", "Create Statement"],
    correctAnswer: 1,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 29,
    question: "Which method is used to establish a connection to database?",
    options: ["DriverManager.getConnection()", "Connection.connect()", "Database.connect()", "JDBC.connect()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 30,
    question: "Which interface is used to execute SQL statements?",
    options: ["Connection", "Statement", "ResultSet", "DriverManager"],
    correctAnswer: 1,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 31,
    question: "What is the purpose of PreparedStatement?",
    options: ["To execute static SQL", "To execute dynamic SQL with parameters", "To execute stored procedures", "To manage transactions"],
    correctAnswer: 1,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 32,
    question: "Which method is used to execute SELECT statements?",
    options: ["executeQuery()", "executeUpdate()", "execute()", "query()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "Which method is used to execute INSERT, UPDATE, DELETE statements?",
    options: ["executeQuery()", "executeUpdate()", "execute()", "update()"],
    correctAnswer: 1,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "What does ResultSet represent?",
    options: ["Database connection", "SQL statement", "Query result", "Database table"],
    correctAnswer: 2,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which method is used to move cursor to next row in ResultSet?",
    options: ["next()", "moveNext()", "forward()", "nextRow()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "What is the advantage of PreparedStatement over Statement?",
    options: ["Better performance", "Prevents SQL injection", "Supports parameterized queries", "All of the above"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 37,
    question: "Which method is used to set parameters in PreparedStatement?",
    options: ["setParameter()", "setString()", "setInt()", "Both B and C"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "What is CallableStatement used for?",
    options: ["Executing stored procedures", "Executing functions", "Executing SQL statements", "Both A and B"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "Which method is used to commit a transaction?",
    options: ["commit()", "save()", "persist()", "flush()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 40,
    question: "Which method is used to rollback a transaction?",
    options: ["rollback()", "undo()", "cancel()", "revert()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 41,
    question: "What is auto-commit mode in JDBC?",
    options: ["Automatic transaction management", "Automatic connection closing", "Automatic statement execution", "Automatic result processing"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 42,
    question: "Which method is used to disable auto-commit?",
    options: ["setAutoCommit(false)", "disableAutoCommit()", "autoCommit(false)", "setCommit(false)"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 43,
    question: "What is a JDBC driver?",
    options: ["Software component that connects Java to database", "Database management system", "Java library", "SQL interpreter"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 44,
    question: "How many types of JDBC drivers are there?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which is the most commonly used JDBC driver type?",
    options: ["Type 1", "Type 2", "Type 3", "Type 4"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 46,
    question: "What is Type 4 JDBC driver also known as?",
    options: ["JDBC-ODBC Bridge", "Native-API Driver", "Network Protocol Driver", "Pure Java Driver"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 47,
    question: "Which method is used to close a JDBC connection?",
    options: ["close()", "disconnect()", "terminate()", "end()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 48,
    question: "What happens if you don't close JDBC resources?",
    options: ["Memory leak", "Connection pool exhaustion", "Performance degradation", "All of the above"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 49,
    question: "Which interface is used to get metadata about ResultSet?",
    options: ["ResultSetMetaData", "MetaData", "ResultMetaData", "DatabaseMetaData"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Medium"
  },
  {
    id: 50,
    question: "What is the purpose of DatabaseMetaData?",
    options: ["To get information about database", "To get information about tables", "To get information about columns", "All of the above"],
    correctAnswer: 3,
    category: "JDBC",
    difficulty: "Medium"
  }
];