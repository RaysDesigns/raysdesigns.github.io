// NAVBAR TRANSITION
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var logo = document.getElementById('logo');
  var navLinks = document.querySelectorAll('#navbar ul li a');

  // Check if the page is scrolled more than 50px
  if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
      logo.src = "https://i.postimg.cc/XJmcnNB2/Untitled-1.png"; // New logo when scrolled
      navLinks.forEach(link => {
          link.classList.add("scrolled"); // Add 'scrolled' class to each link
      });
  } else {
      navbar.classList.remove("scrolled");
      logo.src = "https://i.postimg.cc/qvZdQPr3/Logo-name.png"; // Original logo when at the top
      navLinks.forEach(link => {
          link.classList.remove("scrolled"); // Remove 'scrolled' class from each link
      });
  }
});

// When the user scrolls the page, execute the function
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    // If the page is scrolled more than 50px from the top, change the navbar style
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

// DYNAMIC SHADOW
document.addEventListener('DOMContentLoaded', (event) => {
  // Get all the elements that will have the dynamic shadow
  var dynamicElements = document.querySelectorAll('.dynamic-shadow');

  dynamicElements.forEach(function(dynamicElement) {
    dynamicElement.addEventListener('mousemove', function(e) {
      var rect = dynamicElement.getBoundingClientRect();
      var x = e.clientX - rect.left; // X position within the element
      var y = e.clientY - rect.top;  // Y position within the element

      // Calculate shadow direction
      var shadowX = (x - rect.width / 2) / 20;
      var shadowY = (y - rect.height / 2) / 20;

      // Apply the shadow effect
      dynamicElement.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`;
    });

    dynamicElement.addEventListener('mouseleave', function(e) {
      // Reset the shadow effect when the mouse leaves the element
      dynamicElement.style.boxShadow = 'none';
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const navbarHeight = document.getElementById('navbar').offsetHeight; // Get the navbar's height

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default anchor click behavior

          let targetId = this.getAttribute('href'); // Get the target id (e.g., #graphic-design)
          let targetElement = document.querySelector(targetId); // Select the target element

          if (targetElement) {
              let topOffset = targetElement.offsetTop - navbarHeight; // Calculate position to scroll to
              window.scrollTo({
                  top: topOffset,
                  behavior: 'smooth' // Smooth scroll to the target
              });
              localStorage.setItem('currentSection', targetId);
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.aside a');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default anchor behavior

          const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section based on href of clicked link

          // Hide all sections
          sections.forEach(section => {
              section.style.display = 'none';
          });

          // Show the target section
          if (targetSection) {
              targetSection.style.display = 'block';
          }

          // Optionally, add smooth scroll to the top of the newly displayed section
          window.scrollTo({
              top: targetSection.offsetTop - document.getElementById('navbar').offsetHeight,
              behavior: 'smooth'
          });
      });
  });

  // Load the current section from localStorage
  const currentSection = localStorage.getItem('currentSection') || '#graphic-design';
  const currentSectionElement = document.querySelector(currentSection);
  if (currentSectionElement) {
    sections.forEach(section => {
      section.style.display = 'none';
    });
    currentSectionElement.style.display = 'block';
    window.scrollTo({
      top: currentSectionElement.offsetTop - document.getElementById('navbar').offsetHeight,
      behavior: 'smooth'
    });
  }
});

let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
showSlides1();
showSlides2();
showSlides3();
showSlides4();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 4000); // Change image every 4 seconds
}

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 4000); // Change image every 4 seconds
}

function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) { slideIndex3 = 1 }
    slides[slideIndex3 - 1].style.display = "block";
    setTimeout(showSlides3, 4000); // Change image every 4 seconds
}

function showSlides4() {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex4++;
    if (slideIndex4 > slides.length) { slideIndex4 = 1 }
    slides[slideIndex4 - 1].style.display = "block";
    setTimeout(showSlides4, 4000); // Change image every 4 seconds
}
