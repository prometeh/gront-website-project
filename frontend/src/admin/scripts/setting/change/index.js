const navMenu = require("./../../components/navMenu");
const mainElement = require("./../../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

const changePage = document.getElementById("main-content");

const updateNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-save", "Save");
  navMenu.addButton(buttonsList, "dashboard-back", "Back");
};

const updateButtonEvents = () => {
  const saveButton = document.getElementById("dashboard-save");
  const backButton = document.getElementById("dashboard-back");

  saveButton.addEventListener("click", () => {
    const changePage = require("..");
    changePage.render();
  });

  backButton.addEventListener("click", () => {
    const changePasswordPage = require("..");
    changePasswordPage.render();
  });
};

const updateChangePage = (changePage) => {
  const save =
    "<strong></strong><br> ";
  const back =
    "<strong></strong><br> ";

  mainElement.clearContents(changePage);
  mainElement.addParagraph(changePage, save);
  mainElement.addParagraph(changePage, back);
};
const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateChangePage(changePage);
};

module.exports = { render };
