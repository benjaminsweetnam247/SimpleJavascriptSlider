# SimpleJavascriptSlider
a simple javascript slider using velocity.js

##How To Use

###add this markup to your webpage where you would like the slider repeating the first image
```html
<div id="slider">
    <ul id="slides" class="slides">
      <li class="slide"><img src="http://placehold.it/720x400?text=1" alt=""></li>
      <li class="slide"><img src="http://placehold.it/720x400?text=2" alt=""></li>
      <li class="slide"><img src="http://placehold.it/720x400?text=3" alt=""></li>
      <li class="slide"><img src="http://placehold.it/720x400?text=4" alt=""></li>
      <li class="slide"><img src="http://placehold.it/720x400?text=5" alt=""></li>
      <li class="slide"><img src="http://placehold.it/720x400?text=6" alt=""></li>
      <li class="slide"><img src="http://placehold.it/720x400?text=1"></li>
    </ul>
  </div>
```

###include the scripts velocity.min.js script and slider.js.
```html
  <script src="resources/velocity.min.js"></script>
  <script src="resources/slider.js"></script>
```


###modify slider.js to suit your use.

width: adjusts the width of the slider.  
animationSpeed: adjusts the slide transition time.  
pause: adjusts the time between slides.  
stopOnHover: when true stops the slider on hover.   
clickForNext: when true changes the current slide when the slider is clicked.  

```javascript
// configureation
var width = 720;
var animationSpeed = 1000;
var pause = 6000;
var interval;
var stopOnHover = true;
var clickForNext = true;
```
