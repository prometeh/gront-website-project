const axios = require("axios").default;
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("err-msg");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    await axios.post(
      "/api/v1/admin/login",
      {
        username: username.value,
        password: password.value,
      },
      { withCredentials: true }
    );

    location.href = "/admin/dashboard.html";
  } catch (err) {
    if (err.response) {
      errorMessage.innerText = err.response.data.msg;
    } else {
      console.log(err);
    }
  }
});

username.addEventListener("keydown", () => {
  errorMessage.textContent = "";
});

password.addEventListener("keydown", () => {
  errorMessage.textContent = "";
});
