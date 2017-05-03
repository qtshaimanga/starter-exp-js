import Rectangle from '../../objects/canvas/Rectangle'

/**
 * Creates a new BasicCanvas.
 * @class
 */
 class BasicCanvas{

  constructor(){

    this.body = document.getElementsByTagName("body")[0];

    let that = this;
    this.createCanvas(this.body.offsetWidth, this.body.offsetHeight, function(canvas){
      that.drawRect(canvas);
    });

  }

  createCanvas(width, height, callback){

    let canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.width = width;
    canvas.height = height;

    this.body.appendChild(canvas);

    callback(canvas);

  }

  drawRect(canvas){
    let width = 100;
    let height = 100;
    let x = 20;
    let y = 20;

    let rectangle = new Rectangle(canvas, x, y, width, height);
    rectangle.move(canvas.width/2-width/2, canvas.height/2-height/2);
  }

}

export default BasicCanvas
