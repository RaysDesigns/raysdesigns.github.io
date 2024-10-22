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
    // window.scrollTo({
    //  top: currentSectionElement.offsetTop - document.getElementById('navbar').offsetHeight,
    //  behavior: 'smooth'
    // });
  }
});




// Map slideshow
let slideIndexMap = 1;
showSlidesMap(slideIndexMap);

function plusSlidesMap(n) {
    showSlidesMap(slideIndexMap += n);
}

function showSlidesMap(n) {
    let i;
    let slidesMap = document.getElementsByClassName("mySlidesMap");
    if (n > slidesMap.length) { slideIndexMap = 1 }
    if (n < 1) { slideIndexMap = slidesMap.length }
    for (i = 0; i < slidesMap.length; i++) {
        slidesMap[i].style.display = "none";
    }
    slidesMap[slideIndexMap - 1].style.display = "block";
}

// Coffee slideshow
let slideIndexCoffee = 1;
showSlidesCoffee(slideIndexCoffee);

function plusSlidesCoffee(n) {
    showSlidesCoffee(slideIndexCoffee += n);
}

function showSlidesCoffee(n) {
    let i;
    let slidesCoffee = document.getElementsByClassName("mySlidesCoffee");
    if (n > slidesCoffee.length) { slideIndexCoffee = 1 }
    if (n < 1) { slideIndexCoffee = slidesCoffee.length }
    for (i = 0; i < slidesCoffee.length; i++) {
        slidesCoffee[i].style.display = "none";
    }
    slidesCoffee[slideIndexCoffee - 1].style.display = "block";
}

// Menu slideshow
let slideIndexMenu = 1;
showSlidesMenu(slideIndexMenu);

function plusSlidesMenu(n) {
    showSlidesMenu(slideIndexMenu += n);
}

function showSlidesMenu(n) {
    let i;
    let slidesMenu = document.getElementsByClassName("mySlidesMenu");
    if (n > slidesMenu.length) { slideIndexMenu = 1 }
    if (n < 1) { slideIndexMenu = slidesMenu.length }
    for (i = 0; i < slidesMenu.length; i++) {
        slidesMenu[i].style.display = "none";
    }
    slidesMenu[slideIndexMenu - 1].style.display = "block";
}

// Fox Hills main slideshow
let slideIndexFoxhillMain = 1;
showSlidesFoxhillMain(slideIndexFoxhillMain);

function plusSlidesFoxhillMain(n) {
    showSlidesFoxhillMain(slideIndexFoxhillMain += n);
}

function showSlidesFoxhillMain(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesFoxhillMain");
    if (n > slides.length) { slideIndexFoxhillMain = 1 }
    if (n < 1) { slideIndexFoxhillMain = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFoxhillMain - 1].style.display = "block";
}

// Fox Hills square slideshow
let slideIndexFoxhillSquare = 1;
showSlidesFoxhillSquare(slideIndexFoxhillSquare);

function plusSlidesFoxhillSquare(n) {
    showSlidesFoxhillSquare(slideIndexFoxhillSquare += n);
}

function showSlidesFoxhillSquare(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesFoxhillSquare");
    if (n > slides.length) { slideIndexFoxhillSquare = 1 }
    if (n < 1) { slideIndexFoxhillSquare = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFoxhillSquare - 1].style.display = "block";
}

// Spice Merchants main slideshow
let slideIndexSpiceMain = 1;
showSlidesSpiceMain(slideIndexSpiceMain);

function plusSlidesSpiceMain(n) {
    showSlidesSpiceMain(slideIndexSpiceMain += n);
}

function showSlidesSpiceMain(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesSpiceMain");
    if (n > slides.length) { slideIndexSpiceMain = 1 }
    if (n < 1) { slideIndexSpiceMain = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexSpiceMain - 1].style.display = "block";
}

// Spice Merchants square slideshow
let slideIndexSpiceSquare = 1;
showSlidesSpiceSquare(slideIndexSpiceSquare);

function plusSlidesSpiceSquare(n) {
    showSlidesSpiceSquare(slideIndexSpiceSquare += n);
}

function showSlidesSpiceSquare(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesSpiceSquare");
    if (n > slides.length) { slideIndexSpiceSquare = 1 }
    if (n < 1) { slideIndexSpiceSquare = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexSpiceSquare - 1].style.display = "block";
}

