document.addEventListener("DOMContentLoaded", function() {
  const mascot = document.getElementById('mascot');
  
  // Delayed appearance of mascot
  setTimeout(function() {
    mascot.style.display = 'block';
  }, 5000); // Adjust delay time as needed
  
  // Animation functions for mascot
  function rotateMascot() {
    mascot.style.transform = 'rotate(360deg)';
  }

  function tiltMascot() {
    mascot.style.transform = 'rotate(-15deg)';
  }

  function jumpMascot() {
    mascot.style.transform = 'translateY(-20px)';
  }

  function walkMascot() {
    mascot.style.transform = 'translateX(20px)';
  }

  // Apply animation on mouseover
  mascot.addEventListener('mouseover', function() {
    rotateMascot();
    tiltMascot();
    jumpMascot();
    walkMascot();
  });

  // Display welcome message on mouseover
  mascot.addEventListener('mouseover', function() {
    alert('Welcome to Sci-Fi Inkie Stories!');
  });
});
