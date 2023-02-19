// Created by Kyle Huang
// Follow me on Twitter: @KyleHuang16
let charSize = 10;
let r1 = 4;
let y = 0;
let x = 0;
let color_text = '#34F38D';
let table = "$@B%8&WM#*oahkbdpqwmZO{}[]0101010101010101?+<>i!lI;:~^`'-_,...     "
let table_num = '0123456789';
let img;
let rand;


function preload(){
	img = loadImage('./img/01.jpg');
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	frameRate(15);
	noStroke();
	textAlign(CENTER,CENTER);
	// noLoop();
	background(0);
}

function draw() {
	let alpha = [];
	let art = [];

	img.loadPixels();
	let w = width / img.width;
  let h = height / img.height;
  textSize(charSize);
	background(0);
	textFont('Courier');
	drawingContext.shadowBlur = 15; 										//glow
	drawingContext.shadowColor = color('#8DFFBB');			//glow color
	

	for(let i=0; i<img.width; i++){		

		alpha[i] = [];
		art[i] = [];	
		for(let j=0; j<img.height; j++){
			
			alpha[i][j] = 0;
			art[i][j] = 0;
			let index = (i+j*img.height)*4;
			let r = img.pixels[index+0];
			let g = img.pixels[index+1];
			let b = img.pixels[index+2];
			let lumi = r*0.3 + g*0.59 + b*0.11;
			let len = table.length;
			let charIndex = floor(map(lumi,0,255,len,0));
			let render_text = table.charAt(charIndex);

			// y++;
			// if(y >= height){
			// 	y=0;
			// }
			
			alpha[i][j] = 0.5;	
			fill(colorAlpha('#34F38D', alpha[i][j]));
			text(render_text, i*w, j*h);
			// art[i][j] = render_text;


			// if(charIndex <= 5){
			// 	render_text = table.charAt(randBetweenInt(0,5));
			// }
			// if(5 < charIndex && charIndex <= 10){
			// 	render_text = table.charAt(randBetweenInt(6,10));
			// }
			// if(10 < charIndex && charIndex <= 20){
			// 	render_text = table.charAt(randBetweenInt(11,20));
			// }
			// if(20 < charIndex && charIndex <= 30){
			// 	render_text = table.charAt(randBetweenInt(21,30));
			// }
			// if(30 < charIndex && charIndex <= 40){
			// 	render_text = table.charAt(randBetweenInt(31,40));
			// }
			// if(40 < charIndex && charIndex <= 50){
			// 	render_text = table.charAt(randBetweenInt(41,50));
			// }
			// if(50 < charIndex && charIndex <= 60){
			// 	render_text = table.charAt(randBetweenInt(51,60));
			// }
			// if(60 < charIndex && charIndex <= 70){
			// 	render_text = table.charAt(randBetweenInt(61,70));
			// }
			// if(70 < charIndex){
			// 	render_text = table.charAt(randBetweenInt(71,table.length));
			// }

			
			
		}
	}
	let z;
	z++;
	text("test", z, 100);
}

if(frameCount == 100){
	noLoop();
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
