const addButton = (to, id, name, className = "btn-db") => {
  try {
    const btn = document.createElement("button");

    btn.id = id;
    btn.innerText = name;
    btn.className = className;
    to.appendChild(btn);
  } catch (err) {
    console.log(err);
  }
};

const removeButtons = (from) => {
  try {
    from.innerHTML = "";
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addButton, removeButtons };
