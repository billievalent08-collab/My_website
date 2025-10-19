function searchExperience() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const list = document.getElementById("experienceList");
    const items = list.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent.toLowerCase();
        if (text.includes(input)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
