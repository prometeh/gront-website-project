const axios = require("axios").default;
const navMenu = require("./../../../components/navMenu");
const mainElement = require("./../../../components/mainElement");

const navButtons = document.getElementById("nav-buttons");

const newsList = document.getElementById("main-content");

const addNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-delete", "Delete");
  navMenu.addButton(buttonsList, "dashboard-cancel", "Cancel");
};

const updateButtonEvents = () => {
  const deleteButton = document.getElementById("dashboard-delete");
  const cancelButton = document.getElementById("dashboard-cancel");

  deleteButton.addEventListener("click", () => {
    return undefined;
  });

  cancelButton.addEventListener("click", () => {
    const deleteNews = require("./..");
    deleteNews.render();
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
  updateList(newsList);
};

// this is responsible to show list of all the news
const updateList = async (to) => {
  const { data } = await axios.get("/api/v1/news/get");
  const selectedData = data.news.map(
    (n) => `${n.title}: ${n.article}: ${n.media}`
  );
  mainElement.addUnorderedList(to, selectedData);
};

const render = () => {
  addNavMenu(navButtons);
  updateButtonEvents();
  updateNewsList(newsList);
};

module.exports = { render };
