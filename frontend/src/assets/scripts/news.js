const axios = require("axios").default;

window.addEventListener("load", async () => {
  try {
    const { data } = await axios.get("/api/v1/news/get", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const newsArray = data.news;

    newsArray.forEach((element) => {
      const card = document.createElement("div");
      const h1 = document.createElement("h1");
      const h5 = document.createElement("h5");
      const image = document.createElement("div");
      const p = document.createElement("p");
      const newsrow = document.getElementById("newsrow");
      card.className = "card pl-28 pt-5 pb-5 ";
      h1.className = "text-lg font-bold p-2";
      h5.className = "text-sm text-stone-400 p-2";
      image.className = "bg-gray-200 h-40 w-40 p-2";
      p.className = "p-2";
      let d = new Date(element.createdDate);

      h1.innerHTML = element.title;
      h5.innerHTML =
        "Created: " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();
      image.innerHTML = "Image need to fix";
      p.innerHTML = element.article;
      card.append(h1, h5, image, p);
      newsrow.append(card);
    });
  } catch (err) {
    console.log(err);
  }
});
