let 속도 = 0.5;   // alphabets-sample.js의 함수에서도 쓰는 글로벌 변수

function setup() {
	createCanvas(600, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	ellipseMode(CENTER);
	noStroke();
	frameRate(30);  // 프레임 속도를 낮추고 싶다면 30 이하 숫자.
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
		
	push();
	CursorIcon();
	pop();
	
	push();
	//가운데 단어
	translate(90,250);
	myAnimSWIM();
	pop();
	

	push();
	translate(300-50,300);
	strokeWeight(1);
	stroke(255);
	noFill();
	scale(5+sin(frameCount));
	rotate(tan(frameCount)*5);
	arc(50, 55, 50, 50, 0-30 ,90);
	rotate(tan(frameCount)*5);
	arc(50, 55, 60, 60, 90-30, 180);
	rotate(tan(frameCount)*5);
	arc(50, 55, 70, 70, 180-30, 270);
	rotate(tan(frameCount)*5);
	arc(50, 55, 80, 80, 270-30, 360);
	pop();
	
	
for(let i = 0; i < 300; i = i + 40) {
	//위 물결
	push();
	translate(i+200,0);
	
	push();
	translate(sin(frameCount)*20,50);
	scale(0.1,0.1-(mouseX*0.0003));
	myAnimSWIM();
	pop();
	
	push();
	translate(-sin(frameCount)*20,90);
	scale(0.1,0.1-(mouseX*0.0003));
	myAnimSWIM();
	pop();
	
	pop();
	}
	
for(let i = 0; i < 300; i = i + 40) {
	//아래 물결
	push();
	translate(i+50,500);
	
	
	push();
	translate(sin(frameCount)*20,50);
	scale(0.1,0.1+(mouseX*0.0003));
	fill('white');
	myAnimSWIM();
	pop();
	
	push();
	translate(-sin(frameCount)*20,90);
	scale(0.1,0.1+(mouseX*0.0003));
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
		translate(0, sin(frameCount*2)*40);
		fill(coolors[colorIndex]);
		myAnimRectS();
		pop();

		push();
		translate(80, 100+(sin(50+frameCount*2)*40));
		scale(1.3, -1);
		fill(coolors2[colorIndex]);
		myTriM();
		pop();

		push();
		translate(200, (sin(100+frameCount*2)*40));
		fill(coolors3[colorIndex]);
		myAnimRectI();
		pop();

		push();
		translate(420, 100+(sin(150+frameCount*2)*40));
		scale(-1.3, -1);
		fill(coolors4[colorIndex]);
		myRectW();
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