
function renderA() {
	// A
	// scale(0.1); 
	rect_guide(10, 50, 20, 100, 20);
	rect_guide(10+20, 10, 40, 20, 0, 20, 0, 0);
	rect_guide(50+10, 20+40, 20, 80, 0, 20, 20, 20);
	rect_guide(20+15, 40+10, 30, 20);
}
function animA() {
	// A
	let aBottom = map(mouseY, 0, height, 0, 40);
	// scale(0.1); 
	rect_guide(10, 50, 20, 100, 20);
	rect_guide(10+20, 10, 40, 20, 0, 20, 0, 0);
	rect_guide(50+10, 20+40, 20, 80, 0, 20, 20, 20);
	rect_guide(20+15, 40+10 + aBottom, 60, 20);
}

function animTrigA() {
	// A
	let aBottom = sin(frameCount)*40
	// scale(0.1); 
	rect_guide(10, 50, 20, 100, 20);
	rect_guide(10+20, 10, 40, 20, 0, 20, 0, 0);
	rect_guide(50+10, 20+40, 20, 80, 0, 20, 20, 20);
	rect_guide(20+15, 50+aBottom, 60, 20);
}

// triangle, quad
function renderA2() {
	// A
	blendMode(ADD);
	push()
	noStroke();
	fill(255, 100, 100);
	translate(0, 30+sin(frameCount * 속도)*30); // y: mouseY/10 or sin(frameCount)
	triangle(30, 0, 0, 45, 60, 45);
	pop()
	
	push()
	noStroke();
	fill(0, 255, 100);
	translate(0, -30-sin(frameCount * 속도)*30);
	rect_guide(30, 50+30, 60, 60);
	pop()
}

// triangle, quad
function animA2() {
	// A
	blendMode(ADD);
	push()
	noStroke();
	fill(255, 100, 100);
	translate(0, 30+sin(frameCount * 속도)*30); // y: mouseY/10 or sin(frameCount)
	triangle(30, 0, 0, 45, 60, 45);
	pop()
	
	push()
	noStroke();
	fill(0, 255, 100);
	translate(0, -30-sin(frameCount * 속도)*30);
	rect_guide(30, 50+30, 60, 60);
	pop()

}
function renderA3() {
	rect_guide(50, 20, 25/2, 10);
	rect_guide(50, 40, 25, 10);
	rect_guide(50, 60, 50, 10);
	rect_guide(50, 80, 75, 10);
	rect_guide(50, 100, 100, 10);
}

function animA3() {
	rect_guide(50, 20, 25/2 + Math.abs(sin(frameCount * 속도))*(25/2+50), 10);
	rect_guide(50, 40, 25 + Math.abs(sin(frameCount * 속도))*50, 10);
	rect_guide(50, 60, 50, 10);
	rect_guide(50, 80, 75 - Math.abs(sin(frameCount * 속도))*50, 10);
	rect_guide(50, 100, 100 - Math.abs(sin(frameCount * 속도))*75, 10);
}
function renderArcB() {
	arc_guide(0, 40, 100, 50, 270, 270+180);
	arc_guide(0, 40+60, 100, 50, 270, 270+180);
}
function animArcB() {
	let anim = Math.abs(sin(frameCount * 속도))*80
	arc_guide(0, 40, 100-anim, 50, 270, 270+180);
	arc_guide(0, 40+60, 100-anim, 50, 270, 270+180);
}
function renderCircleB(){
	ellipse_guide(20, 40, 50, 50);
	ellipse_guide(20, 100, 50, 50);
}
function animCircleB(){
	let anim = sin(frameCount * 속도)*30
	ellipse_guide(20, 40, 30 + anim, 30+ anim);
	ellipse_guide(20, 100, 30 + anim, 30+ anim);
}
function renderRectB() {	
	rect_guide(25, 40, 50, 50, 0, 20, 0, 0);
	rect_guide(25, 100, 50, 50, 0, 20, 0, 0);
}
function animRectB() {
	// rect(25, 40, 50, 50, 0, 20, 0, 0);
	// rect(25, 100, 50, 50, 0, 20, 0, 0);
	
	let h = Math.abs(sin(frameCount * 속도))*50
	rect_guide(25, 15 + h/2, 50, h, 0, 20, 0, 0);
	rect_guide(25, 75 + h/2, 50, h, 0, 20, 0, 0);
}
function renderTriB(){
	triangle(0, 0, 50, 50/2, 0, 50);
	triangle(0, 60, 50, 60+50/2, 0, 60+50);
}
function animTriB(){
	let point = Math.abs(sin(frameCount * 속도))*50
	triangle(0, 0, 50 - point, 50/2, 0, 50);
	triangle(0, 60, 50 - point, 60+50/2, 0, 60+50);
}
function renderArcC(){
		arc_guide(0, 0, 100, 100, 45, 270+45);
}
function animArcC(){
	let anim = Math.abs(cos(frameCount * 속도))*180;
	arc_guide(0, 0, 100, 100, 45 - anim, 270+45 + anim);
}
function renderD() {
	// D
	push()
	fill(255);
	// noFill();
	arc(0, 0, 120+mouseX/5, 100, 270, 270+180, CHORD); 
	pop()
	push()
	fill(0);
	noStroke();
	ellipse((120+mouseX/5)/4, 0, mouseX/4); //  size: mouseX/4
	pop()
}
function renderMouseE(){
	push()
	fill(255, 0, 0);
	ellipse(0, 0, 10, 10);
	pop()
	
	push();
	rectMode(CORNER);   // 이 안에서만 rectMode를 바꾼다.
	let eWidth = mouseX;
	if(mouseX >= 400) {
		eWidth = 400;
	}
	rect_guide(0, -50, 10, 100);
	rect_guide(0, -50, eWidth+30, 10);
	rect_guide(0, 0, eWidth+30, 10);
	rect_guide(0, 50, eWidth+30, 10);
	pop();
}


function renderTriM(){	
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);	
}

function animTriM() {
	push();
	translate(0, sin(frameCount)*100);
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);
	pop();
}

function animCrossDoubleTriM() {
	push();
	translate(0, sin(frameCount)*40);
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);
	pop();
	
	push();
	translate(80, -sin(frameCount)*40);
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);
	pop();
}

function renderTriN(){
	triangle(0, 0, 0, 100, 70, 100);
	triangle(10, 0, 80, 0, 80, 100);	
}
function renderO(){
	ellipse_guide(0, 0, 100, 100);
}
function animTriN(){
	let h = map(mouseY, 0, height, 0, 100);
	triangle(0, 0 + h, 0, 100, 70, 100);
	triangle(10, 0, 80, 0, 80, 100 -h);	
}
function renderRectT(){
	rect_guide(25, 0, 80, 25);
	rect_guide(25, 50, 25, 80);
}

function renderTriW() {
	triangle(0, 0, 20, 100, 40, 0);
	push()
	translate(0-mouseX/10, 0);
	triangle(40, 0, 60, 100, 80, 0);
	pop()
}

