function burgerMenu() {
    let navBar = document.getElementsByClassName("menuBurgerContents")[0];
    if(navBar.style.display === "block"){
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
    }
}