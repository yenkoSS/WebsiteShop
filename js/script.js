document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "flex";
});

document.querySelector(".icon-close-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

document.querySelectorAll(".nav-header-link-sm").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-header-list-sm").style.display = "none";
  });
});
