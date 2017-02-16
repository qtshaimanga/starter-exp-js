export default class Rectangle {

  constructor(canvas, x, y, width, height){
    var c = canvas //document.getElementById("canvas");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.ctx = c.getContext("2d");
    this.render(this.x, this.y, this.width, this.height);
  }

  //TODO push in the pool
  move(x, y){
    this.render(x, y, this.width, this.height);
    this.ctx.clearRect(this.x, this.y, this.width, this.height)
  }

  render(x, y, width, height){
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle="#FF0000";
    this.ctx.lineWidth=1;
    this.ctx.fill();
  }
}
