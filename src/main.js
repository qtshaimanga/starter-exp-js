/*Exemple fonction elastique*/

var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.createElement("canvas");

canvas.width = w;
canvas.height = h;
document.body.appendChild(canvas);

var ctx = canvas.getContext("2d");

var pos = {x:0.5 * w, y:0.5 * h};
var vel = {x:0, y:0};

var target = {x:Math.random() * w, y:Math.random() * h};

var friction = 0.8;
var spring = 0.005;

var vt = 5;
function update()
{
	ctx.fillStyle = "black";
	vel.x = vel.x * friction + spring * (target.x - pos.x);
	vel.y = vel.y * friction + spring * (target.y - pos.y);
	pos.x += vel.x;
	pos.y += vel.y;

	ctx.fillRect(pos.x - 5, pos.y - 5, 10, 10);
	target.x += vt * (Math.random() * 2 - 1);
	target.y += vt * (Math.random() * 2 - 1);

	ctx.fillStyle = "red";
	ctx.fillRect(target.x - 5, target.y - 5, 10, 10);
	requestAnimationFrame(update);
}
update();
