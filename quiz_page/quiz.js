
const quizObj = JSON.parse(localStorage.getItem("quizSelection"))
let quizQuestions = quizObj.quizQuestions;
let quizName = quizObj.quizName;
let index = 0;
let correctAns = 0;
let wrongAns = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function renderUi() {
  const questionContainer = document.getElementById("questionContainer");
  const optionList = quizQuestions[index].options;

  const userInfo = document.querySelector("#userInfo")
  const userObj = JSON.parse(localStorage.getItem("user"))
  

  userInfo.innerHTML = `<h3>Name: ${userObj.name}</h3>
          <h3>Email: ${userObj.email}</h3>
          <h3>Topic: ${quizName}</h3>`


  questionContainer.innerHTML = "";
  questionContainer.innerHTML = `<div class="question">
                    <h2>Q: ${quizQuestions[index].question}</h2>
                    <ul id = "options">
                    </ul>
                </div>

                <div class="events-buttons">
                    <div class="counter" id="counter">${index + 1} / ${quizQuestions.length
    }</div>
                    <button onclick="nextQuestionHandler ()" disabled id="nextBtn">Next</button>
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
    resultCalculator ()
    return;
  }
}

function checkAns(ele) {
  const liArr = ele.parentNode.children;
  const nextBtn = document.querySelector("#nextBtn")

  nextBtn.disabled = false

  if (ele.innerHTML === capitalizeFirstLetter(quizQuestions[index].answer)) {
    correctAns++
    ele.style.border = "1px solid #2bab53";
    ele.style.backgroundColor = " #243b2c";
  } else {
    wrongAns++
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


function resultCalculator () {
  let grade;
  const percentage = (correctAns / quizQuestions.length) * 100

  if (percentage < 60) {
    grade = "Fail"
  }else {
    grade = "Pass"
  }

  const resultObj = {
    correctAns,
    wrongAns,
    total: quizQuestions.length,
    percentage,
    grade,
  }
  
  localStorage.setItem("result", JSON.stringify(resultObj))

  window.location.replace("../result/result.html")
}



// let min = quizQuestions.length;
let min = 1;
let sec = 0;
let m_sec = 0;
const minHeading = document.querySelector("#minHeading") 
const secHeading = document.querySelector("#secHeading") 
const m_secHeading = document.querySelector("#m_secHeading") 
function timer() {
  if (min === 0 && sec === 0 && m_sec === 0) {
    stopTimer();
    window.location.replace("../result/result.html")
    return;
  }

  m_sec--;

  if (m_sec < 0) {
    if (sec > 0) {
      m_sec = 100;
    } else {
      m_sec = 0;
    }

    sec--;
  }

  if (sec < 0) {
    if (min > 0) {
      sec = 60;
    } else {
      sec = 0;
    }

    min--;

    if (min < 0) {
      min = 0;
      sec = 0;
      m_sec = 0;
      stopTimer();
    }
  }

  if (secHeading.innerHTML < 9 && secHeading.innerHTML >= 0) {
    secHeading.innerHTML = `0${sec}`;
  } else {
    secHeading.innerHTML = sec;
  }

  if (minHeading.innerHTML < 9 && minHeading.innerHTML >= 0) {
    minHeading.innerHTML = `0${min}`;
  } else {
    minHeading.innerHTML = min;
  }

  if (m_secHeading.innerHTML < 9 && m_secHeading.innerHTML >= 0) {
    m_secHeading.innerHTML = `0${m_sec}`;
  } else {
    m_secHeading.innerHTML = m_sec;
  }
}

let interval;
function startTimer() {
  interval = setInterval(timer, 10);
}
function stopTimer() {
  clearInterval(interval);
}