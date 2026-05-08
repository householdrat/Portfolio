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
    title: "Dashboard Predictivo",
    description: "Plataforma que analiza datos y predice tendencias para la toma de decisiones estratégicas.",
    tech: "React, Python, TensorFlow",
    img: "https://via.placeholder.com/600x300",
    gif: "https://via.placeholder.com/400x200",
    repo: "#",
    demo: "#"
  },
  3: {
    title: "Automatización de Procesos",
    description: "Sistema que optimiza tareas repetitivas en empresas para mejorar la eficiencia y reducir costos.",
    tech: "Django, JavaScript, PostgreSQL",
    img: "https://via.placeholder.com/600x300",
    gif: "https://via.placeholder.com/400x200",
    repo: "#",
    demo: "#"
  }
};

// Modal
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');
const detailButtons = document.querySelectorAll('.details-btn');

detailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.parentElement.getAttribute('data-project');
    const project = projects[projectId];

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-tech').textContent = project.tech;
    document.getElementById('modal-img').src = project.img;
    document.getElementById('modal-gif').src = project.gif;
    document.getElementById('modal-repo').href = project.repo;
    document.getElementById('modal-demo').href = project.demo;

    modal.style.display = 'flex';
  });
});

// Cerrar modal con botón X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Simulación de envío de formulario
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias por tu mensaje, te contactaré pronto.');
});
