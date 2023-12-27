let toggle=0;
const toggleColor=6;
function setup() {
    createCanvas(800, 800);
    colorMode(HSB, 360, 100, 100, 1);
    background(0);
    angleMode(DEGREES);
  }
  
  function drawflower() {
    x0=random(10,40);
    x1=random(40,70);
    y1=random(50,90);
    if (mouseIsPressed) {     
      let rd = floor(random(3, 11));
      for(let u=0; u<rd; u++){
        for (let i = 0; i < rd; i++) {
          let j = 360 / rd;
          fill(toggle*360/toggleColor,100,100,0.1);
          stroke(50,100,100,0.1);
          push(); // 保存當前的變換狀態
          translate(mouseX,mouseY);
          rotate(i*j);
          ellipse(x0, x1, x0, y1);
          pop(); // 恢復先前的變換狀態
        }
        x0=x0-5;
        x1=x1-10;
        y1=y1-12;
      }
      
    }
  }
  
  function draw() {
    drawflower();
    toggle=(toggle+20)%toggleColor;
  }