const axios = require("axios").default;
const navMenu = require("./../../components/navMenu");
const mainElement = require("./../../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

// then we set the parts we want to update

const newsPage = document.getElementById("main-content");

const updateNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-add", "Add");
  navMenu.addButton(buttonsList, "dashboard-edit", "Edit");
  navMenu.addButton(buttonsList, "dashboard-delete", "Delete");
  navMenu.addButton(buttonsList, "dashboard-back", "Back");
};

const updateButtonEvents = () => {
  const addButton = document.getElementById("dashboard-add");
  const editButton = document.getElementById("dashboard-edit");
  const deleteButton = document.getElementById("dashboard-delete");
  const backButton = document.getElementById("dashboard-back");

  backButton.addEventListener("click", () => {
    const dashboard = require("./..");
    dashboard.render();
  });

  addButton.addEventListener("click", () => {
    // TODO: add my functionality
    return undefined;
  });

  editButton.addEventListener("click", () => {
    // TODO: add my functionality
    return undefined;
  });

  deleteButton.addEventListener("click", () => {
    // TODO: add my functionality
    return undefined;
  });
};
// we update the main content we want to show
const updateContentPage = (newsPage) => {
  const title = "News";
  const add =
    "<br><strong>Add:</strong><br>By clicking the add button you will be redirected to a form, where you have the option to add title and description of your news and these two fields are required. There is an other field media and that is optional but if you want to add any image and video with the news so you can upload file here. ";
  const edit =
    "<strong>Edit:</strong><br>Here you have a list of all the existing news and you will select which one needs to be updated. News will open in a form there you can change text and media file and click save button to apply all the changes.";
  const deleteNews =
    "<strong>Delete:</strong><br>By clicking the delete button there you have a complete list of news and each news has a check box. If you want to delete any news from a list, you need to select that news check box and press delete button then reconfirm by Yes or No. After you click Yes, news will be removed from the website.";

  mainElement.clearContents(newsPage);
  mainElement.addTitle(newsPage, title);
  mainElement.addParagraph(newsPage, add);
  mainElement.addParagraph(newsPage, edit);
  mainElement.addParagraph(newsPage, deleteNews);
  updateList(newsPage);
};

// this is responsible to show list of all the news
const updateList = async (to) => {
  const { data } = await axios.get("/api/v1/news/get", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const selectedData = data.news.map((n) => `${n.title}: ${n.article}: ${n.media}`);
  mainElement.addUnorderedList(to, selectedData);
};

// this function is the only one we export
// this is responsible for rendering each page
// and sub menu
const render = () => {
  updateNavMenu(navButtons);
  updateButtonEvents();
  updateContentPage(newsPage);
};

module.exports = { render };
