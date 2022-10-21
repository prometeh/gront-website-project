const axios = require("axios").default;

const createListItem = (
  content,
  id = "",
  className = "text-lg"
) => {
  try {
    const li = document.createElement("li");
    li.innerHTML = content;
    li.id = id;
    li.className = className;
    return li;
  } catch (err) {
    console.log(err);
  }
};

const createUnorderedList = (listItems, id = "", className = "") => {
  try {
    const ul = document.createElement("ul");
    listItems.forEach((item) => {
      ul.appendChild(item);
    });
    ul.className = className;
    ul.id = id;
    return ul;
  } catch (err) {
    console.log(err);
  }
};

const getNews = async (id = undefined) => {
  const { data } = id
    ? await axios.get("/api/v1/news/get/" + id)
    : await axios.get("/api/v1/news/get");

  return data.news;
};

// const addNewsList = async (
//   to,
//   listType = "normal",
//   id = "",
//   className = "",
//   newsId = undefined
// ) => {
//   const newsData = await getNews(newsId);
//   let newsListItems = new Array();
//   let content;
//   let accordionPart1 =
//     "<div class=\"accordion\" >" +
//     "<div class=\"accordion-item \">" +
//     "<button class=\"accordion-header rounded bg-gray-400 active:bg-gray-600\" type=\"button\" >" +
//     "<Strong>";
//   let accordionPart2 =
//     "</Strong>" +
//     "<i class=\"fas fa-angle-down\"></i>" +
//     "</button>" +
//     "<div class=\"accordion-body text-sm opacity-60 ml-5 whitespace-pre-wrap\">";
//   let accordionPart3 = "</div></div></div>";
//   if (!newsId) {
//     newsData.forEach((news) => {
//       if (listType === "normal") {
//         //content = news.title;
//         content =
//           accordionPart1 +
//           news.title +
//           accordionPart2 +
//           news.article +
//           accordionPart3;
//       } else if (listType === "checkBox") {
//         content =
//           accordionPart1 +
//           `<input type = "checkbox"
//                   id = "${news.title} ${news._id}"
//                   name = "${news.createdDate}">
//            <label for = "${news.title} ${news._id}"> ${news.title} </label>` +
//           accordionPart2 +
//           news.article +
//           accordionPart3;
//       } else if (listType === "radio") {
//         content =
//           accordionPart1 +
//           `<input type = "radio"
//                   id = "${news.title} ${news._id}"
//                   name = "selected news">
//            <label for = "${news.title} ${news._id}"> ${news.title} </label>` +
//           accordionPart2 +
//           news.article +
//           accordionPart3;
//       } else {
//         content = "Invalid list item type";
//       }
//       newsListItems.push(createListItem(content, news._id));
//     });
//   } else {
//     content = newsData.title;
//     newsListItems.push(createListItem(content, newsData._id));
//   }

//   to.appendChild(createUnorderedList(newsListItems, id, className));
// };

const addNewsList = (
  to,
  listType = "normal",
  id = "",
  className = "",
  newsId = undefined
) => {
  let content =
    "<div class='accordion' id='accordionPanelsStayOpenExample'>  <div class='accordion-item'>      <button class='accordion-header' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne' aria-expanded='true' aria-controls='panelsStayOpen-collapseOne'>        Accordion Item #1      </button>      <div class='accordion-body'>        <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.       </div>  </div>  <div class='accordion-item'>      <button class='accordion-header collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseTwo' aria-expanded='false' aria-controls='panelsStayOpen-collapseTwo'>        Accordion Item #2      </button>      <div class='accordion-body'>        <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.      </div>  </div>  <div class='accordion-item'>      <button class='accordion-header collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseThree' aria-expanded='false' aria-controls='panelsStayOpen-collapseThree'>        Accordion Item #3      </button>      <div class='accordion-body'>        <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.      </div>  </div></div>";



 console.log("ravi html");
  var div = document.createElement("div");
  div.innerHTML = content.trim();
  to.appendChild(div.firstChild);
};

module.exports = { addNewsList };
