const navMenu = require("./../../../components/navMenu");
const mainElement = require("./../../../components/mainElement");
const ulNews = require("./../../../components/news/list");

const navButtons = document.getElementById("nav-buttons");

const newsList = document.getElementById("main-content");

const addNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-delete", "Delete");
  navMenu.addButton(buttonsList, "dashboard-back", "Back");
};

const updateButtonEvents = () => {
  const deleteButton = document.getElementById("dashboard-delete");
  const backButton = document.getElementById("dashboard-back");

  backButton.addEventListener("click", () => {
    const deleteNews = require("./..");
    deleteNews.render();
  });

  deleteButton.addEventListener("click", () => {
    const checkBox = document.getElementsByTagName("input");
    const checkedNews = Array.from(checkBox).filter(n => n.checked)
      .map(n => n.id.split(" ").at(-1));
    console.log(checkedNews);
  });
};

// we update the main content we want to show
const updateNewsList = (newsList) => {
  const title = "News List";
  const intro =
    "<br>If you need to delete any unwanted news from the list, just select that news checkbox and click on delete button.<br><br>";

  mainElement.clearContents(newsList);
  mainElement.addTitle(newsList, title);
  mainElement.addParagraph(newsList, intro);
  // this is responsible to show list of all the news
  ulNews.addNewsList(newsList, "checkBox", "deleteList");
};

const render = () => {
  addNavMenu(navButtons);
  updateNewsList(newsList);
  updateButtonEvents();
};

module.exports = { render };
