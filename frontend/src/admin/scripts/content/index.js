const navMenu = require("./../components/navMenu");
const navButtons = document.getElementById("nav-buttons");

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
    return undefined;
  });

  homeButton.addEventListener("click", () => {
    // TODO: add my functionality
    return undefined;
  });
};

const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
};

module.exports = { render };
