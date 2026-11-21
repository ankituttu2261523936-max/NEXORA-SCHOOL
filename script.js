
// NEXORA SCHOOL WEBSITE

document.addEventListener("DOMContentLoaded", () => {

  // Welcome message
  console.log("Welcome to NEXORA PUBLIC SCHOOL");

  // Smooth navigation
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      console.log("Navigation clicked");
    });
  });

});

0

