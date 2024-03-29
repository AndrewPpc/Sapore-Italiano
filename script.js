// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
}


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


document.addEventListener("DOMContentLoaded", function() {
  const photos = document.querySelectorAll(".fadeIn");

  function fadeInPhotos() {
      photos.forEach(photo => {
          const photoTop = photo.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (photoTop < windowHeight) {
              photo.classList.add("show");
          }
      });
  }

  // Initial check in case photos are already in view on page load
  fadeInPhotos();

  // Check again as the user scrolls
  window.addEventListener("scroll", fadeInPhotos);
});

