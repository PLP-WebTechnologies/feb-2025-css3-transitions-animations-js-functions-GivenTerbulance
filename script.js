const button = document.getElementById('animateBtn');
const speedSelect = document.getElementById('speedSelect');

// Load user preference from localStorage on page load
window.onload = () => {
  const savedSpeed = localStorage.getItem('animationSpeed');
  if (savedSpeed) {
    document.documentElement.style.setProperty('--anim-speed', savedSpeed);
    speedSelect.value = savedSpeed;
  }
};

// animation on button click
button.addEventListener('click', () => {
  button.classList.remove('animate'); 
  void button.offsetWidth; 
  button.classList.add('animate');
});

// Store selected speed in localStorage and apply
speedSelect.addEventListener('change', () => {
  const speed = speedSelect.value;
  localStorage.setItem('animationSpeed', speed);
  document.documentElement.style.setProperty('--anim-speed', speed);
});
