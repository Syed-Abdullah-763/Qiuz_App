const htmlQuizQuestions = [
  {
    id: 2,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: {
      a: "<link>",
      b: "<a>",
      c: "<href>",
      d: "<hyperlink>",
    },
    answer: "<a>",
  },
  {
    id: 3,
    question: "What is the correct HTML element for inserting a line break?",
    options: {
      a: "<br>",
      b: "<break>",
      c: "<lb>",
      d: "<newline>",
    },
    answer: "<br>",
  },
  {
    id: 4,
    question:
      "Which attribute is used to provide an alternate text for an image?",
    options: {
      a: "title",
      b: "src",
      c: "alt",
      d: "description",
    },
    answer: "alt",
  },
  {
    id: 5,
    question: "What does the <head> tag contain?",
    options: {
      a: "Page content",
      b: "Metadata/information about the document",
      c: "Footer information",
      d: "Header content",
    },
    answer: "Metadata/information about the document",
  },
  {
    id: 6,
    question: "Which HTML tag is used to define an unordered list?",
    options: {
      a: "<ul>",
      b: "<ol>",
      c: "<li>",
      d: "<list>",
    },
    answer: "<ul>",
  },
];

const cssQuizQuestions = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: {
      a: "Computer Style Sheets",
      b: "Cascading Style Sheets",
      c: "Creative Style Sheets",
      d: "Colorful Style Sheets",
    },
    answer: "Cascading Style Sheets",
  },
  {
    id: 2,
    question: "Which property is used to change the text color of an element?",
    options: {
      a: "font-color",
      b: "color",
      c: "text-color",
      d: "foreground",
    },
    answer: "color",
  },
  {
    id: 3,
    question: "Which CSS property controls the text size?",
    options: {
      a: "font-style",
      b: "text-size",
      c: "font-size",
      d: "text-style",
    },
    answer: "font-size",
  },
  {
    id: 4,
    question: "How do you select an element with id 'header' in CSS?",
    options: {
      a: ".header",
      b: "#header",
      c: "header",
      d: "*header",
    },
    answer: "#header",
  },
  {
    id: 5,
    question:
      "Which property is used to set the background color of an element?",
    options: {
      a: "bgcolor",
      b: "color",
      c: "background-color",
      d: "background",
    },
    answer: "background-color",
  },
];

const jsQuizQuestions = [
  {
    id: 1,
    question:
      "What is the correct syntax to output 'Hello World' in JavaScript?",
    options: {
      a: "echo 'Hello World';",
      b: "print('Hello World');",
      c: "console.log('Hello World');",
      d: "printf('Hello World');",
    },
    answer: "console.log('Hello World');",
  },
  {
    id: 2,
    question: "Which of the following is a JavaScript data type?",
    options: {
      a: "float",
      b: "string",
      c: "char",
      d: "decimal",
    },
    answer: "string",
  },
  {
    id: 3,
    question: "How do you declare a JavaScript variable?",
    options: {
      a: "v myVar;",
      b: "variable myVar;",
      c: "var myVar;",
      d: "int myVar;",
    },
    answer: "var myVar;",
  },
  {
    id: 4,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: {
      a: "#",
      b: "//",
      c: "<!--",
      d: "/*",
    },
    answer: "//",
  },
  {
    id: 5,
    question:
      "Which method can be used to convert a string to an integer in JavaScript?",
    options: {
      a: "parseInt()",
      b: "int()",
      c: "toInteger()",
      d: "Number.toInt()",
    },
    answer: "parseInt()",
  },
];

let quizQuestions = jsQuizQuestions;
let index = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function selection(userSelection) {
  if (userSelection === "html") {
    quizQuestions = htmlQuizQuestions;
  } else if (userSelection === "css") {
    quizQuestions = cssQuizQuestions;
  } else if (userSelection === "javascript") {
    quizQuestions = jsQuizQuestions;
  }

  renderUi();
}

function renderUi() {
  const questionContainer = document.getElementById("questionContainer");
  const optionList = quizQuestions[index].options;

  questionContainer.innerHTML = "";
  questionContainer.innerHTML = `<div class="question">
                    <h2>Q: ${quizQuestions[index].question}</h2>
                    <ul id = "options">
                    </ul>
                </div>

                <div class="events-buttons">
                    <div class="counter" id="counter">${index + 1} / ${
    quizQuestions.length
  }</div>
                    <button onclick="nextQuestionHandler ()">Next</button>
                </div>

            </div>`;

  const options = document.getElementById("options");
  options.innerHTML = "";
  for (let key in optionList) {
    const escapedOption = optionList[key]
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    options.innerHTML += `<li onclick = "checkAns(this)">${capitalizeFirstLetter(
      escapedOption
    )}</li>`;
  }
}

function nextQuestionHandler() {
  if (index < quizQuestions.length - 1) {
    index++;
    renderUi();
  } else {
    return;
  }
}

function checkAns(ele) {
  const liArr = ele.parentNode.children;

  if (ele.innerHTML === capitalizeFirstLetter(quizQuestions[index].answer)) {
    ele.style.border = "1px solid #2bab53";
    ele.style.backgroundColor = " #243b2c";
  } else {
    ele.style.backgroundColor = "rgb(52, 31, 31)";
    ele.style.border = "1px solid rgb(192, 7, 7)";

    for (let i = 0; i < liArr.length; i++) {
      if (
        liArr[i].innerHTML == capitalizeFirstLetter(quizQuestions[index].answer)
      ) {
        liArr[i].style.border = "1px solid #2bab53";
        liArr[i].style.backgroundColor = " #243b2c";
        break;
      }
    }
  }

  for (let i = 0; i < liArr.length; i++) {
    liArr[i].style.pointerEvents = "none";
  }
}
