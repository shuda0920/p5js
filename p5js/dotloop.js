function setup() {
    // put setup code here
    createCanvas(400, 400);
    background(0);
    fill('#BA55D3');
}
function draw() {
    // put drawing code here
    var band = 16;
    
    for(var y=band; y<height; y+=16){
        for(var x=y+band; x<width-x; x+=20){
            stroke("green");
            circle(x,y,10);

        }
        
    }
}