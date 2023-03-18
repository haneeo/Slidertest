
function myRectA() {
	push();
	rect(50, 20, 25 * 0.5, 10);
	rect(50, 40, 25, 10);
	rect(50, 60, 50, 10);
	rect(50, 80, 75, 10);
	rect(50, 100, 100, 10);
	pop();
}

function myEllB() {
	ellipse(30, 25, 36, 36);
	ellipse(30, 77.5, 55, 55);
}

function myArcC() {
	push();
	arc(55,55,100,100,45,315);
	pop();
}

function myArcD() {
	let rot = map(mouseX, 0, width, 0, 360);
	push();
	translate(0,60);
	rotate(rot);
	arc(0,0,120,100,270,90);
	pop();
}

function myTriM() {
	push();
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);
	pop();
}

function myRectE() {
	push();
	rectMode(CORNER);
	noStroke();
	rect(0, 0, 20, 100);
	rect(20, 0, 40, 20);
	rect(20, 40, 40, 20);
	rect(20, 80, 40, 20);
	rect(60, 0, mouseX, 20);
	rect(60, 40, mouseX, 20);
	rect(60, 80, mouseX, 20);
	pop();
}


function myRectW() {
	
	push();
	shearX(PI / 0.2);
	rect(12.5,50,25,100);
	pop();
	
	push();
	shearX(PI / -0.45);
	rect(65,50,4,100);
	pop();
	
	push();
	translate(64,0);
	shearX(PI / 0.2);
	rect(12.5,50,25,100);
	pop();
	
	push();
	translate(64,0);
	shearX(PI / -0.45);
	rect(65,50,4,100);
	pop();
}

function myRectI() {
	push();
	translate(0+mouseX,0);
	circle(15,15,30);
	rect(15,70,30,60);
	pop();
}

function myAnimRectI() {
	push();
	translate(0,0);
	circle(15,15,30);
	rect(15,70,30,60);
	pop();
}

function myRectS() {
	
	push();
	rotate(0+mouseX);
	
	push();
	rect(30,25,60,50,25,0,0,25);
	fill("black");
	rect(42.5,37.5,35,25,20,0,0,20);
	pop();
	
	push();
	translate(20,50);
	rect(20+5,25,60,50,0,25,25,0);
	fill("black");
	rect(7.5+5,12.5,35,25,0,20,20,0);
	pop();
	
	pop();
}

function myAnimRectS() {
	
	push();
	// rotate(0+mouseX);
	
	push();
	rect(30,25,60,50,25,0,0,25);
	fill("black");
	rect(42.5,37.5,35,25,20,0,0,20);
	pop();
	
	push();
	translate(20,50);
	rect(20+5,25,60,50,0,25,25,0);
	fill("black");
	rect(7.5+5,12.5,35,25,0,20,20,0);
	pop();
	
	pop();
}