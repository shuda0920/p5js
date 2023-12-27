function setup(){
    createCanvas(500,500);
    background("blue");
}
//color randam dot
function draw(){
    r = random(225);
    g = random(225);
    b = random(225);
    s= random(1,10);
    strokcolor=color(r,g,b);
    x1 = width/2;
    y1 = height/2;
    e1 = random(0,width);
    e2 = random(0,height /2);

    stroke(strokcolor);
    strokeWeight(s);
    line(x1,y1,e1,e2);

}