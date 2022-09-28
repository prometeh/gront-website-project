const navMenu = require("../components/navMenu");
const mainElement = require("../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

const settingPage = document.getElementById("main-content");

const updateNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-users", "Users");
  navMenu.addButton(buttonsList, "dashboard-change", "Change Password");
  navMenu.addButton(buttonsList, "dashboard-back", "back");
};

const updateButtonEvents = () => {
  const usersButton = document.getElementById("dashboard-users");
  const changeButton = document.getElementById("dashboard-change");
  const backButton = document.getElementById("dashboard-back");

  usersButton.addEventListener("click", () => {
    const usersPage = require("./users");
    usersPage.render();
  });
  changeButton.addEventListener("click", () => {
    const changePage = require("./change");
    changePage.render();
  });
  backButton.addEventListener("click", () => {
    const settingPage = require("..");
    settingPage.render();
  });
};

const updateSettingPage = (settingPage) => {
  const users =
    "<strong>Users:</strong><br> By clicking this button users can login to adminpanel.";
  const changePassword =
    "<strong>ChangePassword:</strong><br> By clicking this button users can confirm the password.";
  const back =
    "<strong>back:</strong><br> By clicking Back button you can go back to setting page.";

  mainElement.clearContents(settingPage);
  mainElement.addParagraph(settingPage, users);
  mainElement.addParagraph(settingPage, changePassword);
  mainElement.addParagraph(settingPage, back);
};
const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateSettingPage(settingPage);
};

module.exports = { render };
