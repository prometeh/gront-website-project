const navMenu = require("./../../components/navMenu");
const mainElement = require("./../../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

const usersPage = document.getElementById("main-content");

const updateNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-add", "Add Users");
  navMenu.addButton(buttonsList, "dashboard-delete", "Delete Users");
};

const updateButtonEvents = () => {
  const addButton = document.getElementById("dashboard-add");
  const deleteButton = document.getElementById("dashboard-delete");

  addButton.addEventListener("click", () => {
    const usersPage = require("..");
    usersPage.render();
  });

  deleteButton.addEventListener("click", () => {
    const usersPage = require("..");
    usersPage.render();
  });
};

const updateUsersPage = (usersPage) => {
  const addUsers =
    "<strong>Add:</strong><br> By clicking this button you can add users.";
  const deleteUsers =
    "<strong>DeleteUsers:</strong><br> By clicking this button you are able to delete users";

  mainElement.clearContents(usersPage);
  mainElement.addParagraph(usersPage, addUsers);
  mainElement.addParagraph(usersPage, deleteUsers);
};
const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateUsersPage(usersPage);
};

module.exports = { render };
