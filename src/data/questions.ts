import { Question } from '../types';

export const questions: Question[] = [
  // HTML Questions (10 questions)
  {
    id: 1,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<script>", "<style>", "<link>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<header>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "Which attribute is used to specify the URL of the page the link goes to?",
    options: ["link", "src", "href", "url"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "What is the correct HTML for creating a checkbox?",
    options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "Which HTML element is used to define navigation links?",
    options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "What is the correct HTML for making a drop-down list?",
    options: ["<input type='dropdown'>", "<select>", "<list>", "<dropdown>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "Which HTML element is used to define a section in a document?",
    options: ["<section>", "<div>", "<article>", "<segment>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "What is the correct HTML for inserting an image?",
    options: ["<img href='image.gif'>", "<image src='image.gif'>", "<img src='image.gif'>", "<picture src='image.gif'>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "Which HTML element is used to define emphasized text?",
    options: ["<italic>", "<i>", "<em>", "<emphasis>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },

  // CSS Questions (10 questions)
  {
    id: 11,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "Which is the correct CSS syntax?",
    options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "How do you select an element with id 'demo'?",
    options: [".demo", "#demo", "demo", "*demo"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 16,
    question: "How do you select elements with class name 'test'?",
    options: [".test", "#test", "test", "*test"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 17,
    question: "Which CSS property is used to create space between the element's border and inner content?",
    options: ["margin", "padding", "border-spacing", "spacing"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "Which CSS property is used to create rounded corners?",
    options: ["border-radius", "corner-radius", "rounded", "border-corner"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "Which CSS property is used to specify the stacking order of elements?",
    options: ["z-index", "stack-order", "layer", "position"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "How do you make each word in a text start with a capital letter?",
    options: ["text-transform:capitalize;", "text-style:capitalize;", "transform:capitalize;", "text-decoration:capitalize;"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },

  // JavaScript Questions (10 questions)
  {
    id: 21,
    question: "Which of the following is the correct way to declare a variable in JavaScript?",
    options: ["var x = 10;", "variable x = 10;", "v x = 10;", "declare x = 10;"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "Which method is used to write content to the HTML document?",
    options: ["document.write()", "document.output()", "document.print()", "document.display()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Float", "Undefined"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 24,
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 25,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 26,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["const", "constant", "final", "static"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 27,
    question: "Which operator is used for strict equality comparison?",
    options: ["==", "===", "!=", "!=="],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "Which method is used to select an element by its ID?",
    options: ["getElementById()", "getElementByID()", "selectById()", "findById()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 29,
    question: "Which method is used to create a new array with filtered elements?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "Which of the following is used to handle exceptions in JavaScript?",
    options: ["try-catch", "throw-catch", "error-handle", "exception-handle"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },

  // Java Questions (10 questions)
  {
    id: 31,
    question: "Which of the following is the correct way to declare a main method in Java?",
    options: ["public static void main(String[] args)", "public void main(String[] args)", "static void main(String[] args)", "public main(String[] args)"],
    correctAnswer: 0,
    category: "Java",
    
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Which keyword is used to inherit a class in Java?",
    options: ["extends", "inherits", "implements", "super"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "Which of the following is NOT a primitive data type in Java?",
    options: ["int", "float", "String", "boolean"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "Which access modifier makes a member accessible only within the same class?",
    options: ["public", "private", "protected", "default"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which method is used to compare two strings in Java?",
    options: ["compare()", "equals()", "isEqual()", "match()"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "Which keyword is used to create an object in Java?",
    options: ["new", "create", "object", "instance"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "Which of the following is used to handle exceptions in Java?",
    options: ["try-catch", "throw-catch", "error-handle", "exception-handle"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "Which interface is implemented by all collections in Java?",
    options: ["List", "Set", "Collection", "Map"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "Which keyword is used to prevent method overriding in Java?",
    options: ["final", "static", "private", "abstract"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "Which of the following is used to create a thread in Java?",
    options: ["Thread class", "Runnable interface", "Both Thread class and Runnable interface", "ExecutorService"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },

  // Spring Boot Questions (5 questions)
  {
    id: 41,
    question: "Which annotation is used to mark a class as a Spring Boot main application class?",
    options: ["@SpringBootApplication", "@Application", "@MainClass", "@SpringMain"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 42,
    question: "Which annotation is used to create a RESTful web service controller?",
    options: ["@Controller", "@RestController", "@Service", "@Component"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "Which annotation is used to inject dependencies in Spring Boot?",
    options: ["@Inject", "@Autowired", "@Dependency", "@Resource"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 44,
    question: "Which annotation is used to map HTTP GET requests?",
    options: ["@Get", "@GetMapping", "@RequestGet", "@HttpGet"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which file is used for configuration properties in Spring Boot?",
    options: ["config.properties", "application.properties", "spring.properties", "boot.properties"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Medium"
  },

  // JDBC & REST API Questions (5 questions)
  {
    id: 46,
    question: "Which interface is used to execute SQL statements in JDBC?",
    options: ["Connection", "Statement", "ResultSet", "Driver"],
    correctAnswer: 1,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 47,
    question: "Which method is used to establish a database connection in JDBC?",
    options: ["DriverManager.getConnection()", "Connection.create()", "Database.connect()", "JDBC.getConnection()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 48,
    question: "Which HTTP method is used to create a new resource in REST API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 1,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 49,
    question: "Which HTTP status code indicates a successful GET request?",
    options: ["200", "201", "404", "500"],
    correctAnswer: 0,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 50,
    question: "Which HTTP method is used to update an existing resource in REST API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2,
    category: "REST API",
    difficulty: "Easy"
  }
];