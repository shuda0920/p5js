function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    angleMode(DEGREES);

    
    
    text("輸入多邊形的顏色.", 280, 290); 

    input = createInput();
    input.position(290, 300);
    input.size(70);
    fill(255);
    
    

    text("輸入多邊形的邊數.", 280, 345); 

    inputInt = createInput();
    inputInt.position(290, 380);//按件框
    inputInt.size(70);
    fill(255);

    
    buttonSubmit = createButton("輸入");

    buttonSubmit.position(360, 360);
    buttonSubmit.mousePressed(drawPolygon);
    
    
    noFill();
}
function drawPolygon() {
    // put drawing code here
    background(0);

    x = width*0.5;
    y = height*0.5;
    var numEdges = int(inputInt.value());
    var colorp=input.value();
    r = 150;
    d = 180;
    
    stroke(colorp);
    beginShape();
    for (var i=0; i<=numEdges; i++) {
        sx = x + r*sin(d);
        sy = y + r*cos(d);
        vertex(sx, sy);
        d += (360/numEdges);
    }
    endShape();

    text("輸入多邊形的邊數.", 280, 345);
    text("輸入多邊形的顏色.", 280, 290); 
}