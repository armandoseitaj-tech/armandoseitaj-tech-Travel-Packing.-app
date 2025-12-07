const destination = localStorage.getItem("destination");
document.getElementById("destinationName").textContent = destination;

let items = JSON.parse(localStorage.getItem("items")) || [];

function renderItems() {
    const list = document.getElementById("itemsList");
    list.innerHTML = "";

    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item} <span onclick="removeItem(${index})">X</span>`;
        list.appendChild(li);
    });
}

function addItem() {
    const input = document.getElementById("itemInput");
    const value = input.value.trim();

    if (value === "") return;

    items.push(value);
    localStorage.setItem("items", JSON.stringify(items));
    input.value = "";
    renderItems();
}

function removeItem(index) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    renderItems();
}

renderItems();