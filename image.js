let img;
function preload() {
	img = loadImage('Rain.jpg');
}

function setup() {
	createCanvas(600,800);
	// image.resize(width, height);
	image(img, 0, 0, width, height);
	img.loadPixels();
	
	rectMode(CENTER);
	angleMode(DEGREES);
}
