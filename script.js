const profiles = {
  george: {
    kicker: "THE PRINCE · SECOND IN LINE",
    title: "George",
    subtitle: "Prince George Alexander Louis of Wales",
    body: "Prince George lahir pada 22 Juli 2013 di St Mary's Hospital, Paddington, London. Sebagai anak pertama The Prince dan Princess of Wales, ia berada di urutan kedua dalam garis suksesi takhta. George dibaptis pada 23 Oktober 2013 di The Chapel Royal, St James’s Palace."
  },
  charlotte: {
    kicker: "THE PRINCESS · THIRD IN LINE",
    title: "Charlotte",
    subtitle: "Princess Charlotte Elizabeth Diana of Wales",
    body: "Princess Charlotte lahir pada 2 Mei 2015 di St Mary's Hospital, Paddington, London. Ia merupakan anak kedua The Prince dan Princess of Wales dan berada di urutan ketiga dalam garis suksesi. Charlotte dibaptis pada 5 Juli 2015 di Church of St Mary Magdalene, Sandringham."
  },
  louis: {
    kicker: "THE PRINCE · FOURTH IN LINE",
    title: "Louis",
    subtitle: "Prince Louis Arthur Charles of Wales",
    body: "Prince Louis lahir pada 23 April 2018. Ia merupakan anak ketiga dan bungsu The Prince dan Princess of Wales. Louis menjadi adik bagi George dan Charlotte, dan berada di urutan keempat dalam garis suksesi takhta."
  }
};

const modal = document.getElementById("modal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = profiles[btn.dataset.modal];
    modalKicker.textContent = p.kicker;
    modalTitle.textContent = p.title;
    modalSubtitle.textContent = p.subtitle;
    modalBody.textContent = p.body;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
