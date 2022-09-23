const navMenu = require("./../../../components/navMenu");
const mainElement = require("./../../../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

// Here we set the part we want to edit

const newsPage = document.getElementById("main-content");

const updateNavMenu = (buttonList) => {
  navMenu.removeButtons(buttonList);
  navMenu.addButton(buttonList, "dashboard-back", "Back");
};
const updateButtonEvents = () => {
  const backButton = document.getElementById("dashboard-back");

  backButton.addEventListener("click", () => {
    const dashboard = require("./../");
    dashboard.render();
  });
};
// we edit the main content we want to show

const updateContentPage = (newsPage) => {
  const back =
    "<strong>Back:</strong><br> By clicking the back button you can redirect to newspage where you can see different buttons.";

  mainElement.clearContents(newsPage);
  mainElement.addParagraph(newsPage, back);
};

const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateContentPage(newsPage);
};

module.exports = { render };
