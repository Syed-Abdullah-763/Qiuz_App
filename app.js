function login() {
  const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
  if (name !== "" && email !== "") {

    const userObj = {
      name,
      email,
    }

    localStorage.setItem("user", JSON.stringify(userObj))

    window.location.replace("./userDashBoard/dashboard.html")
  }
  else {
    return
  }
}
