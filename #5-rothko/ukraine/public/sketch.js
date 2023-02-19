// let img;
var frameRation = 530/800;
var brush_density;
var margin = 10;
var brush_opacity;
var stroke_height = frameRation*window.innerHeight*0.1;
var stroke_height_2 = frameRation*window.innerHeight*0.01;
var stroke_length = frameRation*window.innerHeight*0.2;
var blck_1_h;
var blck_2_h;
var blck_3_h;
var blck_4_h;
var blck_1_pos_y; 
let noiseVal;
let noiseScale = 0.02;

var scheme_bg_case_3 = [
	['#F7B00C','#F09936','#FFD07E','#F5C700']	
];

var scheme_case_3 = [
	['#006197','#0A5A80','#0074A1','#357F82','#FAC800','#FFD818','#FFDD43']
];

function setup(){
	createCanvas(frameRation*windowHeight*0.89, windowHeight*0.89);
	noStroke();
	p = 3;	//num of blocks
	v = 0;  //10 color sets from 0-9
	background(scheme_bg_case_3[v][0]);
	
}







function draw() {
		
	blck_bg_w = width;
	blck_bg_h = height;
	blck_1_width = width-margin*3;
	blck_1_height = height*0.5-5;
	blck_2_y = height*0.257;
	blck_2_height = blck_2_y + height*0.46;

	if(frameCount < 480){
		paint_horizonal (0, -10, blck_bg_w+120, blck_bg_h, scheme_bg_case_3[v][1], 0.2, stroke_height, 150,150);
		paint_vertical 	(0, 0, width, height*2, scheme_bg_case_3[v][2],0.1, stroke_length*3, stroke_height, 100, 100);
		paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_3[v][3], 0.2, stroke_height, 180,30);
		paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_3[v][1], 0.3, stroke_height, 120,150);
	}
	if(150 < frameCount && frameCount < 700){
		paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][0], 0.3, stroke_height, 150, 0, 0);
		paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][1], 0.1, stroke_height, 120, 0, 0);
		paint_vertical 	(margin, margin+70, blck_1_width, blck_1_height, scheme_case_3[v][2],0.1, stroke_length*3.8, stroke_height, 50, 0, 0);
		paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][3], 0.1, stroke_height, 120, 0, 0);
		
		paint_horizonal (margin, blck_2_y-5, blck_1_width, blck_2_height+30, scheme_case_3[v][4], 0.2, stroke_height, 150,0, 3);
		paint_horizonal (margin, blck_2_y-2, blck_1_width, blck_2_height+30, scheme_case_3[v][5], 0.2, stroke_height, 50,10, 0);
		paint_vertical 	(margin, blck_2_y+5, blck_1_width, blck_2_height+120, scheme_case_3[v][6], 0.15, stroke_length*2, stroke_height, 50, 2);
		// paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][4], 0.1, stroke_height, 120,40, 0);
												
	}

	
	//animation stop

}

function paint_horizonal(startX, startY, endX, endY, color, brush_opacity,stroke_height, brush_density, random){

	let y = 0;
	let drawWidth = randBetween(startX, endX-stroke_length+30);
	let drawHeight = randBetween(startY, endY-stroke_height);
	let x = startX + drawWidth;
	y = startY + drawHeight;
	let rand_Position = randBetween(-random, random);
	brush_horizontal(x+rand_Position-15, y+rand_Position,color,brush_opacity,stroke_length,stroke_height,brush_density);
}

function paint_horizonal_peripheral(startX, startY, endX, endY, color, brush_opacity, stroke_height, brush_density, random){
	let drawWidth = randBetween(-startX*0.1, endX);
	let drawHeight = randBetween(-startY*0.1, endY);
	let x = startX + drawWidth;
	let y = startY + drawHeight;
	let rand_Position = randBetween(-random, random);
	brush_horizontal(	x+rand_Position, y+rand_Position,color,brush_opacity,stroke_length,stroke_height,brush_density);

}

function brush_horizontal(x,y,color,brush_opacity,stroke_length, stroke_height, brush_density){
	for (i = 0; i < brush_density; i++) {
		fill(colorAlpha(color, randBetween(0.0001, brush_opacity)));
		rect(x+randBetween(-5,5), y+randBetween(0,stroke_height), stroke_length+randBetween(-5,5), randBetween(0,3));
	}
}
	
function paint_vertical(startX, startY, endX, endY, color, brush_opacity, stroke_length, stroke_width, brush_density, random){
	
	let drawWidth = randBetween(startX, endX-stroke_height+60);
	let drawHeight = randBetween(startY, endY-stroke_length);
	let x = startX + drawWidth-30;
	let y = startY + drawHeight;
	let rand_Position = randBetween(-random, random);

	for (i = 0; i < brush_density; i++) {
		brush_vertical(x+rand_Position, y+rand_Position,color,brush_opacity,stroke_length*0.5,stroke_height,brush_density)
	}
}

function brush_vertical(x,y,color,brush_opacity,stroke_length, stroke_width, brush_density){
	for (i = 0; i < brush_density; i++) {
		fill(colorAlpha(color, randBetween(0.0001, brush_opacity)));
		rect(x+randBetween(0,stroke_width), y+randBetween(-10,10), randBetween(0,3), stroke_length+randBetween(-10,10));
	}
}


// function windowResized() {
//   resizeCanvas(frameRation*windowHeight*0.8,windowHeight*0.8);
//   setup();
//   draw();
// }

function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function randBetween(min,max){
	return min + (max - min) * fxrand();
}

function randBetweenInt(min,max){
	return Math.floor(min + (max+1 - min) * fxrand());
}
