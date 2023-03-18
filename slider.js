let slider1;
let slider1_value = 0;
let slider2;
let slider2_value = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();

	textSize(20);
	
	/* slider */
	slider1 = createSlider(0, 90, 1);
	slider1.position(width-150, 20);
	
	slider2 = createSlider(0, 90, 1);
	slider2.position(width-150, 60);
}

function draw() {
	background(100);

	// 슬라이더 메뉴
	text('슬라이더 1', width-150, 20);
	text('슬라이더 2', width-150, 60);
  slider1_value = slider1.value();  // 다른 정수나 소수를 곱해서 크거나 작은 숫자 범위로 계산 가능.
	// console.log(slider1_value);
	slider2_value = slider2.value();

	// 회전
	push();
	rotate(slider1_value);
	for(let i = 0; i < width - 200; i = i + 100) {
		push();
		translate(i, 20);
		renderTriM();
		pop();
	}
	pop();
	
	// 이동
	push();
	for(let i = 0; i < width - 200; i = i + 100) {
		push();
		translate(i, slider2_value);
		renderTriM();
		pop();
	}
	pop();
	
	// 삼각함수 원형 배치 응용
	/*
	let radius = slider3_value;
	push();
	forUnitCircle(radius);
	pop();
	*/
}

function forUnitCircle() {
	
	
}