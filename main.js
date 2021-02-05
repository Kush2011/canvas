canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_Mousedown);
function my_Mousedown(e){
    x = e.clientX-canvas.offsetLeft;
    y = e.clientY-canvas.offsetTop;
    console.log(x, y);
    circle(x, y);
} 
function circle(x, y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
