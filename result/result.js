function renderUi() {
    const quizObj = JSON.parse(localStorage.getItem("quizSelection"))
    const userObj = JSON.parse(localStorage.getItem("user"))
    const result = JSON.parse(localStorage.getItem("result"))
    const main = document.querySelector("main")
    const userInfo = document.querySelector("#userInfo")

    const quizName = quizObj.quizName;

    userInfo.innerHTML = `<h3>Name: ${userObj.name}</h3>
          <h3>Email: ${userObj.email}</h3>
          <h3>Topic: ${quizName}</h3>`



    main.innerHTML = ""
    main.innerHTML = `<div class="correctAns">
                <h2>Correct Answers</h2>
                <h2>${result.correctAns}</h2>
            </div>
            <div class="wrongAns">
                <h2>Wrongt Answers</h2>
                <h2>${result.wrongAns}</h2>
            </div>
            <div class="total">
                <h2>Total Questions</h2>
                <h2>${result.total}</h2>
            </div>
            <div class="percentage">
                <h2>Percentage</h2>
                <h3>${result.percentage}%</h3>
            </div>
            <div class="grade">
                <h2>Grade</h2>
                <h3>${result.grade}</h3>
            </div>`
}