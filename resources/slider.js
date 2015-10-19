'use strict'


//cache DOM
var slider = document.getElementById('slider');
var slideContainer = document.querySelectorAll('#slides');
var slides = document.getElementsByClassName('slide');
var slideDistance = document.getElementById('slides');
var currentSlide = 1;
// configureation
var width = 720;
var animationSpeed = 1000;
var pause = 6000;
var interval;
var stopOnHover = true;
var clickForNext = true;
document.addEventListener('DOMContentLoaded', startSlider());
function startSlider(){
   interval = setInterval(function() {
      Velocity(slideContainer, { marginLeft: '-='+width }, animationSpeed, function() {
        currentSlide++;
        if(currentSlide === slides.length) {
          currentSlide = 1;
          Velocity(slideContainer, { marginLeft: '0'}, 0.1);
        }
      });
    }, pause);
  }
  function nextSlide(){
    Velocity(slideContainer, {marginLeft: '-='+width }, animationSpeed, function() {
      currentSlide++;
      if(currentSlide === slides.length) {
        currentSlide = 1;
        Velocity(slideContainer, { marginLeft: '0'}, 0.1);
        clearInterval(interval);
      }
    });
  }
  function stopSlider(){
    clearInterval(interval);
  }
  if(clickForNext){
  slider.addEventListener("click", nextSlide);
  }
  if(stopOnHover){
  slider.addEventListener("mouseover", stopSlider);
  slider.addEventListener("mouseleave", startSlider);
  }
    // setInterval
      // animate margin-left
      // if it's last slide, go to position 1 (0px);

      // listen for mouse enter and pause
      // resume on mouseleave

