var canvas = document.getElementById("canvas1");// looking for canvas tag in html document

canvas.width = window.innerWidth; //sets canvas width to window size
canvas.height = window.innerHeight; //sets canvas height to window size

var ctx = canvas.getContext("2d"); // dont really know what this dose but i guess it sets var ctx to be a 2d space?

ctx.strokeStyle = "black"; // sets color of stroke
ctx.lineCap = "round" //sets end to be round
ctx.lineWidth = 10; //sets width of stroke

var isDrawing = false; // sets variable isDrawning to boolian false
var X  ; //storing x value
var Y ; // storing y value
var offsetX; //storing offsetX
var offsetY; //storing offsetY
var ctx //storing ctx


// Drawing function
function freeDrawing(free){
    if (!isDrawing) return;

    ctx.beginPath(); //starts a line
    ctx.moveTo(X, Y); //starting point.needs user input to change the x and y cord.needs button to activate 
    ctx.lineTo(free.offsetX, free.offsetY);//end point
    ctx.stroke();//fills line

}


//Mouse Event Listeners
window.addEventListener("mousemove", (free) =>{//listens if mouse  is moving
    if (isDrawing) {
        X = free.offsetX;// changes var X to free.offsetX (offsetX looks at where the mousepointer i in the x axis)
        Y = free.offsetY;// changes var Y to free.offsetY (offsetY looks at where the mousepointer i in the y axis
    }
    

});

window.addEventListener("mousedown", (free) =>{//listens if mouse button is pressed and runs function freeDrawing
    isDrawing = true; // changes var isDrawing to true
    X = free.offsetX; // changes var X to free.offsetX (offsetX looks at where the mousepointer i in the x axis)
    Y = free.offsetY; // changes var Y to free.offsetY (offsetY looks at where the mousepointer i in the y axis
    
});



//window.addEventListener("mousemove", freeDrawing); // listening to mouse movment



window.addEventListener("mouseup", (free) =>{ // listening if mouse button is relesed
    isDrawing = false // sets var isDrawing to false
})

// Having a problem with the stroke not updating corectlly, it always draws from the starting point


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
