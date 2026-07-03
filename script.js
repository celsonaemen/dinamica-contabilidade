const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE = "Olá, vim pelo site da Dinâmica Contabilidade e gostaria de falar com um especialista.";

const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  if (!WHATSAPP_NUMBER) {
    link.setAttribute("href", "#contato");
    return;
  }

  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  link.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});
