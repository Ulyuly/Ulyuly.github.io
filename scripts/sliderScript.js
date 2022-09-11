let currentSlideIndex = 1;
showSlides(currentSlideIndex) 


function plusSlides(slideIndex) {
  showSlides(currentSlideIndex += slideIndex);
}

function currentSlide(slideIndex) {
  showSlides(currentSlideIndex = slideIndex);
}

function showSlides(slideIndex) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("sliderDot");
  let background = document.getElementById("firstPanel");

  if (slideIndex > slides.length) {currentSlideIndex = 1}
  if (slideIndex < 1) {currentSlideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[currentSlideIndex-1].style.display = "block";
  dots[currentSlideIndex-1].className += " active";
  if(document.body.clientWidth > 460){
  background.style.backgroundColor = "#333";
  background.style.background = "url('bin/sliderphoto"+currentSlideIndex+".jpeg') no-repeat fixed center";
  background.style.backgroundSize = "100% 100%";
  } else { 
  background.style.background = "url('bin/sliderphoto"+currentSlideIndex+"mobile.jpg') no-repeat fixed center";
  background.style.backgroundSize = "120% 100%";
  }
}