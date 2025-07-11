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

  // Spring Boot Questions (25 questions)
  {
    id: 26,
    question: "What is Spring Boot?",
    options: ["A lightweight framework", "An auto-configuration framework", "A microservices framework", "All of the above"],
    correctAnswer: 3,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 27,
    question: "Which annotation is used to mark a class as a Spring Boot application?",
    options: ["@SpringBootApplication", "@Application", "@SpringApp", "@BootApplication"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 28,
    question: "What is the default port for Spring Boot applications?",
    options: ["8080", "8000", "3000", "9000"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 29,
    question: "Which annotation is used to inject dependencies in Spring Boot?",
    options: ["@Inject", "@Autowired", "@Dependency", "@Wire"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 30,
    question: "What is the use of @RestController annotation?",
    options: ["To mark a class as controller", "To return JSON response", "To handle REST requests", "All of the above"],
    correctAnswer: 3,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 31,
    question: "Which file is used for configuration in Spring Boot?",
    options: ["application.properties", "config.properties", "spring.properties", "boot.properties"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "What is Spring Boot Actuator?",
    options: ["A monitoring tool", "A security tool", "A testing tool", "A deployment tool"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 33,
    question: "Which annotation is used to map HTTP GET requests?",
    options: ["@GetMapping", "@RequestMapping", "@Get", "@HttpGet"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "What is the purpose of @Entity annotation?",
    options: ["To mark a class as JPA entity", "To mark a class as service", "To mark a class as controller", "To mark a class as component"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which annotation is used to handle exceptions globally?",
    options: ["@ExceptionHandler", "@ControllerAdvice", "@GlobalExceptionHandler", "@ExceptionController"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 36,
    question: "What is the use of @Service annotation?",
    options: ["To mark business logic layer", "To mark data access layer", "To mark presentation layer", "To mark configuration layer"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 37,
    question: "Which annotation is used to validate request body?",
    options: ["@Valid", "@Validated", "@Check", "@Verify"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "What is Spring Boot Starter?",
    options: ["A dependency management tool", "A project template", "A configuration tool", "All of the above"],
    correctAnswer: 3,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 39,
    question: "Which annotation is used to schedule tasks in Spring Boot?",
    options: ["@Scheduled", "@Schedule", "@Task", "@Timer"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "What is the use of @PathVariable annotation?",
    options: ["To extract values from URL", "To extract values from request body", "To extract values from headers", "To extract values from cookies"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 41,
    question: "Which annotation is used to enable JPA repositories?",
    options: ["@EnableJpaRepositories", "@EnableRepositories", "@JpaRepositories", "@RepositoryConfig"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 42,
    question: "What is the use of @RequestParam annotation?",
    options: ["To extract query parameters", "To extract path parameters", "To extract request body", "To extract headers"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "Which annotation is used to enable caching in Spring Boot?",
    options: ["@EnableCaching", "@Cache", "@Cacheable", "@CacheConfig"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 44,
    question: "What is the use of @Profile annotation?",
    options: ["To define environment-specific beans", "To define user profiles", "To define application profiles", "To define security profiles"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which annotation is used to enable security in Spring Boot?",
    options: ["@EnableWebSecurity", "@EnableSecurity", "@Security", "@WebSecurity"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 46,
    question: "What is the use of @Transactional annotation?",
    options: ["To manage database transactions", "To manage HTTP transactions", "To manage file transactions", "To manage network transactions"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 47,
    question: "Which annotation is used to create a custom auto-configuration?",
    options: ["@AutoConfiguration", "@EnableAutoConfiguration", "@Configuration", "@CustomConfiguration"],
    correctAnswer: 1,
    category: "Spring Boot",
    difficulty: "Hard"
  },
  {
    id: 48,
    question: "What is the use of @ConditionalOnProperty annotation?",
    options: ["To conditionally load beans based on properties", "To validate properties", "To encrypt properties", "To load properties"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Hard"
  },
  {
    id: 49,
    question: "Which annotation is used to enable async processing?",
    options: ["@EnableAsync", "@Async", "@EnableAsyncProcessing", "@AsyncConfig"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  },
  {
    id: 50,
    question: "What is the use of @ConfigurationProperties annotation?",
    options: ["To bind external configuration to Java objects", "To create configuration files", "To validate configuration", "To encrypt configuration"],
    correctAnswer: 0,
    category: "Spring Boot",
    difficulty: "Medium"
  }
];