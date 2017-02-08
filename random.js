var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0,0,200,100,"DarkSlateGray",1);
makeEllipse(103,255,55,5,"lightgreen",1);
makeRect(75,110,50,80,"lightgreen",1);
makeRect(116,180,8,80,"lightgreen",1);
makeRect(106,180,8,80,"lightgreen",1);
makeRect(96,180,8,80,"lightgreen",1);
makeRect(86,180,8,80,"lightgreen",1);
makeRect(76,180,8,80,"lightgreen",1);
makeRect(91,80,50,80,"lightgreen",1);
makeRect(60,80,50,80,"lightgreen",1);
makeRect(75,80,50,100,"chocolate",1);
makeRect(70,80,50,20,"chocolate",1);
makeRect(60,80,50,20,"chocolate",1);
makeRect(91,80,50,20,"chocolate",1);
makeEllipse(100,50,35,25,"lightgreen",1);
makeEllipse(100,80,35,10,"lightgreen",1);
makeRect(75,80,50,5,"black",1);
makeEllipse(100,60,10,35,"lightgreen",1);
makeCircle(85,50,10,"white",1);
makeCircle(115,50,10,"white",1);
makeCircle(85,50,5,"black",1);
makeCircle(115,50,5,"black",1);
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,200,100,"lightgreen",1);
    makeCircle(105,50,30,"black",1);    
    makeCircle(105,50,27,"green",1);
    makeCircle(105,50,24,"gray",1);
    makeCircle(105,50,22,"black",1);
    makePolygon("96,30 114,30 105,50","#bfff00", 1);
     makePolygon("96,70 114,70 105,50","#bfff00", 1); 
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
 makeRect(0,0,200,100,"tan",1);
    makeRect(50,10,100,100,"yellow",1);
    makeRect(50,90,100, 25,"chocolate",1);
    makeEllipse(85,35,15,15,"black",1);
    makeEllipse(113,35,15,15,"black",1);
    makeEllipse(85,35,14.4,14.4,"white",1);
    makeEllipse(113,35,14.4,14.4,"white",1);
    makeEllipse(85,35,8,8,"blue",1);
    makeEllipse(113,35,8,8,"blue",1);
    makeRect(73,60,50,2,"black",1);
    makeEllipse(85,50,15,4,"black",1);
    makeEllipse(85,50,15,3,"yellow",1);
    makeRect(83,62,30,13,"white",1);
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var myNumber = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
if(myNumber < 0.33){    
    createFirstScene();
}
 else if (myNumber < 0.67){
    createSecondScene();
 }else{
     createThirdScene();
    // Else, call the function to create your third scene.
    
    
    
}
}


// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
