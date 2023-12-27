function setup(){
    createCanvas(500,500);
    background("blue");
}
//color randam dot
function draw(){
    r = random(1,225);
    g = random(1,225);
    b = random(1,225);
    stroke(r,g,b);
    s = random(1,10);
    x = random(0,width);
    y = random(0,height-x);
    strokeWeight(s);
    point(x,y);

}

