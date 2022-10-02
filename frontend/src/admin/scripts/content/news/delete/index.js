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
    const newsPage = require("./..");
    newsPage.render();
  });

  deleteButton.addEventListener("click", () => {
    const checkBox = document.getElementsByTagName("input");
    const checkedNews = Array.from(checkBox)
      .filter((n) => n.checked)
      .map((n) => n.id.split(" ").at(-1));
    
    if (checkedNews.length > 0) {
      const confirmationpage = require("./confirmation");
      confirmationpage.render(checkedNews);
    } else {
      const deletePage = require("./.");
      deletePage.render();
    }
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
