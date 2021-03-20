var c = document.getElementById("artCanvas");
var ctx = c.getContext("2d");



var rad = 4;
var xAxis = 0+rad;
var yAxis = 0+rad;

window.addEventListener("keypress", (event) => {
  console.log(`key=${event.key}, code=${event.code}`);
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(xAxis, yAxis, rad, 0, 2 * Math.PI, false);
  ctx.stroke();
  xAxis += (2 * rad);
  if (xAxis >= c.width - rad) {
    yAxis += (2*rad);
    xAxis = 0 + rad;
  }
  //if (yAxis >= c.height - rad) {
  //  c.height += (2*rad);
  //}

});
