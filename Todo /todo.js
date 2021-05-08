function addB() {
  let lists = document.getElementById("list");
  let trash = document.createElement("img");
  trash.src = "delete.png";
  let item = document.createElement("li");
  let checkbox = document.createElement("input");
  let text = document.createTextNode(
    document.getElementById("text-item").value
  );

  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";
  item.prepend(checkbox);
  item.appendChild(text);
  item.appendChild(trash);
  lists.appendChild(item);
  document.getElementById("text-item").value = "";
}

const trash = (e) => {
  if (e.target.nodeName === "IMG") e.target.parentNode.remove();
};
const check = (e) => {
  if (e.target.checked) {
    e.path[1].className = "crossoff";
    console.log(e);
  } else {
    e.path[1].className = "";
  }
};
document.addEventListener("click", trash);
document.addEventListener("click", check);

function ent(event) {
  const input = document.querySelector("#todo");
  if (event.keyCode === 13) {
    let lists = document.getElementById("list");
    let trash = document.createElement("img");
    let checkbox = document.createElement("input");
    trash.src = "delete.png";
    let item = document.createElement("li");
    let text = document.createTextNode(
      document.getElementById("text-item").value
    );
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo[]";
    item.append(checkbox);
    document.getElementById("text-item").value = "";

    item.appendChild(text);
    item.appendChild(trash);

    lists.appendChild(item);
  }
}
