let currentSlide = 1;
showSlides(currentSlide) 

function showSlides(newSlideIndex) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("sliderDot");
  let background = document.getElementById("firstPanel");

  if (newSlideIndex > slides.length) {currentSlide = 1}
  if (newSlideIndex < 1) {currentSlide = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[currentSlide-1].style.display = "block";
  dots[currentSlide-1].className += " active";
  if(document.body.clientWidth > 460){
  background.style.backgroundColor = "#333";
  background.style.background = "url('bin/sliderphoto"+currentSlide+".jpeg') no-repeat fixed center";
  background.style.backgroundSize = "100% 100%";
  } else { 
  background.style.background = "url('bin/sliderphoto"+currentSlide+"mobile.jpg') no-repeat fixed center";
  background.style.backgroundSize = "120% 100%";
  }
}

function dotChanger(newSlideIndex) {
  showSlides(currentSlide = newSlideIndex);
}

function plusSlides(newSlideIndex) {
  showSlides(currentSlide += newSlideIndex);
}
