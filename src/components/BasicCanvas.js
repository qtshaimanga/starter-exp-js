import Rectangle from '../objects/Rectangle'

function createCanvas(width, height, callback){
  var body = document.getElementsByTagName("body")[0];
  var canvas = document.createElement('canvas');
  canvas.id = "canvas";
  canvas.width = body.offsetWidth;
  canvas.height = body.offsetHeight;

  body.appendChild(canvas);

  callback(canvas);
}

createCanvas(600, 300, function(canvas){
  drawRect(canvas);
});


function drawRect(canvas){
  var width = 100;
  var height = 100;
  var x = 20;
  var y = 20;

  var rectangle = new Rectangle(canvas, x, y, width, height);
  rectangle.move(canvas.width/2-width/2, canvas.height/2-height/2);
}
