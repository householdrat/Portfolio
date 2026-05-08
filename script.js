// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simulación de envío de formulario
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias por tu mensaje, te contactaré pronto.');
});
