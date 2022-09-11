function burgerMenu() {
    var navBar = document.getElementsByClassName("menuBurgerContents")[0];
    console.log("ben")
    if(navBar.style.display === "block"){
        navBar.style.display = "none";
    } else {
        navBar.style.display = "block";
        navBar.style.height = "20%";
    }
}