const navMenu = require("./../../../components/navMenu");
const mainElement= require("./../../../components/mainElement");
const form = require("./../../../components/newsform/form");
const axios = require("axios").default;



const navButtons = document.getElementById("nav-buttons");

// then we set the parts we want to add

const contentPage = document.getElementById("main-content");


const addNavMenu = (buttonsList) => {
  navMenu.removeButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-save", "Save");
  navMenu.addButton(buttonsList, "dashboard-cancel", "Cancel"); 

};

const addButtonEvents = () => {
  
  const saveButton = document.getElementById("dashboard-save");
  const cancelButton = document.getElementById("dashboard-cancel");
  
  saveButton.addEventListener("click", async (e) => {
    const title=document.getElementById("title");
    const article=document.getElementById("article");
    const media=document.getElementById("media");
    let jwt = "";
    // TODO: add my functionality 
    e.preventDefault();
    try {
      const response = 
      await axios.post(
        "/api/v1/news/create",
        {
          title: title.value,
          article: article.value,
          media: media.value
        },
        { withCredentials: true ,
          headers: {
            authorization : "Bearer "+ localStorage.getItem("token")
          }
        }
      );
      console.log(response);
    } catch (err) {
      
        console.log(err);
      
    }
  });

  cancelButton.addEventListener("click", () => {
    const dashboard = require("./..");
    dashboard.render();
  });
};
// we update the main content we want to show
const updateContentPage = (contentPage) => {
  mainElement.clearContents(contentPage);
  form.addNewsform(contentPage,"add-news");
};
const render = () => {
  updateContentPage(contentPage);
  addNavMenu(navButtons);
  addButtonEvents();
  
};

module.exports = { render };
