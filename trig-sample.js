function setup() {
	createCanvas(600, 600);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(100);    // 배경색 코드를 비활성화: 궤적이 남음.
	let x = frameCount * 4;    // 속도 빠르게 혹은 느리게
	let y = tan(x*2) * (height*0.25); // -1 ~ 1 에다가 height/2를 곱하면? 

	// 1. 삼각함수를 시각화
	push();
	fill(200, 100, 0);
	// 3D 캔버스의 중앙은 0, 왼쪽 가로 좌표값은 0 - 너비/2
	translate(x, y + (height * 0.5));  
	// ellipse(0, 0, 20, 20);
	pop();
	
	// 2. 원형으로 배치
	push();
	translate(width*0.5, height*0.5);  // 캔버스의 중앙에 배치.
	// translate(mouseX, mouseY);
	ellipse(0,0,10);
	forUnitCircle();
	pop();
	
	// 2. 원형으로 회전
	push();
	translate(width*0.5, height*0.5);  // 캔버스의 중앙에 배치.
	translate(cos(frameCount)*80, sin(frameCount)*50);
	ellipse(0,0,20);
	pop();
	
	
	// 3. animTriM: 위 아래로 움직이는 M 모형
	push();
	translate(0, height*0.5);
	// animTriM();
	pop();
	
	// 4. animCrossDoubleTriM: M 모형을 한 번에 2개를 그린다. 반복해서 배치한다.
	for(let i = 0; i < width; i += 200) {
		push();
		translate(i, height/2 + sin(frameCount) * height/6);
		animCrossDoubleTriM();
		pop();
	}
	
}

function drawUnitCircle() {
	// radius의 값을 고정된 숫자가 아닌 마우스와 연동한다면?
	let radius = 100;
	
	push();
	translate(cos(30)*radius, sin(30)*radius);
	ellipse(0, 0, 10, 10);
	pop();

	push();
	translate(cos(60)*radius, sin(60)*radius);
	ellipse(0, 0, 10, 10);
	pop();

	push();
	translate(cos(90)*radius, sin(90)*radius);
	ellipse(0, 0, 10, 10);
	pop();
	
	// 1. 복붙을 해서 cos(), sin() 함수 안의 각도 값을 360도까지 적어보세요.

}

// 2. 반복문을 이용해서 drawUnitCircle을 다시 작성해보세요.
function forUnitCircle() {
		let radius = 50;	
		for (let i = 0; i < 360; i = i + 30){
		push();
		translate(cos(i)*radius, sin(i)*radius);
		ellipse(0, 0, 10, 10);
		pop();
		}

	
}