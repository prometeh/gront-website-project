const navMenu = require("./../../../components/navMenu");
const mainElement = require("./../../../components/mainElement");
const ulNews = require("./../../../components/news/list");
const navButtons = document.getElementById("nav-buttons");

// Here we set the part we want to edit

const newsPage = document.getElementById("main-content");

const updateNavMenu = (buttonList) => {
  navMenu.removeButtons(buttonList);
  navMenu.addButton(buttonList, "news-edit", "Edit");
  navMenu.addButton(buttonList, "dashboard-back", "Back");
};
const updateButtonEvents = () => {
  const backButton = document.getElementById("dashboard-back");

  backButton.addEventListener("click", () => {
    const dashboard = require("./..");
    dashboard.render();
  });
};
// we edit the main content we want to show

const updateContentPage = (newsPage) => {
  const back =
    "<strong>Back:</strong><br> By clicking the back button you can redirect to newspage where you can see different buttons.";
  const edit =
    "<strong>Edit:</strong><br>Here you have a list of all the existing news and you will select which one needs to be updated. News will open in a form there you can change text and media file and click save button to apply all the changes.";
  mainElement.clearContents(newsPage);
  mainElement.addParagraph(newsPage, back);
  mainElement.addParagraph(newsPage, edit);
  ulNews.addNewsList(newsPage, "radio");
};

const updateEditListEvent = () => {
  const editButton = document.getElementById("news-edit");

  editButton.addEventListener("click", () => {
    const radiobutton = document.getElementsByTagName("input");
    const selectedNews = Array.from(radiobutton)
      .filter((n) => n.checked)
      .map((n) => n.id.split(" ").at(-1));
    console.log(selectedNews[0]);
  });
};

const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateContentPage(newsPage);
  updateEditListEvent();
};

module.exports = { render };
