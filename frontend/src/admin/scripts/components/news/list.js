const axios = require("axios").default;

const createListItem = (
  content,
  id = "",
  className = "text-center text-lg mb-2 divide-y divide-gray-400"
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

const getNews = async () => {
  const { data } = await axios.get("/api/v1/news/get");
  return data.news;
};

const addNewsList = async (
  to,
  listType = "normal",
  id = "",
  className = ""
) => {
  const newsData = await getNews();
  let newsListItems = new Array();
  let content;

  newsData.forEach((news) => {
    if (listType === "normal") {
      content = news.title;
    } else if (listType === "checkBox") {
      content = `<input type = "checkbox"
                id = "${news.title} ${news._id}"
                name = "${news.createdDate}">
         <label for = "${news.title} ${news._id}"> ${news.title} </label>`;
    } else if (listType === "radio") {
      content = `<input type = "radio"
                id = "${news.title} ${news._id}"
                name = "selected news">
         <label for = "${news.title} ${news._id}"> ${news.title} </label>`;
    } else {
      content = "Invalid list item type";
    }

    newsListItems.push(createListItem(content, news._id));
  });

  to.appendChild(createUnorderedList(newsListItems, id, className));
};

module.exports = { addNewsList };
