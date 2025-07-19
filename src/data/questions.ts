import { Question } from '../types';

export const questions: Question[] = [
  // HTML Questions (10 questions)
  {
    id: 1,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "What is the correct HTML for adding a background color?",
    options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<body color='yellow'>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["title", "src", "alt", "longdesc"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "Which HTML element is used to create an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "What is the correct HTML for making text bold?",
    options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
    correctAnswer: 3,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "Which HTML element is used to define the document type?",
    options: ["<doctype>", "<!DOCTYPE>", "<html>", "<meta>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "Which HTML element is used to group inline elements?",
    options: ["<div>", "<span>", "<group>", "<inline>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "styles", "style", "css"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "Which HTML element is used to create a table row?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "Which HTML element defines a footer for a document or section?",
    options: ["<bottom>", "<footer>", "<end>", "<foot>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },

  // CSS Questions (10 questions)
  {
    id: 11,
    question: "Which CSS property is used to change the text color of an element?",
    options: ["fgcolor", "text-color", "color", "font-color"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "Which CSS property is used to make text italic?",
    options: ["font-style", "text-style", "font-variant", "text-decoration"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "How do you make a list that lists its items with squares?",
    options: ["list-style-type: square;", "list-type: square;", "list: square;", "list-style: square;"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "Which CSS property controls the space between elements?",
    options: ["padding", "margin", "spacing", "border"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "Which CSS property is used to center text horizontally?",
    options: ["text-align: center;", "align: center;", "horizontal-align: center;", "center: text;"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 16,
    question: "Which CSS property is used to hide an element?",
    options: ["visibility: hidden;", "display: none;", "hide: true;", "Both visibility: hidden; and display: none;"],
    correctAnswer: 3,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 17,
    question: "Which CSS property is used to set the width of an element?",
    options: ["width", "size", "length", "dimension"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "Which CSS property is used to create a shadow effect?",
    options: ["shadow", "text-shadow", "box-shadow", "Both text-shadow and box-shadow"],
    correctAnswer: 3,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "Which CSS unit is relative to the font-size of the element?",
    options: ["px", "em", "pt", "cm"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "Which CSS property is used to control the layout method of an element?",
    options: ["position", "display", "float", "layout"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Medium"
  },

  // JavaScript Questions (10 questions)
  {
    id: 21,
    question: "Which symbol is used for single line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "Which method is used to add an element to the end of an array?",
    options: ["add()", "push()", "append()", "insert()"],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "Which of the following is used to declare a function in JavaScript?",
    options: ["function myFunction()", "def myFunction()", "create myFunction()", "func myFunction()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 24,
    question: "Which method is used to convert a string to uppercase?",
    options: ["toUpper()", "upperCase()", "toUpperCase()", "upper()"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 25,
    question: "Which of the following is the correct way to create an array?",
    options: ["var arr = [];", "var arr = {};", "var arr = ();", "var arr = <>;"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 26,
    question: "Which method is used to parse a JSON string?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "stringifyJSON()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 27,
    question: "Which keyword is used to exit from a loop?",
    options: ["exit", "break", "stop", "return"],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "Which method is used to select multiple elements by class name?",
    options: ["getElementsByClassName()", "getElementByClassName()", "selectByClass()", "findByClass()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 29,
    question: "Which operator is used to check if a property exists in an object?",
    options: ["in", "has", "exists", "contains"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "Which method is used to convert a number to a string?",
    options: ["toString()", "toText()", "stringify()", "convert()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },

  // Java Questions (10 questions)
  {
    id: 31,
    question: "Which package is imported by default in every Java program?",
    options: ["java.util", "java.io", "java.lang", "java.awt"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "begin()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "Which of the following is used to take input from the user in Java?",
    options: ["Scanner", "Reader", "Input", "Console"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "Which keyword is used to define a constant in Java?",
    options: ["const", "final", "static", "constant"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which method is used to find the length of a string in Java?",
    options: ["size()", "length()", "count()", "len()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "Which keyword is used to refer to the current object?",
    options: ["this", "self", "current", "me"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "Which collection class allows duplicate elements?",
    options: ["Set", "HashSet", "ArrayList", "TreeSet"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "Which keyword is used to implement an interface?",
    options: ["extends", "implements", "uses", "includes"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "Which method is called when an object is created?",
    options: ["constructor", "initialize()", "create()", "new()"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "Which operator is used for object type checking?",
    options: ["typeof", "instanceof", "is", "type"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },

  // Spring Boot Questions (5 questions)
  {
    id: 41,
    question: "Which annotation is used to mark a class as a Spring component?",
    options: ["@Component", "@Bean", "@Service", "@Repository"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 42,
    question: "Which annotation is used to handle HTTP POST requests?",
    options: ["@Post", "@PostMapping", "@RequestPost", "@HttpPost"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "Which annotation is used to mark a method as a bean producer?",
    options: ["@Bean", "@Component", "@Service", "@Configuration"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 44,
    question: "Which annotation is used to enable auto-configuration in Spring Boot?",
    options: ["@EnableAutoConfiguration", "@AutoConfig", "@Configuration", "@SpringBootApplication"],
    correctAnswer: 3,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which annotation is used to bind request parameters to method parameters?",
    options: ["@RequestParam", "@PathVariable", "@RequestBody", "@ModelAttribute"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },

  // JDBC & REST API Questions (5 questions)
  {
    id: 46,
    question: "Which method is used to execute a SELECT query in JDBC?",
    options: ["executeQuery()", "executeUpdate()", "execute()", "query()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 47,
    question: "Which interface is used to iterate through query results in JDBC?",
    options: ["Iterator", "ResultSet", "DataSet", "QueryResult"],
    correctAnswer: 1,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 48,
    question: "Which HTTP method is used to delete a resource in REST API?",
    options: ["REMOVE", "DELETE", "DESTROY", "DROP"],
    correctAnswer: 1,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 49,
    question: "Which HTTP status code indicates that a resource was successfully created?",
    options: ["200", "201", "202", "204"],
    correctAnswer: 1,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 50,
    question: "Which HTTP method is idempotent and used for retrieving data?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: 2,
    category: "REST API",
    difficulty: "Easy"
  }
];