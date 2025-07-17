import { Question } from '../types';

export const questions: Question[] = [
  // HTML Questions (25 questions)
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
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<section>", "<footer>", "<end>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 4,
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<header>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 5,
    question: "Which attribute is used to specify the URL of the page the link goes to?",
    options: ["link", "src", "href", "url"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "Which HTML element is used to define important text?",
    options: ["<important>", "<strong>", "<b>", "<i>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 7,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 8,
    question: "Which input type is used to create a password field?",
    options: ["password", "text", "hidden", "secure"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 9,
    question: "What is the correct HTML for creating a checkbox?",
    options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 10,
    question: "Which HTML element is used to define a table?",
    options: ["<table>", "<tab>", "<tbl>", "<t>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 11,
    question: "What is the correct HTML for making a drop-down list?",
    options: ["<input type='dropdown'>", "<select>", "<list>", "<dropdown>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 12,
    question: "Which HTML element is used to define navigation links?",
    options: ["<navigation>", "<nav>", "<navigate>", "<menu>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 13,
    question: "What is the correct HTML for making a text area?",
    options: ["<input type='textbox'>", "<input type='textarea'>", "<textarea>", "<textbox>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "styles", "font"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 15,
    question: "What is the correct HTML element for playing video files?",
    options: ["<movie>", "<video>", "<media>", "<film>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 16,
    question: "Which HTML element is used to define a section in a document?",
    options: ["<section>", "<div>", "<article>", "<segment>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 17,
    question: "What is the correct HTML for inserting an image?",
    options: ["<img href='image.gif'>", "<image src='image.gif'>", "<img src='image.gif'>", "<picture src='image.gif'>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 18,
    question: "Which HTML element is used to display a scalar value within a range?",
    options: ["<gauge>", "<meter>", "<measure>", "<range>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 19,
    question: "What is the correct HTML for making a numbered list?",
    options: ["<ul>", "<ol>", "<list>", "<nl>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 20,
    question: "Which HTML element is used to define metadata about an HTML document?",
    options: ["<meta>", "<metadata>", "<head>", "<info>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 21,
    question: "What is the correct HTML for creating a hyperlink?",
    options: ["<a url='http://www.example.com'>", "<a href='http://www.example.com'>", "<a link='http://www.example.com'>", "<a>http://www.example.com</a>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "Which HTML element is used to define an article?",
    options: ["<article>", "<section>", "<div>", "<content>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 23,
    question: "What is the correct HTML for adding a background color?",
    options: ["<background>yellow</background>", "<body style='background-color:yellow;'>", "<body bg='yellow'>", "<background-color=yellow>"],
    correctAnswer: 1,
    category: "HTML",
    difficulty: "Medium"
  },
  {
    id: 24,
    question: "Which HTML element is used to define emphasized text?",
    options: ["<italic>", "<i>", "<em>", "<emphasis>"],
    correctAnswer: 2,
    category: "HTML",
    difficulty: "Easy"
  },
  {
    id: 25,
    question: "What is the correct HTML for creating a form?",
    options: ["<form>", "<input>", "<textbox>", "<textarea>"],
    correctAnswer: 0,
    category: "HTML",
    difficulty: "Easy"
  },

  // CSS Questions (25 questions)
  {
    id: 26,
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 27,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "styles", "font"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 28,
    question: "Which is the correct CSS syntax?",
    options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 29,
    question: "How do you insert a comment in a CSS file?",
    options: ["// this is a comment", "/* this is a comment */", "# this is a comment", "<!-- this is a comment -->"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 30,
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 31,
    question: "Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "fgcolor", "font-color"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 32,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: 2,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 33,
    question: "What is the correct CSS syntax for making all the <p> elements bold?",
    options: ["p {text-size:bold;}", "p {font-weight:bold;}", "<p style='font-size:bold;'>", "p {font-size:bold;}"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 34,
    question: "How do you display hyperlinks without an underline?",
    options: ["a {text-decoration:none;}", "a {underline:none;}", "a {decoration:no-underline;}", "a {text-decoration:no-underline;}"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 36,
    question: "How do you make each word in a text start with a capital letter?",
    options: ["text-transform:capitalize;", "text-style:capitalize;", "transform:capitalize;", "text-decoration:capitalize;"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 37,
    question: "Which property is used to change the left margin of an element?",
    options: ["margin-left", "indent", "margin", "left-margin"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 38,
    question: "What is the correct CSS syntax to make a border around an element?",
    options: ["border {1px solid black;}", "border: 1px solid black;", "border = 1px solid black;", "border-width: 1px solid black;"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 39,
    question: "Which CSS property is used to create space between the element's border and inner content?",
    options: ["margin", "padding", "border-spacing", "spacing"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 40,
    question: "Which CSS property is used to create space around elements?",
    options: ["padding", "margin", "border", "spacing"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 41,
    question: "Which CSS property is used to change the style of a list marker?",
    options: ["list-style-type", "list-type", "list-style", "list-marker"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 42,
    question: "How do you select an element with id 'demo'?",
    options: [".demo", "#demo", "demo", "*demo"],
    correctAnswer: 1,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 43,
    question: "How do you select elements with class name 'test'?",
    options: [".test", "#test", "test", "*test"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 44,
    question: "Which CSS property is used to control the layout of multiple columns?",
    options: ["column-count", "columns", "column-width", "All of the above"],
    correctAnswer: 3,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "font-style", "text-decoration", "font-bold"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 46,
    question: "Which CSS property is used to align text?",
    options: ["text-align", "align", "text-alignment", "alignment"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Easy"
  },
  {
    id: 47,
    question: "Which CSS property is used to set the opacity of an element?",
    options: ["opacity", "transparency", "alpha", "visibility"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 48,
    question: "Which CSS property is used to create rounded corners?",
    options: ["border-radius", "corner-radius", "rounded", "border-corner"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 49,
    question: "Which CSS property is used to specify the stacking order of elements?",
    options: ["z-index", "stack-order", "layer", "position"],
    correctAnswer: 0,
    category: "CSS",
    difficulty: "Medium"
  },
  {
    id: 50,
    question: "Which CSS property is used to hide an element?",
    options: ["display: none;", "visibility: hidden;", "opacity: 0;", "All of the above"],
    correctAnswer: 3,
    category: "CSS",
    difficulty: "Medium"
  }
];