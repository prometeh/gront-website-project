const navMenu = require("./../components/navMenu");
const mainElement = require("./../components/mainElement");
const navButtons = document.getElementById("nav-buttons");

// then we set the parts we want to add

const contentPage = document.getElementById("main-content");


const addNavMenu = (buttonsList) => {
  navMenu.addButtons(buttonsList);
  navMenu.addButton(buttonsList, "dashboard-save", "Save");
  navMenu.addButton(buttonsList, "dashboard-cancel", "Cancel"); 

};

const addButtonEvents = () => {
  
  const saveButton = document.getElementById("dashboard-save");
  const cancelButton = document.getElementById("dashboard-cancel");
  
  saveButton.addEventListener("click", () => {
    // TODO: add my functionality 
    return undefined;
  });

  cancelButton.addEventListener("click", () => {
    // TODO: add my functionality
    return undefined;
  });
};
// we update the main content we want to show
const updateContentPage = (contentPage) => {
  const save =
                    "<strong>Save:</strong><br> By clicking on this button, you can save the added news.";
  const cancel =
                    "<strong>Cancel:</strong><br>By clicking on this button, you can cancel the changes for added news.";

  mainElement.clearContents(contentPage);
  mainElement.addParagraph(contentPage, save);
  mainElement.addParagraph(contentPage, cancel);
};
const render = () => {
  addNavMenu(navButtons);
  addButtonEvents();
  updateContentPage(contentPage);
};

module.exports = { render };
