const axios = require("axios").default;
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMessage = document.getElementById("err-msg");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/admin/login",
      {
        username: username.value,
        password: password.value,
      }
    );
    localStorage.setItem("token", data.token);
  } catch (err) {
    if (err.response) {
      errorMessage.innerText = err.response.data.msg;
    } else {
      console.log(err);
    }
    localStorage.removeItem("token");
  }

  const token = localStorage.getItem("token");

  try {
    const { data } = await axios.get(
      "http://localhost:3000/admin/dashboard.html",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    document.write(data);
  } catch (err) {
    console.log(err);
    localStorage.removeItem("token");
  }
});

username.addEventListener("keydown", () => {
  errorMessage.textContent = "";
});

password.addEventListener("keydown", () => {
  errorMessage.textContent = "";
});
