const navMenu = require("./../../../../components/navMenu");
const mainElement = require("./../../../../components/mainElement");
const ulNews = require("./../../../../components/news/list");
const axios = require("axios").default;

const navButtons = document.getElementById("nav-buttons");
const newsList = document.getElementById("main-content");

const addNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-yes", "Yes");
  navMenu.addButton(buttonsList, "dashboard-no", "No");
};

const updateButtonEvents = (newsArray) => {
  const yesButton = document.getElementById("dashboard-yes");
  const noButton = document.getElementById("dashboard-no");

  noButton.addEventListener("click", () => {
    const deletePage = require("./..");
    deletePage.render();
  });

  yesButton.addEventListener("click", async() => {
    await newsArray.forEach(async (id) => {
      try {
        await axios.delete("/api/v1/news/delete/" + id);
      } catch (err) {
        console.log(err);
      }
        
    });
    const deletePage = require("./..");
    deletePage.render();
  });
};

// we update the main content we want to show
const updateNewsList = (newsList, newsArray) => {
  const title = "Selected News List";
  const intro = "<br>Are you sure do you want to delete news?<br><br>";

  mainElement.clearContents(newsList);
  mainElement.addTitle(newsList, title);
  mainElement.addParagraph(newsList, intro);
  // this is responsible to show list of all the news
  newsArray.forEach((id) => {
    ulNews.addNewsList(newsList, "normal", "deleteList", "", id);
  });
};

const render = (newsArray = undefined) => {
  addNavMenu(navButtons);
  updateNewsList(newsList, newsArray);
  updateButtonEvents(newsArray);
};

module.exports = { render };
