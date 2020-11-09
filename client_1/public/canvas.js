var canvas = document.querySelector('#canvas');

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

canvas.width = winWidth;
canvas.height = winHeight;
// canvas.width = "500";
// canvas.height = "400";
canvas.style.position = "fixed";
      
var ctx = canvas.getContext('2d');

var colors = [
    '#BAF2E8',
    '#218DA6',
    '#FFFFF0',
    '#FEB2AD',
    '#F56358'
];

var mouseX;
var mouseY;

var maxRadius = 40;

window.addEventListener('mousemove', function (event) {
    mouseX = event.x;
    mouseY = event.y;
})

// var x = Math.random() * winWidth;
// var y = Math.random() * winHeight;
// var dx = (Math.random() - 0.5) * 10;
// var dy = (Math.random() - 0.5) * 10;
// var radius = 30;

var sAngle = 0;
var eAngle = 2 * Math.PI;

function Circle(x, y, dx, dy, radius, sAngle, eAngle) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.originalRadius = radius;
    this.color = 'white';/*colors[Math.floor(Math.random() * colors.length)];*/

    this.update = function () {
        var xDistance = this.x - mouseX;
        var yDistance = this.y - mouseY;

        if (this.x + this.radius > winWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > winHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // if (this.x - mouseX > 50 || this.x - mouseX < -50) {
        //     this.radius += 1;
        // }

        if (
            xDistance < 50 &&
            xDistance > -50 &&
            yDistance < 50 &&
            yDistance > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }

        } else if (this.radius > this.originalRadius) {
            this.radius -= 1;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fillStyle='opacity: 0.1';
        ctx.fill();
        //ctx.stroke();

        this.x += this.dx;
        this.y += this.dy;
    }
}

var circles = [];

for (let i = 0; i < 200; i++) {

    var x = Math.random() * winWidth;
    var y = Math.random() * winHeight;
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 1;
    var radius = Math.random() * 5 + 1;

    circles.push(new Circle(x, y, dx, dy, radius));
}

function moveCircles() {
    ctx.clearRect(0, 0, winWidth, winHeight);

    circles.forEach(function (circle) {
        circle.update();
    })

    requestAnimationFrame(moveCircles);
}
moveCircles();
