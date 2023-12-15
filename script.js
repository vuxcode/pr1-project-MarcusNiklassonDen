var canvas = document.getElementById("canvas1");// fetching canvas from id tag in html document


canvas.width = window.innerWidth;//sets canvas width to window size
canvas.height = window.innerHeight;//sets canvas height to window size

//variables
var ctx = canvas.getContext("2d");// sets ctx to be a 2d space 
var state = null;// stores the different states
var isDrawing = false;// sets variable isDrawning to boolian false
var strokeStyle = document.getElementById("colorPicker").value;//gets the value from colorPicker id in HTML code and stores it here
var lineWidth = document.getElementById("lineSize").value;//gets the value from lineSize id in HTML code and stores it here

//sets the stroke atributes in this function
function setDrawingParameters() {
    ctx.strokeStyle = strokeStyle;// sets color of stroke, refers to var strokeStyle
    ctx.lineWidth = lineWidth;//sets width of stroke to var lineWidth
    ctx.lineCap = "round";//sets end to be round
}

// function that clears the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function that states that isDrawing is set to true
function startDrawing() {
    isDrawing = true;
}

// Function that states that isDrawing is set to false and the "Stroke Path" dose not continiue to the next StartDrawing function
function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

//Function for Mouse drawing (free drawing)
function draw(freeDraw) {
    if (!isDrawing) return; // if isDrawing not true it runs the function again.
    setDrawingParameters(); //runs function
    if (state === "pen") { //checks if state and pen is exactly true
        startPen(freeDraw.offsetX, freeDraw.offsetY); // runs function
       // ctx.lineTo(freeDraw.offsetX, freeDraw.offsetY);//end poin in if 
        //ctx.stroke();//fills line in if
        //ctx.beginPath();//starts a line in if
        //ctx.moveTo(freeDraw.offsetX, freeDraw.offsetY);//starting point in if
    } 
    else if (state === "eraser") { //checks if state and eraser is exactly true
        startEraser(freeDraw.offsetX, freeDraw.offsetY); //runs function

    } 
    else if (state === "square") { //checks if state and square is exactly true
        drawSquare(freeDraw.offsetX, freeDraw.offsetY); // runs function with paremeter

    } 
    else if (state === "circle") { //checks if state and circle is exactly true
        drawCircle(freeDraw.offsetX, freeDraw.offsetY); // runs function with paremeter

    } 
    else if (state === "clear") { //checks if state and clear is exactly true
        clearCanvas(); // runs function
    }
    else {
        ctx.lineTo(freeDraw.offsetX, freeDraw.offsetY); //end poin
        ctx.stroke(); //fills line
        ctx.beginPath(); //starts path
        ctx.moveTo(freeDraw.offsetX, freeDraw.offsetY); //starting point
    }
}


//pen function
function startPen(x, y) {
        setDrawingParameters(); // runs function
        ctx.lineTo(x, y); //end poin
        ctx.stroke(); //fills line
        ctx.beginPath();//starts a line
        ctx.moveTo(x, y);//starting point
}

//pen function
function startEraser(x, y) {
    strokeStyle = "#ffffff"; // sets color to white
    setDrawingParameters(); // runs function
    ctx.lineTo(x, y); //end poin
    ctx.stroke(); //fills line
    ctx.beginPath(); //starts a line
    ctx.moveTo(x, y); //starting point
}

//square function
function drawSquare(x, y) {
    setDrawingParameters(); // runs function
    ctx.beginPath();
    ctx.strokeRect (x, y, 100, 100); //sets size and cords
    ctx.stroke(); //fills square
    ctx.closePath();
}

//circle function
function drawCircle(x, y) {
    setDrawingParameters(); // runs function
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2); //sets size and cords
    ctx.stroke(); //fills circle stroke
    ctx.closePath();
}

// displayes the slider value 1 to 300
function valueTest(test){
    document.getElementById("sliderOutput").innerHTML = test;
}

// mouse listeners 
canvas.addEventListener("mousedown", startDrawing); //when mouse button is pressed runs function
canvas.addEventListener("mouseup", stopDrawing); //when mouse button is relesed runs function
canvas.addEventListener("mousemove", draw); //when mouse is moving runs function

//button listeners
document.getElementById("buttonPen").addEventListener("click", function () { //gets button from HTML by id tag and runs function
    state = "pen"; //sets var state
});

document.getElementById("buttonEraser").addEventListener("click", function () { //gets button from HTML by id tag and runs function
    state = "eraser"; //sets var state
    startEraser();
});

document.getElementById("buttonSquare").addEventListener("click", function () { //gets button from HTML by id tag and runs function
    state = "square"; //sets var state
    drawSquare();
});

document.getElementById("buttonCircle").addEventListener("click", function () { //gets button from HTML by id tag and runs function
    state = "circle"; //sets var state
    drawCircle();
});

document.getElementById("buttonClear").addEventListener("click", function () { //gets button from HTML by id tag and runs function
    state = "clear"; //sets var state
    clearCanvas(); //runs function
});


// colorPicker eventListener
document.getElementById("colorPicker").addEventListener("input", function (color) { //listens for a input in the colorPicker
    strokeStyle = this.value; // Update var strokeStyle to the new color value   
});

// Slider eventListener
document.getElementById("lineSize").addEventListener("input", function (Thikness) { //listens for a input in the sliderOutput
    lineWidth = this.value; // Update var lineWidth to the new slider value
    ctx.lineWidth = lineWidth;   
});