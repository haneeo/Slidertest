let slider1;
let slider1_value = 0;
let slider2;
let slider2_value = 0;
let slider3;
let slider3_value = 0;
let slider4;
let slider4_value = 0;

let 속도 = 0.5;   // alphabets-sample.js의 함수에서도 쓰는 글로벌 변수

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	ellipseMode(CENTER);
	noStroke();
	frameRate(30);  // 프레임 속도를 낮추고 싶다면 30 이하 숫자.

	slider1 = createSlider(-100, 100, 1, 1);
	slider1.position(0, 20);
	
	slider2 = createSlider(-20, 20, 1, 1);
	slider2.position(0, 60);
	
	slider3 = createSlider(0, 100, 1, 1);
	slider3.position(0, 100);
	
	slider4 = createSlider(1, 5, 1, 0.1);
	slider4.position(0, 140);
	
}

let coolors = ["#3772ff","#8AE9C1","#df2935","#fdca40","#e6e8e6"];
let coolors2 = ["#8AE9C1","#df2935","#fdca40","#e6e8e6","#3772ff"];
let coolors3 = ["#df2935","#fdca40","#e6e8e6","#3772ff","#8AE9C1"];
let coolors4 = ["#fdca40","#e6e8e6","#3772ff","#8AE9C1","#df2935"];
let colorIndex = 0;

function mouseClicked() {
	colorIndex = colorIndex + 1;
	colorIndex = colorIndex % 5;
}

function draw() {
	background(0);
	// drawGrid(20);  				// 모눈종이표
	showCoordinateNum();  // 마우스 현재 위치 좌표값
	
	fill(255, 255, 255);
	text('위치', 0, 20);
	text('간격', 0, 60);
	text('속도', 0, 100);
	text('동그라미 크기', 0, 140);

	slider1_value = slider1.value(); //.value는
	slider2_value = slider2.value();
	slider3_value = slider3.value();
	slider4_value = slider4.value();
	
	push();
	CursorIcon();
	pop();
	
	push();
	//가운데 단어
	translate(width/2,height/2+slider1_value);
	scale(2);
	myAnimSWIM();
	pop();

for (let c = 0; c < 600; c = c + 100) {
	push();
	translate(width/2-300+c,height*0.7);
	strokeWeight(2);
	stroke(50);
	noFill();
	scale(1*slider4_value);
	rotate(tan(frameCount)*20);
	arc(0, 0, 50, 50, 0-30 ,90);
	rotate(tan(frameCount)*20);
	arc(0, 0, 60, 60, 90-30, 180);
	rotate(tan(frameCount)*20);
	arc(0, 0, 70, 70, 180-30, 270);
	rotate(tan(frameCount)*20);
	arc(0, 0, 80, 80, 270-30, 360);
	pop();
}
	
for(let i = 0; i < width; i = i + 40) {
	//위 물결
	push();
	translate(i+200,height*0.05);
	
	push();
	translate(sin(frameCount)*20,50);
	scale(0.1,0.1-(mouseX*0.0001));
	myAnimSWIM();
	pop();
	
	push();
	translate(-sin(frameCount)*20,90);
	scale(0.1,0.1-(mouseX*0.0002));
	myAnimSWIM();
	pop();
	
	pop();
	}
	
for(let i = 0; i < width; i = i + 40) {
	//아래 물결
	push();
	translate(i-200,height*0.75);
	
	push();
	translate(sin(frameCount)*20,50);
	scale(0.1,0.1-(mouseX*0.0001));
	myAnimSWIM();
	pop();
	
	push();
	translate(-sin(frameCount)*20,90);
	scale(0.1,0.1-(mouseX*0.0002));
	myAnimSWIM();
	pop();
	
	pop();
	}
	
	push();
	translate(0, 0);
	// animRectB();
	pop();
	
	push()
	translate(200, 100);
	// animTrigA();
	pop();
	
	push()
	translate(200, 200);
	// animA2();
	pop();
}

function myAnimSWIM() {
	push();
	translate(0, -80);
	
		push();
		translate(0-200, sin(frameCount*slider3_value)*40*slider2_value);
		fill(coolors[colorIndex]);
		myAnimRectS();
		pop();

		push();
		translate(80-200, 100+(sin(50+frameCount*slider3_value)*40*slider2_value));
		scale(1.3, -1);
		fill(coolors2[colorIndex]);
		myTriM();
		pop();

		push();
		translate(200-200, (sin(100+frameCount*slider3_value)*40*slider2_value));
		fill(coolors3[colorIndex]);
		myAnimRectI();
		pop();

		push();
		translate(420-200, 100+(sin(150+frameCount*slider3_value)*40*slider2_value));
		scale(-1.3, -1);
		fill(coolors4[colorIndex]);
		myRectW();
		pop();
	
	pop();
}

function CursorIcon() {
	
	push();
	translate(mouseX-20,mouseY-20);
	fill('#FDCA40');
	rotate(sin(frameCount)*50);
	ellipse(0,0,sin(frameCount)*50,cos(frameCount)*50);
	pop();
	
	push();
	translate(mouseX+20,mouseY+20);
	fill('#e6e8e6');
	rotate(sin(frameCount)*50);
	ellipse(0,0,sin(frameCount)*50,cos(frameCount)*50);
	pop();
	
	push();
	translate(mouseX-20,mouseY+20);
	fill('#3772ff');
	rotate(sin(frameCount)*50+90);
	ellipse(0,0,sin(frameCount)*50,cos(frameCount)*50);
	pop();
	
	push();
	translate(mouseX+20,mouseY-20);
	fill('#8AE9C1');
	rotate(sin(frameCount)*50+90);
	ellipse(0,0,sin(frameCount)*50,cos(frameCount)*50);
	pop();
}
