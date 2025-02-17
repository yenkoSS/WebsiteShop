document.querySelector(".icon-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "flex";
});

document.querySelector(".icon-close-menu").addEventListener("click", () => {
  document.querySelector(".nav-header-list-sm").style.display = "none";
});

document.querySelector(".nav-logo").addEventListener("click", (e) => {
  e.preventDefault();
  const id = document.querySelector(".nav-logo").getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".nav-header-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    console.log(id);
    document.querySelector(".nav-header-list-sm").style.display = "none";
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-header-link-sm").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    console.log(id);
    document.querySelector(".nav-header-list-sm").style.display = "none";
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-footer-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".btn-hero-full").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".btn-hero-empty").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#prices").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".btn-portfolio").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll(".btn-order").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
});
