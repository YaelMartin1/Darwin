const button = document.querySelector(".button");
const nav = document.querySelector(".nav");

button.addEventListener("click", () => {
  nav.classList.toggle("activo");
});

document
  .getElementById("boton-hamburguesa")
  .addEventListener("click", function () {
    var menu = document.getElementById("menu-hamburguesa");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
