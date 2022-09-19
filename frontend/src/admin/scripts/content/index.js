const navMenu = require("./../components/navMenu");
const mainElement = require("./../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

// then we set the parts we want to update

const contentPage = document.getElementById("main-content");

const updateNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-news", "News");
  navMenu.addButton(buttonsList, "dashboard-home", "Home Page");
  navMenu.addButton(buttonsList, "dashboard-back", "Back");
};

const updateButtonEvents = () => {
  const newsButton = document.getElementById("dashboard-news");
  const homeButton = document.getElementById("dashboard-home");
  const backButton = document.getElementById("dashboard-back");

  backButton.addEventListener("click", () => {
    const dashboard = require("./..");
    dashboard.render();
  });

  newsButton.addEventListener("click", () => {
    // TODO: add my functionality
    const news = require("./news");
    news.render();
  });

  homeButton.addEventListener("click", () => {
    // TODO: add my functionality
    return undefined;
  });
};
// we update the main content we want to show
const updateContentPage = (contentPage) => {
  const titleContent = "Managing content data";
  const intro = "<br>As an admin user with access to content you have three functional buttons News, Home Page and Back on the dashboards view.";
  const news =
    "<strong>News:</strong><br>By clicking the News button you will have the option to add news, updating existing news or deleting any unwanted news.";
  const homepage =
    "<strong>Home Page:</strong><br> By clicking on this button, you can change main header image.";
  const back =
    "<strong>Back:</strong><br>That will redirect you to the previous page.";

  mainElement.clearContents(contentPage);
  mainElement.addTitle(contentPage, titleContent);
  mainElement.addParagraph(contentPage, intro);
  mainElement.addParagraph(contentPage, news);
  mainElement.addParagraph(contentPage, homepage);
  mainElement.addParagraph(contentPage, back);
};

const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateContentPage(contentPage);
};

module.exports = { render };
