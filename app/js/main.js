let colori = document.querySelector(".temna");
colori.addEventListener("click", () => {
    if (colori.style.backgroundColor === "rgb(0, 0, 0)") {
        document.body.style.setProperty("--color1", "rgb(255, 255, 255)");
        document.body.style.setProperty("--color2", "rgb(0, 0, 0)");
        colori.style.backgroundColor = "rgb(0, 191, 255)";
    } else if (colori.style.backgroundColor === "rgb(0, 191, 255)") {
        document.body.style.setProperty("--color1", "rgb(0, 191, 255)");
        document.body.style.setProperty("--color2", "rgb(116, 25, 182)");
        colori.style.backgroundColor = "rgb(0, 0, 0)";
    }
});

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
    }
}
