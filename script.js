let Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    this.getPerimeter = function () {
        if (this.height !== 0 && this.width !== 0) {
            return (this.height + this.width) * 2
        }
    };
    this.getArea = function () {
        if (this.height !== 0 && this.width !== 0) {
            return this.width * this.height
        }
    };
};
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}
function check() {
    const context = document.getElementById("myCanvas").getContext("2d");
    context.width = document.getElementById("myCanvas").width;
    context.height = document.getElementById("myCanvas").height;
    context.clearRect(0, 0, context.width, context.height);
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    if (width !== 0 && height !== 0) createRectangle();
    }
function createRectangle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var x = Math.floor(Math.random() * (window.innerWidth- width));
    var y = Math.floor(Math.random() * (window.innerHeight - height));
    var color = getRandomColor();
    var rectangle= new Rectangle(height, width);
    document.getElementById('perimeter').value = rectangle.getPerimeter();
    document.getElementById('area').value = rectangle.getArea();
    ctx.beginPath();
    ctx.fillRect(x,y,rectangle.width,rectangle.height);
    ctx.fillStyle =color;
    ctx.fill();
}
