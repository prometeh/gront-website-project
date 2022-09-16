const addTitle = (
  to,
  content,
  id = "",
  className = "text-center text-2xl mt-5"
) => {
  try {
    const h2 = document.createElement("h2");

    h2.id = id;
    h2.innerHTML = content;
    h2.className = className;
    to.appendChild(h2);
  } catch (err) {
    console.log(err);
  }
};

const addParagraph = (to, content, id = "", className = "mx-4") => {
  try {
    const p = document.createElement("p");

    p.id = id;
    p.innerHTML = content;
    p.className = className;
    to.appendChild(p);
  } catch (err) {
    console.log(err);
  }
};

const clearContents = (from) => {
  try {
    from.innerHTML = "";
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addTitle, addParagraph, clearContents };
