// Created by Kyle Huang
// Follow me on Twitter: @KyleHuang16
let digits = [0,1,2,3,4,5,6,7,8,9];
let r1 = randBetweenInt(1,6);
let p //probability of winning
let char;
let fallingSpeed = 5;
let charSpeed = 20;
let charSize = 20;
let card1;
let cover;
let win_list = [];

shuffle(25);

let game_6_list = [win_list[0], win_list[1], win_list[2], win_list[3], win_list[4], win_list[5]];
let game_5_list = [win_list[6], win_list[7], win_list[8], win_list[9]];
let game_4_list = [win_list[10], win_list[11],win_list[12]];
let game_3_list = [win_list[13], win_list[14]];
let game_2_list = [win_list[15]];
let game_1_list = [win_list[16]];
let x_list = [win_list[17], win_list[18], win_list[19], win_list[20], win_list[21], win_list[22], win_list[23], win_list[24]]

let n_6_1 = game_6_list[0];
let n_6_2 = game_6_list[1];
let n_6_3 = game_6_list[2];
let n_6_4 = game_6_list[3];
let n_6_5 = game_6_list[4];
let n_6_6 = game_6_list[5];
let n_4_1 = game_5_list[0];
let n_4_2 = game_5_list[1];
let n_4_3 = game_5_list[2];
let n_4_4 = game_5_list[3];
let n_3_1 = game_4_list[0];
let n_3_2 = game_4_list[1];
let n_3_3 = game_4_list[2];
let n_2_1 = game_3_list[0];
let n_2_2 = game_3_list[1];
let n_1_a = game_2_list[0];
let n_1_b = game_1_list[0];

let d_6_1 = game_6_list[0];
let d_6_2 = game_6_list[1];
let d_6_3 = game_6_list[2];
let d_6_4 = game_6_list[3];
let d_6_5 = game_6_list[4];
let d_6_6 = game_6_list[5];
let d_4_1 = game_5_list[0];
let d_4_2 = game_5_list[1];
let d_4_3 = game_5_list[2];
let d_4_4 = game_5_list[3];
let d_3_1 = game_4_list[0];
let d_3_2 = game_4_list[1];
let d_3_3 = game_4_list[2];
let d_2_1 = game_3_list[0];
let d_2_2 = game_3_list[1];
let d_1_a = game_2_list[0];
let d_1_b = game_1_list[0];


draw_num();

let draw_list = [d_6_1, d_6_2, d_6_3, d_6_4, d_6_5, d_6_6, d_4_1, d_4_2, d_4_3, d_4_4, d_3_1, d_3_2, d_3_3, d_2_1, d_2_2, d_1_a, d_1_b];

function draw_num(){
	
	p = randBetweenInt(1,10001);

	if( p <= 2825 && p >= 1126 ){
		
		d_6_5 = x_list[0];
		d_4_1 = x_list[1];
		d_4_2 = x_list[2];
		d_3_1 = x_list[3];
		d_2_2 = x_list[4];
		d_2_1 = x_list[5];
		d_1_b = x_list[6];
		
	}else if( p <= 1125 && p >= 326){
		
		d_6_2 = x_list[0];
		d_6_5 = x_list[1];
		d_6_1 = x_list[2];
		d_4_4 = x_list[3];
		d_3_3 = x_list[4];
		d_2_1 = x_list[5];
		d_1_a = x_list[6];
		
	}else if( p <= 325 && p >= 26){

		d_6_4 = x_list[0];
		d_6_3 = x_list[1];
		d_6_1 = x_list[2];
		d_4_4 = x_list[3];
		d_3_2 = x_list[4];
		d_1_a = x_list[5];
		d_1_b = x_list[6];

	}else if( p <= 25 && p >= 16){
		
		d_6_2 = x_list[0];
		d_6_6 = x_list[1];
		d_6_1 = x_list[2];
		d_4_4 = x_list[3];
		d_2_1 = x_list[4];
		d_1_a = x_list[5];
		d_1_b = x_list[6];

	}else if( p <= 15 && p >= 6){
		
		d_6_2 = x_list[0];
		d_6_6 = x_list[1];
		d_3_1 = x_list[2];
		d_2_1 = x_list[3];
		d_2_2 = x_list[4];
		d_1_a = x_list[5];
		d_1_b = x_list[6];

	}else if( p <= 5){

		d_4_1 = x_list[0];
		d_4_3 = x_list[1];
		d_3_1 = x_list[2];
		d_3_2 = x_list[3];
		d_2_2 = x_list[4];
		d_1_a = x_list[5];
		d_1_b = x_list[6];

	}else{
		d_6_3 = x_list[0];
		d_6_6 = x_list[1];
		d_4_3 = x_list[2];
		d_3_3 = x_list[3];
		d_2_2 = x_list[4];
		d_1_a = x_list[5];
		d_1_b = x_list[6];
	}
}

function range(size, startAt = 0) {
    return [draw_list(size).keys()].map(i => i + startAt);
}

let art = "";
let m = randBetweenInt(0,9);

if(m <=1){
      
	art = "Frozen Maze";

}else{

	art = "Laser World";
}

function setup() {
	canvas = createCanvas(800, 800);
	canvas.style('z-index',1)
	// background(100);
	window.$fxhashFeatures = {

			"Your Lucky Numbers": draw_list[15] + ", " + draw_list[16] + ", " + draw_list[13] + ", " + draw_list[14] + ", " + draw_list[10] + ", " + draw_list[11] + ", " + draw_list[12] + ", " + draw_list[6] + ", " + draw_list[7] + ", " + draw_list[8] + ", "+ draw_list[9] + ", " + draw_list[0] + ", " + draw_list[1] + ", " + draw_list[2] + ", " + draw_list[3] + ", " + draw_list[4]+ ", " + draw_list[5],
			"Art theme": art
			
	}
}

function draw() {
	fill(0);
	textAlign(CENTER);
	textSize(40);
	textFont('Courier');
	text(n_6_1, 170,270);	
	text(n_6_2, 262,270);	
	text(n_6_3, 354,270);	
	text(n_6_4, 444,270);	
	text(n_6_5, 536,270);	
	text(n_6_6, 628,270);	
	text(n_3_1, 105,420);	
	text(n_3_2, 80,500);	
	text(n_3_3, 160,560);	
	text(n_1_a, 265,420);
	text(n_1_b, 360,620);
	text(n_2_1, 460,480);
	text(n_2_2, 535,450);
	text(n_4_1, 680,400);
	text(n_4_2, 705,480);
	text(n_4_3, 720,565);
	text(n_4_4, 635,590);
	
	textSize(12);
	textAlign(CENTER);
	// text("Scratch your lottery by dragging your cursor", 400,14);
	text("Scratch your lottery by dragging your cursor", 400,794);
	textSize(20);
	textAlign(RIGHT);
	text("#010" + p, 774,44);
	
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


function shuffle(num){
	let draw;
	for(i=0; i<num; i++){
		draw = randBetweenInt(1,num+1);

		while(win_list.includes(draw)){
			draw = randBetweenInt(1,num+1);
		}
		
		win_list.push(draw);
	}
}