import { Question } from '../types';

export const questions: Question[] = [
  // HTML Questions (10 questions)
  {
    id: 1,
    question: "Which HTML tag is used to create a line break?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which HTML element is used to define important text?",
    options: ["<important>", "<i>", "<strong>", "<bold>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the correct HTML for creating a text input field?",
    options: ["<input type='text'>", "<textfield>", "<input type='textfield'>", "<text>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "Which HTML element is used to create an unordered list?",
    options: ["<ol>", "<ul>", "<list>", "<ulist>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "Which attribute is used to specify the destination of a link?",
    options: ["destination", "href", "link", "src"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "Which HTML element is used to define a table header?",
    options: ["<header>", "<th>", "<thead>", "<table-header>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "Which HTML attribute is used to specify the character encoding?",
    options: ["encoding", "charset", "character-set", "encode"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "Which HTML element is used to define a clickable area inside an image map?",
    options: ["<area>", "<map>", "<region>", "<zone>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "Which HTML element is used to display preformatted text?",
    options: ["<pre>", "<code>", "<format>", "<text>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "Which HTML element defines a header for a document or section?",
    options: ["<head>", "<header>", "<top>", "<title>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },

  // CSS Questions (10 questions)
  {
    id: 11,
    question: "Which CSS property is used to change the font family?",
    options: ["font-family", "font-type", "typeface", "font-name"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "Which CSS property is used to add underline to text?",
    options: ["text-decoration", "text-underline", "underline", "decoration"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "How do you select the first child element in CSS?",
    options: [":first", ":first-child", ":child-first", ":first-element"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "Which CSS property is used to set the height of an element?",
    options: ["height", "size", "length", "tall"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "font-bold", "text-weight", "bold"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 16,
    question: "Which CSS property is used to control the opacity of an element?",
    options: ["opacity", "transparent", "alpha", "visibility"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 17,
    question: "Which CSS property is used to set the minimum width of an element?",
    options: ["min-width", "minimum-width", "width-min", "smallest-width"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "Which CSS property is used for CSS animations?",
    options: ["animation", "animate", "transition", "transform"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "Which CSS property is used to create flexible layouts?",
    options: ["flex", "flexible", "layout", "grid"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "Which CSS pseudo-class is used to style links when hovered?",
    options: [":hover", ":link", ":active", ":visited"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },

  // JavaScript Questions (10 questions)
  {
    id: 21,
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "final"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "Which method is used to remove the first element from an array?",
    options: ["shift()", "unshift()", "pop()", "push()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "Which of the following is used to check the data type of a variable?",
    options: ["typeof", "datatype", "type", "instanceof"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 24,
    question: "Which method is used to convert a string to lowercase?",
    options: ["toLower()", "lowerCase()", "toLowerCase()", "lower()"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 25,
    question: "Which symbol is used to access object properties?",
    options: [".", "->", "::", "#"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 26,
    question: "Which method is used to convert a JSON object to a string?",
    options: ["JSON.stringify()", "JSON.toString()", "JSON.parse()", "JSON.convert()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 27,
    question: "Which keyword is used to skip the current iteration of a loop?",
    options: ["skip", "continue", "next", "pass"],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "Which method is used to create a new array with transformed elements?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 29,
    question: "Which method is used to find the index of an element in an array?",
    options: ["indexOf()", "findIndex()", "search()", "locate()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "Which method is used to combine two or more arrays?",
    options: ["concat()", "merge()", "combine()", "join()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },

  // Java Questions (10 questions)
  {
    id: 31,
    question: "Which method is the entry point of a Java application?",
    options: ["start()", "main()", "begin()", "run()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Which keyword is used to inherit from a superclass?",
    options: ["inherits", "extends", "super", "parent"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "Which of the following is a wrapper class for int?",
    options: ["Int", "Integer", "IntObject", "IntWrapper"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "Which access modifier allows access from anywhere?",
    options: ["private", "protected", "public", "default"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which method is used to convert a string to an integer?",
    options: ["Integer.parseInt()", "Integer.valueOf()", "String.toInt()", "Both Integer.parseInt() and Integer.valueOf()"],
    correctAnswer: 3,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "Which keyword is used to call the parent class constructor?",
    options: ["parent", "super", "this", "base"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "Which exception is thrown when dividing by zero?",
    options: ["DivideByZeroException", "ArithmeticException", "MathException", "ZeroDivisionException"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "Which collection maintains insertion order and allows duplicates?",
    options: ["Set", "HashSet", "ArrayList", "TreeSet"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "Which keyword prevents a class from being subclassed?",
    options: ["final", "sealed", "abstract", "static"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "Which interface is used for functional programming in Java 8?",
    options: ["Function", "Lambda", "Functional", "Stream"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },

  // Spring Boot Questions (5 questions)
  {
    id: 41,
    question: "Which annotation is used to mark a class as a service layer component?",
    options: ["@Service", "@Component", "@Repository", "@Controller"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 42,
    question: "Which annotation is used to handle HTTP PUT requests?",
    options: ["@Put", "@PutMapping", "@RequestPut", "@HttpPut"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "Which annotation is used to mark a class as a configuration class?",
    options: ["@Config", "@Configuration", "@Settings", "@Properties"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 44,
    question: "Which annotation is used to bind path variables in URLs?",
    options: ["@PathVariable", "@RequestParam", "@PathParam", "@UrlParam"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which annotation is used to handle global exception handling?",
    options: ["@ExceptionHandler", "@ControllerAdvice", "@GlobalHandler", "@ErrorHandler"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Medium"
  },

  // JDBC & REST API Questions (5 questions)
  {
    id: 46,
    question: "Which method is used to execute INSERT, UPDATE, or DELETE statements in JDBC?",
    options: ["executeUpdate()", "executeQuery()", "execute()", "update()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 47,
    question: "Which method is used to close a database connection in JDBC?",
    options: ["close()", "disconnect()", "terminate()", "end()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 48,
    question: "Which HTTP method is used to partially update a resource in REST API?",
    options: ["PUT", "PATCH", "UPDATE", "MODIFY"],
    correctAnswer: 1,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 49,
    question: "Which HTTP status code indicates 'Not Found'?",
    options: ["400", "401", "404", "500"],
    correctAnswer: 2,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 50,
    question: "Which HTTP header is used to specify the content type of the request body?",
    options: ["Accept", "Content-Type", "Content-Encoding", "Media-Type"],
    correctAnswer: 1,
    category: "REST API",
    difficulty: "Easy"
  }
];