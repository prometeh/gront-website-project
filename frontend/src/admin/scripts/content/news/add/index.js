const navMenu = require("./../../../components/navMenu");
const mainElement = require("./../../../components/mainElement");
const form = require("./../../../components/newsform/form");
const axios = require("axios").default;

const navButtons = document.getElementById("nav-buttons");

// then we set the parts we want to add

const contentPage = document.getElementById("main-content");

const addSaveMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-save", "Save");
  navMenu.addButton(buttonsList, "dashboard-cancel", "Cancel");
};

const addSaveButtonEvents = () => {
  const saveButton = document.getElementById("dashboard-save");
  const cancelButton = document.getElementById("dashboard-cancel");

  saveButton.addEventListener("click", () => {
    addConfirmMenu(navButtons);
    confirmButtonEvents();
  });

  cancelButton.addEventListener("click", () => {
    const cancelPage = require("./..");
    cancelPage.render();
  });
};

const addConfirmMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-yes", "Yes");
  navMenu.addButton(buttonsList, "dashboard-no", "No");
};

const confirmButtonEvents = () => {
  const yesButton = document.getElementById("dashboard-yes");
  const noButton = document.getElementById("dashboard-no");

  yesButton.addEventListener("click", async (e) => {
    const title = document.getElementById("title");
    const article = document.getElementById("article");
    const media = document.getElementById("media");

    e.preventDefault();
    try {
      await axios.post("/api/v1/news/create", {
        title: title.value,
        article: article.value,
        media: media.value,
      });

      const newsPage = require(".././index");
      newsPage.render();
    } catch (err) {
      console.log(err);
    }
  });

  noButton.addEventListener("click", () => {
    saveMenuRender();
  });
};
// we update the main content we want to show
const updateContentPage = (contentPage) => {
  mainElement.clearContents(contentPage);
  form.addNewsform(contentPage, "add-news");
};
const render = () => {
  updateContentPage(contentPage);
  saveMenuRender();
};

const saveMenuRender = () => {
  addSaveMenu(navButtons);
  addSaveButtonEvents();
};

module.exports = { render };
