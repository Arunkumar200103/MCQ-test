import { Question } from '../types';

export const alternativeQuestions: Question[] = [
  // HTML Questions (10 questions)
  {
    id: 1,
    question: "Which HTML element is used to define the document title?",
    options: ["<title>", "<header>", "<head>", "<meta>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which HTML attribute is used to provide alternative text for images?",
    options: ["title", "alt", "description", "text"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "Which HTML element is used to create a dropdown list?",
    options: ["<dropdown>", "<list>", "<select>", "<option>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "Which HTML element is used to create an ordered list?",
    options: ["<ol>", "<ul>", "<list>", "<order>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "Which HTML attribute is used to specify an image source?",
    options: ["href", "source", "src", "image"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "Which HTML element is used to group table rows for styling purposes?",
    options: ["<tbody>", "<tgroup>", "<rowgroup>", "<section>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "Which HTML attribute is used to make form fields required?",
    options: ["mandatory", "required", "validate", "necessary"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "Which HTML element is used to define a description list?",
    options: ["<dl>", "<desc>", "<definition>", "<dlist>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 9,
    question: "Which HTML element is used to embed external content?",
    options: ["<external>", "<embed>", "<include>", "<object>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "Which HTML element defines navigation links?",
    options: ["<navigation>", "<nav>", "<menu>", "<links>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },

  // CSS Questions (10 questions)
  {
    id: 11,
    question: "Which CSS property is used to change text color?",
    options: ["color", "text-color", "font-color", "foreground"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 12,
    question: "Which CSS property is used to set background color?",
    options: ["bg-color", "background-color", "back-color", "color-background"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "How do you select elements by class name in CSS?",
    options: ["#classname", ".classname", "@classname", "classname"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "Which CSS property is used to set the width of an element?",
    options: ["width", "size", "length", "wide"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "Which CSS property is used to make text italic?",
    options: ["font-style", "text-style", "font-italic", "italic"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 16,
    question: "Which CSS property is used to hide an element?",
    options: ["hide", "display", "visible", "show"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 17,
    question: "Which CSS property is used to set the maximum height of an element?",
    options: ["max-height", "maximum-height", "height-max", "largest-height"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "Which CSS property is used for smooth transitions between states?",
    options: ["animation", "transition", "transform", "smooth"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "Which CSS property is used to create grid layouts?",
    options: ["grid", "layout", "flex", "table"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "Which CSS pseudo-class is used to style the last child element?",
    options: [":last", ":last-child", ":final", ":end"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Medium"
  },

  // JavaScript Questions (10 questions)
  {
    id: 21,
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "const", "variable"],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "Which method is used to add an element to the end of an array?",
    options: ["add()", "append()", "push()", "insert()"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 23,
    question: "Which operator is used for strict equality comparison?",
    options: ["==", "===", "=", "!="],
    correctAnswer: 1,
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
    question: "Which method is used to get the length of a string?",
    options: [".length", ".size", ".count", ".len"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Easy"
  },
  {
    id: 26,
    question: "Which method is used to parse a JSON string into an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 27,
    question: "Which keyword is used to exit from a loop completely?",
    options: ["exit", "stop", "break", "end"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "Which method is used to filter array elements based on a condition?",
    options: ["map()", "filter()", "reduce()", "find()"],
    correctAnswer: 1,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 29,
    question: "Which method is used to execute a function for each array element?",
    options: ["forEach()", "each()", "iterate()", "loop()"],
    correctAnswer: 0,
    category: "JavaScript",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "Which method is used to convert an array to a string?",
    options: ["toString()", "stringify()", "join()", "convert()"],
    correctAnswer: 2,
    category: "JavaScript",
    difficulty: "Medium"
  },

  // Java Questions (10 questions)
  {
    id: 31,
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Class", "define", "create"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Which keyword is used to implement an interface?",
    options: ["extends", "implements", "uses", "interface"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "Which of the following is a primitive data type in Java?",
    options: ["String", "Integer", "int", "Array"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "Which access modifier restricts access to the same class only?",
    options: ["private", "protected", "public", "default"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which method is used to get the length of an array?",
    options: ["length()", "size()", "length", "count()"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "Which keyword is used to refer to the current object instance?",
    options: ["self", "this", "current", "me"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "Which exception is thrown when accessing an invalid array index?",
    options: ["IndexOutOfBoundsException", "ArrayIndexOutOfBoundsException", "InvalidIndexException", "BoundsException"],
    correctAnswer: 1,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "Which collection does not allow duplicate elements?",
    options: ["List", "ArrayList", "Set", "Vector"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 39,
    question: "Which keyword prevents a method from being overridden?",
    options: ["final", "static", "abstract", "private"],
    correctAnswer: 0,
    category: "Java",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "Which collection maintains elements in sorted order?",
    options: ["HashSet", "LinkedHashSet", "TreeSet", "ArrayList"],
    correctAnswer: 2,
    category: "Java",
    difficulty: "Medium"
  },

  // Spring Boot Questions (5 questions)
  {
    id: 41,
    question: "Which annotation is used to mark a class as a REST controller?",
    options: ["@Controller", "@RestController", "@WebController", "@ApiController"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 42,
    question: "Which annotation is used to handle HTTP GET requests?",
    options: ["@Get", "@GetMapping", "@RequestGet", "@HttpGet"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "Which annotation is used to inject dependencies automatically?",
    options: ["@Inject", "@Autowired", "@Dependency", "@Wire"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 44,
    question: "Which annotation is used to bind request parameters?",
    options: ["@PathVariable", "@RequestParam", "@Param", "@QueryParam"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which annotation is used to mark a class as a repository component?",
    options: ["@Repository", "@Data", "@Entity", "@Component"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },

  // JDBC & REST API Questions (5 questions)
  {
    id: 46,
    question: "Which method is used to execute SELECT statements in JDBC?",
    options: ["executeQuery()", "executeUpdate()", "execute()", "query()"],
    correctAnswer: 0,
    category: "JDBC",
    difficulty: "Easy"
  },
  {
    id: 47,
    question: "Which interface is used to execute SQL statements in JDBC?",
    options: ["Connection", "Statement", "ResultSet", "Driver"],
    correctAnswer: 1,
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
    question: "Which HTTP status code indicates 'Internal Server Error'?",
    options: ["400", "404", "500", "503"],
    correctAnswer: 2,
    category: "REST API",
    difficulty: "Easy"
  },
  {
    id: 50,
    question: "Which HTTP header is used to specify acceptable response content types?",
    options: ["Accept", "Content-Type", "Accept-Encoding", "Content-Accept"],
    correctAnswer: 0,
    category: "REST API",
    difficulty: "Easy"
  }
];