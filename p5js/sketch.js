function setup(){
    createCanvas(500,500);
    background(0);
    fff="yellow"
    stroke(fff);
    
    x1=width/3;
    x2=width*4/5;
    y1=height/3;
    y2=height/4;
}

function draw(){
    background(0);
    gg="yellow"
    
    if(mouseY>y2) {fill(gg);}
    else {noFill();}
    
    triangle(x1,y1,x2,y2,mouseX,mouseY);

}