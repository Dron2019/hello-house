/**
 * Draws the outline of the svg circle to the percent set in data attr
 */
function drawCharts() {
  var circles = document.querySelectorAll('.percent-circle');

  circles.forEach(function(el) {
    //pull the percentage and turn it into a fraction
    var percent = el.dataset.percent / 100;
    //work out the circumference from the width
    var diameter = el.offsetWidth;
    var circumference = Math.ceil(diameter * Math.PI);
    //now we have the circumference, we know how long the ouline should be
    var stroke = Math.ceil(circumference * percent);
    //also workout how long the line doesn't exist for
    var diff = circumference - stroke;

    //now add the strok dash array for the first two values
    //TODO : could this all be done with css?
    el.querySelector('.percent-circle-inner').style.strokeDasharray = stroke + 'px ' + diff + 'px';
  });
}

document.addEventListener('DOMContentLoaded', drawCharts);
