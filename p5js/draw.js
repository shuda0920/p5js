let toggle=0;
const toggleColor=6;

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);//讓他變圓的
    colorMode(HSB,360,100,100,1);//讓後續程式碼遵照colormode 用 HSB 模式時，你可以指定色相（Hue）、飽和度（Saturation）和亮度（Brightness）的範圍
    
    noStroke();

}

function draw(){
    if (mouseIsPressed){
        fill(toggle*360/toggleColor,100,100,0.1);
        circle(mouseX,mouseY,30);

    }
}

function mouseClicked(){
    toggle=(toggle+1)%toggleColor;
}