// Created by Kyle Huang
// Follow me on Twitter: @KyleHuang16
let charSize = 20;
let r1 = 1;
let y = 0;
let digits = [0,1,2,3,4,5,6,7,8,9];

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	frameRate(20);
	// background(100);
	// window.$fxhashFeatures = {

	// 		"Your Lucky Numbers": draw_list[15] + ", " + draw_list[16] + ", " + draw_list[13] + ", " + draw_list[14] + ", " + draw_list[10] + ", " + draw_list[11] + ", " + draw_list[12] + ", " + draw_list[6] + ", " + draw_list[7] + ", " + draw_list[8] + ", "+ draw_list[9] + ", " + draw_list[0] + ", " + draw_list[1] + ", " + draw_list[2] + ", " + draw_list[3] + ", " + draw_list[4]+ ", " + draw_list[5],
	// 		"Art theme": art
			
	// }
}

function draw() {
	background(0);
	textSize(charSize);
	let verticle_num = 30;
	let horizontal_num = floor(40/r1);
	let column_num = r1;
	let column_margin = 30 + charSize * horizontal_num;
	let center_y = (height + verticle_num * charSize)/2;
	let center_x = (width - horizontal_num * charSize - (column_num-1) * column_margin)/2;
	// y += fallingSpeed;
	if(y >= height){
		y=0;
	}
	fill(255);
	text("Frame Count: " + frameCount,10,30);			
	// text("Digits per column: " + horizontal_num,10,55);			
	// text("column: " +column_num,10,80);

	fill(colorAlpha('#34F38D', randBetween(0.6,1)));
	textFont('Andale Mono');
	drawingContext.shadowBlur = 10; 										//glow
	drawingContext.shadowColor = color('#8DFFBB');			//glow color
	textSize(10);
	textLeading(7);
	text(`



	`, 100,100);

	// for(c=0; c<column_num; c++){
	// 	for(a=0; a<horizontal_num; a++){
	// 		for(b=0; b<verticle_num; b++){
		
	// 			fill(colorAlpha('#34F38D', randBetween(0.6,1)));
	// 			textFont('Andale Mono');
	// 			drawingContext.shadowBlur = 10; 										//glow
	// 			drawingContext.shadowColor = color('#8DFFBB');			//glow color
	// 			text(digits[randBetweenInt(0,10)].toString(), center_x + a*charSize + c*column_margin, center_y-b*charSize);
		
	// 		}	
	// 	}
	// }

	if(frameCount == 100){
		noLoop();
	}


}


function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function randBetween(min,max){
	return min + (max - min) * fxrand();
}

function randBetweenInt(min,max){
	return Math.floor(min + (max - min) * fxrand());
}//does not include max
