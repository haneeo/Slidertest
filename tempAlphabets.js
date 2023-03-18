/** 
여기 있는 arc_guide(), ellipse_guide(), rect_guide() 함수는 
utils.js에서 정의한 함수를 사용하는 것이다.
내가 직접 만든 알파벳 도형 함수들을 여기에 다 정리해보자.
*/
function myRectA() {
	push();
	rect_guide(50, 20, 25 * 0.5, 10);
	rect_guide(50, 40, 25, 10);
	rect_guide(50, 60, 50, 10);
	rect_guide(50, 80, 75, 10);
	rect_guide(50, 100, 100, 10);
	pop();
}
function myRectMouseA() {
    let mWidth = mouseX // constrain(mouseX, 0, 200);
    push();
    rect_guide(50, 20, 25 * 0.5 + mWidth, 10);
    rect_guide(50, 40, 25 + mWidth, 10);
    rect_guide(50, 60, 50 + mWidth, 10);
    rect_guide(50, 80, 75 + mWidth, 10);
    rect_guide(50, 100, 100 + mWidth, 10);
    pop();
}

function myCircleB() {
	// ellipse로 만든 B
	push();
	ellipse_guide(20, 40, 50, 50);
	ellipse_guide(20, 80, 50, 50);
	pop();
}

function myArcB() {
	push();
	arc_guide(0, 40, 100, 50, 270, 270+180);
	arc_guide(0, 40+60, 100, 50, 270, 270+180);
	pop();
}

function myArcD() {
	let rot = map(mouseX, 0, width, 0, 360);
	push();
	translate_guide(20, 50);
	rotate(rot);
	arc(0, 0, 150, 100, 270, 270+180);
	pop();
}

function myRectE() {
	push();
	rectMode(CORNER);
	rect(0, 0, 20, 100);
	rect(20, 0, 40, 20);
	rect(20, 40, 40, 20);
	rect(20, 80, 40, 20);
	pop();
}

function myTriM() {
	push();
	triangle(0, 100, 20, 0, 40, 100);
	triangle(40, 100, 60, 0, 80, 100);
	pop();
}

function myTriMouseM() {
	push();
	triangle(0 + mouseX, 100 + mouseY, 
					 20 + mouseX, 0 + mouseY, 
					 40 + mouseX, 100 + mouseY);
	triangle(40 + mouseX, 100 + mouseY, 
					 60 + mouseX, 0 + mouseY, 
					 80 + mouseX, 100 + mouseY);
	pop();
}

function myCircleO() {
	push();
	noStroke();
	fill(255);
	ellipse_guide(0, 0, 100, 100);
	fill(150);
	ellipse_guide(0, 0, 60, 60);
	fill(0);
	ellipse_guide(0, 0, 30, 30);
	pop();
}