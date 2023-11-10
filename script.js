var canvas = document.getElementById("canvas1");// looking for canvas tag in html document

canvas.width = window.innerWidth; //sets canvas width to window size
canvas.height = window.innerHeight; //sets canvas height to window size


//variables
var isDrawing = false; // sets variable isDrawning to boolian false
var X  ; //storing x value
var Y ; // storing y value
var offsetX; //storing offsetX
var offsetY; //storing offsetY
var ctx //storing ctx
var ctx = canvas.getContext("2d"); // dont really know what this dose but i guess it sets var ctx to be a 2d space?
var strokeStyle = "black";//stores the strokeStyle (color)
var lineWidth = "10";//stores the lineWidth (width of stroke)


//sets the stroke atributes
ctx.strokeStyle = strokeStyle; // sets color of stroke, refers to var strokeStyle
ctx.lineCap = "round" //sets end to be round
ctx.lineWidth = lineWidth; //sets width of stroke, refers to var lineWidth




// Function that states that isDrawing is set to true
function startDrawing(){
    isDrawing = true;
}

// Function that states that isDrawing is set to false and the "Stroke Path" dosent continiue to the next StartDrawing function
function stopDrawing(){
    isDrawing = false
    ctx.beginPath();
}

//Function for Mouse drawing (free drawing)
function draw(freeDraw){
    if (!isDrawing) return;// if isDrawing not true it runs the function again.
    ctx.strokeStyle;// dont know if these are needed here or if it just needs the Style,lineCap,lineWidth from the top
    ctx.lineCap;
    ctx.lineWidth;

    
    ctx.lineTo(freeDraw.offsetX, freeDraw.offsetY);//takes cordinates from freeDraw thattakes them from draw that takes them fom mousemove
    ctx.stroke();//fills the stroke (would like to have this last of the ctx but then it wount fill anything )
    ctx.beginPath();//starts a new path (would like this on top but then i get dots instead of lines)
    ctx.moveTo(freeDraw.offsetX, freeDraw.offsetY);//ends the stroke att these cordinates
    
}

window.addEventListener("mousedown", startDrawing);//Lisening to mousebutton is pressed down and runs startDrawing function
window.addEventListener("mouseup", stopDrawing);//listening to mousebutton is released and runs stopDrawing function
window.addEventListener("mousemove", draw);//listening if mouse is moving and runs draw function

/*
//SQUARE
//fills a rectangle but needs user input to change the width/height.
//needs button to activate

ctx.beginPath(); //starts square
ctx.fillStyle = "hexCode or css"; //color select. needs user input
ctx.fillRect(x cord, y cord, width, height);
*/

/*
//LINE
ctx.beginPath(); //starts a line
ctx.moveTo(x, y); //starting point.needs user input to change the x and y cord.needs button to activate 
ctx.lineTo(x, y);//end point
ctx.strokeStyle = "hexCode or css";// color select.needs input from user
ctx.strokeStyle = "cap";
ctx.stroke();//fills line
*/

/*
//ARC
ctx.beginPath(); //starts circle
ctx.arc(x, y, 30, 0, Math.PI * 2);// creates circle. needs x(300) and y(500) cord from user, button and cords where to start (30).
ctx.strokeStyle = "blue";//color select
ctx.stroke(); // fill stroke
*/



console.log(canvas)
