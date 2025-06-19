const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".portfolio__grid .portfolio__img_left", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".portfolio__grid .portfolio__img_right", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header__2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".contact__content__left", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".contact__content__right", {
  ...scrollRevealOption,
  delay: 500,
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('input[name="message"]').value;

    const mailtoLink =
      "mailto:mhmmd.azwar93@gmail.com" +
      "?subject=Message from " +
      encodeURIComponent(name) +
      "&body=Name: " +
      encodeURIComponent(name) +
      "%0AEmail: " +
      encodeURIComponent(email) +
      "%0AMessage: " +
      encodeURIComponent(message);

    window.location.href = mailtoLink;

    alert("Terima kasih! Email siap dikirim.");
    this.reset();
  });
