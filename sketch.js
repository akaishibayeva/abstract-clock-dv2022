var canvasWidth = 800;
var canvasHeight = 600;
var rectX = 20;
var rectY = 0;
var rectWidth = 200;
var margin = 30;
var previousMinute;

function setup() {
	createCanvas(canvasWidth,canvasHeight); // makes an HTML canvas element width x height pixels
	previousMinute = minute();
}

function draw() {
	background(220);

	var h = map(hour(), 0, 24, 0, canvasHeight);
	var m = map(minute(), 0, 60, 0, canvasHeight);
	var s = map(second(), 0, 60, 0, canvasHeight);

	//hours
	noStroke();
	fill('rgb(144,182,288)');
	rect(rectX, rectY, rectWidth, h);

	// minutes
	rect(rectX + rectWidth + margin, rectY, rectWidth, m);

	//seconds
	rect(rectX + rectWidth * 2 + margin * 2, rectY, rectWidth, s);

	if (previousMinute != minute()) {
		console.log(minute());
		previousMinute = minute();
	}
}
