canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width=3;
mouseEvent="";
last_position_of_x=0;
last_position_of_y=0;
var screen_width=screen.width;
var screen_height=screen.height;
var new_width=screen.width - 40;
var new_height=screen.height - 150;
if(screen_width < 992){
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow= "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart")
    color=document.getElementById("color").value;
    width = document.getElementById("width").value;
    last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    current_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y= e.touches[0].clientY - canvas.offsetTop ;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();  
        last_position_of_x = current_position_of_x;
        last_position_of_y = current_position_of_y;

}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    
    mouseEvent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    
    mouseEvent = "mouseUP";

}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea(){
    console.log("clearArea()")
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
}



