// first we mention what we need
const navMenu = require("./components/navMenu");
const mainElement = require("./components/mainElement");

// we use the actions for logout only here as it's same all over
const navLogout = document.getElementById("dashboard-logout");

navLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
});

// then we set the parts we want to update
const navButtons = document.getElementById("nav-buttons");
const mainContent = document.getElementById("main-content");

// we update the buttons we want to show
const updateNavMenu = (buttonList) => {
  navMenu.removeButtons(buttonList);
  navMenu.addButton(buttonList, "dashboard-setting", "Setting");
  navMenu.addButton(buttonList, "dashboard-content", "Content");
};

// we add the logic & behaviour to each button
const updateButtonEvents = () => {
  const dashboardContent = document.getElementById("dashboard-content");
  const dashboardSetting = document.getElementById("dashboard-setting");

  dashboardContent.addEventListener("click", () => {
    const content = require("./content"); // we insert the codes *when* we need

    content.render();
  });

  dashboardSetting.addEventListener("click", () => {
    const setting = require("./setting"); // we insert the codes *when* we need

    setting.render();
  });
};

// we update the main content we want to show
const updateMainContent = (mainContent) => {
  const titleContent = "Welcome to Grönt dashboard";
  const intro = "<br>This is your main page, here you can select:";
  const logout =
    "<strong>Log out:</strong><br> By clicking the icon on the top right corner of your screen, you will be logged out and redirected to home page of the website.";
  const setting =
    "<strong>Setting:</strong><br> By clicking on this button, you can access the setting page for your account (select login method, add email & change password).";
  const content =
    "<strong>Content:</strong><br> Here you can select home page or news to administrate the respective pages in the web site.";

  mainElement.clearContents(mainContent);
  mainElement.addTitle(mainContent, titleContent);
  mainElement.addParagraph(mainContent, intro);
  mainElement.addParagraph(mainContent, logout);
  mainElement.addParagraph(mainContent, setting);
  mainElement.addParagraph(mainContent, content);
};

// this function is the only one we export
// this is responsible for rendering each page
// and sub menu
const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateMainContent(mainContent);
};

// this is not required on lower hierarchy
// because we render when we click the respctive button
render();

module.exports = { render };
