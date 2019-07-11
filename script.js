function toggleFunction() {
  let openMenu = document.getElementById("menuNav");
  if (openMenu.className === "menu") {
    openMenu.className += " responsive";
  } else {
    openMenu.className = "menu";
  }
}

