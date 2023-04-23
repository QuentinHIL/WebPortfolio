let slideIndexillu = 1;
showSlide(slideIndexillu);

// Next/previous controls
function plusSlide(e) {
  showSlide(slideIndexillu += e);
}

// Thumbnail image controls
function currentSlideillu(e) {
  showSlide(slideIndexillu = e);
}

function showSlide(e) {
  let illu;
  let slide = document.getElementsByClassName("diapoillu");
  let dot = document.getElementsByClassName("cercleillu");
  if (e > slide.length) {slideIndexillu = 1}
  if (e < 1) {slideIndexillu = slide.length}
  for (illu = 0; illu < slide.length; illu++) {
    slide[illu].style.display = "none";
  }
  for (illu = 0; illu < dot.length; illu++) {
    dot[illu].className = dot[illu].className.replace(" active", "");
  }
  slide[slideIndexillu-1].style.display = "block";
  dot[slideIndexillu-1].className += " active";
}