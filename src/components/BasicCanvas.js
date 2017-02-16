import Rectangle from '../objects/Rectangle'


export default class BasicCanvas{

  constructor(){
    this.body = document.getElementsByTagName("body")[0];

    var that = this;
    this.createCanvas(this.body.offsetWidth, this.body.offsetHeight, function(canvas){
      that.drawRect(canvas);
    });

    this.addListeners();
  }

  createCanvas(width, height, callback){
    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.width = width;
    canvas.height = height;

    this.body.appendChild(canvas);

    callback(canvas);
  }

  drawRect(canvas){
    var width = 100;
    var height = 100;
    var x = 20;
    var y = 20;

    var rectangle = new Rectangle(canvas, x, y, width, height);
    rectangle.move(canvas.width/2-width/2, canvas.height/2-height/2);
  }

  addListeners() {
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {

  }

}
