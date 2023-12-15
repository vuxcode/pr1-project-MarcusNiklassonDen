var canvas = document.getElementById("canvas1");// looking for canvas tag in html document

canvas.width = window.innerWidth; //sets canvas width to window size
canvas.height = window.innerHeight; //sets canvas height to window size


//variables
var state // stores the difrent states
var isDrawing = false; // sets variable isDrawning to boolian false
//var X  ; //storing x value
//var Y ; // storing y value
//var offsetX; //storing offsetX
//var offsetY; //storing offsetY
//var ctx //storing ctx
var ctx = canvas.getContext("2d"); // dont really know what this dose but i guess it sets var ctx to be a 2d space?
var strokeStyle = document.getElementById("colorPicker").value;//stores the strokeStyle (color)
var lineWidth = document.getElementById("lineSize").value;//stores the lineWidth (width of stroke)(i workt on this for several hours and i had the wrong id all along 🤦‍♂️ i fell so stupid)

//sets the stroke atributes
ctx.strokeStyle = strokeStyle; // sets color of stroke, refers to var strokeStyle
ctx.lineCap = "round" //sets end to be round
ctx.lineWidth = lineWidth; //sets width of stroke to var lineWidth

// colorPicker eventListener
document.getElementById("colorPicker").addEventListener("input", function (color) { //listens for a input in the colorPicker
    strokeStyle = this.value; // Update var strokeStyle to the new color value
    
});

// Slider eventListener
document.getElementById("lineSize").addEventListener("input", function (Thikness) { //listens for a input in the sliderOutput
    lineWidth = this.value; // Update var lineWidth to the new slider value
    ctx.lineWidth = lineWidth;
    
});

//button varibles
var buttonPen = document.getElementById("buttonPen");// removed .onclick and added listerns instead
var buttonEraser = document.getElementById("buttonEraser");// removed .onclick and added listerns instead
var buttonSquare = document.getElementById("buttonSquare");// removed .onclick and added listerns instead
var buttonCircle = document.getElementById("buttonCircle");// removed .onclick and added listerns instead
var buttonClear = document.getElementById("buttonClear");// removed .onclick and added listerns instead

// Button event listeners
buttonPen.addEventListener("click", function () {
    state = 'pen';
});

buttonEraser.addEventListener("click", function () {
    state = 'eraser';

});

buttonSquare.addEventListener("click", function () {
    state = 'square';

});

buttonCircle.addEventListener("click", function () {
    state = 'circle';

});

buttonClear.addEventListener("click", function () {
    state = 'clear';

    clear();
});

// function that clears the canvas
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
}



   
function mouseListeners() {
    canvas.addEventListener("mousedown", startDrawing);//Lisening to mousebutton is pressed down and runs startDrawing function
    canvas.addEventListener("mouseup", stopDrawing);//listening to mousebutton is released and runs stopDrawing function
    canvas.addEventListener("mousemove", draw);//listening if mouse is moving and runs draw function
    

}


// Function that states that isDrawing is set to true
function startDrawing(){
    isDrawing = true;
    
}

// Function that states that isDrawing is set to false and the "Stroke Path" dosent continiue to the next StartDrawing function
function stopDrawing(){
    isDrawing = false;
    ctx.beginPath();
}

//Function for Mouse drawing (free drawing)
function draw(freeDraw){
    
    if (!isDrawing) return;// if isDrawing not true it runs the function again.
    
    ctx.strokeStyle = strokeStyle;// gets information from var strokeStyle
    ctx.lineWidth = lineWidth;// gets information from var lineWidth

    if (state === 'pen') {
        ctx.lineTo(freeDraw.offsetX, freeDraw.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(freeDraw.offsetX, freeDraw.offsetY);
        
    } else if (state === 'eraser') {
        // Your eraser logic here
    } else if (state === 'square') {
        startSquare();
    } else if (state === 'circle') {
        startCircle();
    } else if (state === 'clear') {
        clear();
    }
    
    ctx.lineTo(freeDraw.offsetX, freeDraw.offsetY);//takes cordinates from freeDraw thattakes them from draw that takes them fom mousemove
    ctx.stroke();//fills the stroke (would like to have this last of the ctx but then it wount fill anything )
    ctx.beginPath();//starts a new path (would like this on top but then i get dots instead of lines)
    ctx.moveTo(freeDraw.offsetX, freeDraw.offsetY);//ends the stroke att these cordinates
    
}

// SQUARE Needs user input
function startSquare(){
    stopDrawing();
    ctx.beginPath(); //starts square
    ctx.fillStyle = strokeStyle; //color select. needs user input
    ctx.fillRect(100, 100, 100, 100);
    ctx.stroke();

}

//ARC Needs user input and something dosent work as it should
function startCircle(){
    stopDrawing();
    ctx.arc(400, 400, 100, 0, Math.PI*2);// creates circle. needs x(300) and y(500) cord from user, button and cords where to start (30).
    ctx.stroke(); // fill stroke
    ctx.beginPath(); //starts circle
    
    ctx.strokeStyle;//color select
    
}

// displayes the slider value 1 to 100
function valueTest(test){
    document.getElementById("sliderOutput").innerHTML = test;
}


/*

function drawState() {
    if (state === 'pen') {// checks if state is the same as pen
    }
}

function eraseState() {
    if (state === 'eraser') {
        
    }
}

function squareState() {
    if (state === 'square') {
        
    }
}

function circleState() {
    if (state === 'circle') {
        
    }
}

function clearState() {
    if (state === 'clear') {
        clear();
    }
}

function drawState() {
    var state = draw();

}

function eraseState() {
    var state = erase();

}


function squareState() {
    var state = startSquare();

}


function circleState() {
    var state = startCircle();

}


function clearState() {
    var state = clear();

}

// Function to manage drawing based on the state
function handleDrawing() {
    if (state === "pen") {
        // Execute drawing actions specific to the pen
    } else if (state === "eraser") {
        // Execute eraser actions
    } else if (state === "square") {
        // Execute actions for drawing a square
    } else if (state === "circle") {
        // Execute actions for drawing a circle
    } else if (state === "clear") {
        clear(); // This will only clear the canvas if the state is set to 'clear'
    }
}




/*
function stopPen(){
    isDrawing = false;
}
*/








/*
//Function for Mouse drawing (free drawing)
function erase(){
    mouseListeners();

    if (!isDrawing) return;// if isDrawing not true it runs the function again.
    
    

    ctx.strokeStyle =  rgba(0, 0, 0, 0);// gets information from var strokeStyle
    ctx.lineCap;
    ctx.lineWidth = lineWidth;// gets information from var lineWidth

    
    ctx.lineTo(freeDraw.offsetX, freeDraw.offsetY);//takes cordinates from freeDraw thattakes them from draw that takes them fom mousemove
    ctx.stroke();//fills the stroke (would like to have this last of the ctx but then it wount fill anything )
    ctx.beginPath();//starts a new path (would like this on top but then i get dots instead of lines)
    ctx.moveTo(freeDraw.offsetX, freeDraw.offsetY);//ends the stroke att these cordinates
    
}
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
