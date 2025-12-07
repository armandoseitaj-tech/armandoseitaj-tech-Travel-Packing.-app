function selectDestination(name) {
    localStorage.setItem("destination", name);
    window.location.href = "list.html";
}