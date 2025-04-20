// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Theme Toggle
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  });
  
  // Typing Animation using Typed.js
  // Ensure you include Typed.js library in your HTML before this script
  const typed = new Typed('#typed-text', {
    strings: ['a Developer.', 'a Designer.', 'an Innovator.'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  