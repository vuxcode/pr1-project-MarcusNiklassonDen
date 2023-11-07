var canvas = document.getElementById("canvas1");// looking for canvas tag in html document

canvas.width = window.innerWidth; //sets canvas width to window size
canvas.height = window.innerHeight; //sets canvas height to window size

var ctx = canvas.getContext("2d"); // dont really know what this dose but i guess it sets var ctx to be a 2d space?



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
