// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Datos de proyectos para el modal
const projects = {
  1: {
    title: "Chatbot Inteligente",
    description: "Este proyecto surgió para cubrir la necesidad de optimizar la atención al cliente mediante IA.",
    tech: "JavaScript, Python, Node.js",
    img: "https://via.placeholder.com/600x300",
    gif: "https://via.placeholder.com/400x200",
    repo: "#",
    demo: "#"
  },
  2: {
