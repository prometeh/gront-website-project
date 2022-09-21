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

const addLabel = (to, content, id = "", className = "mx-4") => {
  try {
    const label = document.createElement("label");
    label.id = id;
    label.innerHTML = content;
    label.className = className;
    to.appendChild(label);
  } catch (err) {
    console.log(err);
  }
};

const addTextArea = (to, content, id = "", className = "mx-4") => {
  try {
    const area = document.createElement("area");

    area.id = id;
    area.innerHTML = content;
    area.className = className;
    to.appendChild(area);
  } catch (err) {
    console.log(err);
  }
};

const addTextInput = (to, content, id = "", className = "mx-4") => {
  try {
    const input = document.createElement("input");

    input.id = id;
    input.innerHTML = content;
    input.className = className;
    to.appendChild(input);
  } catch (err) {
    console.log(err);
  }
};

const divTag = (to, content, id = "", className = "") => {
  try {
    const div = document.createElement("div");

    div.id = id;
    div.innerHTML = content;
    div.className = className;
    to.appendChild(div);
  } catch (err) {
    console.log(err);
  }
};

const addUnorderedList = (to, items, id = "", className = "") => {
  try {
    const ul = document.createElement("ul");
    items.forEach((item) => {
      console.log(item);
      ul.appendChild(createListItem(item));
    });
    ul.className = className;
    ul.id = id;
    to.appendChild(ul);
  } catch (err) {
    console.log(err);
  }
};

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
    console.log(li);
    return li;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addTitle,
  addParagraph,
  clearContents,
  addLabel,
  addTextArea,
  addTextInput,
  divTag,
  addUnorderedList,
};
