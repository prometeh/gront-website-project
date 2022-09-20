const mainElement = require("./../mainElement");
const addNewsform = (to, id = "", className = "mx-4") => {
    try {
      const form = document.createElement("form");
      const labelTitle = document.createElement("label");
      const inputTitle = document.createElement("input");
      const labelArticle = document.createElement("label");
      const inputArticle = document.createElement("textarea");
      const labelMedia = document.createElement("label");
      const inputMedia = document.createElement("input");
      const div1 =document.createElement("div");
      const div2 =document.createElement("div");
      const div3 =document.createElement("div");
      
      form.id=id;
      form.className="my-5 flex flex-col";

      div1.className="mx-3 mb-6 pt-3 rounded bg-gray-400";
      div2.className="mx-3 mb-6 pt-3 rounded bg-gray-400";
      div3.className="mx-3 mb-6 pt-3 rounded bg-gray-400";

      labelTitle.className="  mx-6 block text-gray-700 text-sm font-bold mb-2 ml-3";
      labelTitle.innerHTML="Title";
      
      inputTitle.className=" bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-700 transition duration-500 px-3 pb-3";
      inputTitle.id="title";
      inputTitle.placeholder="Enter the Article Title";
      
      labelArticle.className=" block text-gray-700 text-sm font-bold mb-2 ml-3";
      labelArticle.innerHTML="Article";

      inputArticle.className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-700 transition duration-500 px-3 pb-3";
      inputArticle.rows=10;
      inputArticle.cols=60;
      inputArticle.id="article";
      inputArticle.placeholder="Enter the Article";
      
      labelMedia.className="block text-gray-700 text-sm font-bold mb-2 ml-3";
      labelMedia.innerHTML="Media";
      
      inputMedia.className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-700 transition duration-500 px-3 pb-3";
      inputMedia.id="media";
      inputMedia.placeholder="Enter the Media Link here....";
      
      div1.appendChild(labelTitle);
      div1.appendChild(inputTitle);

      div2.appendChild(labelArticle);
      div2.appendChild(inputArticle);

      div3.appendChild(labelMedia);
      div3.appendChild(inputMedia);
    
      form.appendChild(div1);
      form.appendChild(div2);
      form.appendChild(div3);

      to.appendChild(form);
    } catch (err) {
      console.log(err);
    }
  };
  





module.exports = { addNewsform };