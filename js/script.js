// toggle dark mode
const toggle = document.getElementById('darkModeToggle');
const navbar = document.getElementById('navbar-top');

window.onload = () => {
  const isDark = localStorage.getItem('theme') === 'dark';

  document.body.classList.toggle('dark-mode', isDark);
  navbar.classList.remove(isDark ? 'navbar-light' : 'navbar-dark');
  navbar.classList.add(isDark ? 'navbar-dark' : 'navbar-light');

  toggle.checked = isDark;
};

toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  document.body.classList.toggle('dark-mode', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  navbar.classList.remove(isDark ? 'navbar-light' : 'navbar-dark');
  navbar.classList.add(isDark ? 'navbar-dark' : 'navbar-light');
});

// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});