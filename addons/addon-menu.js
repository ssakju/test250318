// addons/addon-menu.js
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.createElement("button");
    menuButton.textContent = "메뉴";
    menuButton.style.position = "absolute";
    menuButton.style.top = "10px";
    menuButton.style.left = "10px";
    menuButton.style.padding = "10px";
    menuButton.style.background = "white";
    menuButton.style.border = "1px solid black";
    menuButton.style.cursor = "pointer";
    
    document.body.appendChild(menuButton);
});
