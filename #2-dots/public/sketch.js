// Created by Kyle Huang
// Follow me on Twitter: @KyleHuang16

function randBetween(min,max){
	return min + (max - min) * fxrand();
}
function randBetweenInt(min,max){
	return Math.floor(min + (max - min) * fxrand());
}//does not include max

let iteration = 80;						//200
let points = [];
let v = randBetweenInt(11,12);		//up to 15
let math = randBetweenInt(0,5);	//angle behavior, up to 5
let show = randBetween(0,1);		
let colorSet = [	
	['#ECFFE7','#B9FEC3','#8EFCC5','#42E4FA','#0D6FF2','#0020DF','#020097','#050033'],
	['#FFFffF','#EEFE9E','#CDFF7E','#6EFA44','#19F621','#07EC3D','#00D352','#048740'],
	['#FFfffF','#FF9E9E','#FE7E7E','#FC4244','#F61516','#EC0002','#D20001','#870000'],
	['#FFFFFF','#FFDFCF','#FEC1A0','#FFBC35','#F9B013','#F0C900','#CECF03','#96A301'],
	['#FFFFFF','#FFE6CF','#FEFEA0','#62FE4E','#17F985','#01F1D7','#02B5D0','#037DA3'],
	['#FFFFFF','#FFE6CF','#FEFEA0','#4CFDCA','#1347F8','#6D02F1','#B002D0','#A2029E'],
	['#FFFFFF','#CFE4FE','#A0B0FE','#804DFD','#A312F9','#CC01F1','#CB00D0','#A2029E'],
	['#FFFFFF','#C5C5C5','#827F7F','#707070','#5D5D5D','#3E3E3E','#272727','#131313'],
	['#FFFFFF','#F1F1F1','#E4E4E4','#C2C2C2','#B4B4B4','#959595','#7C7C7C','#272727'],
	['#FFFFFF','#F1EF99','#F1E699','#E8D48A','#E88AE7','#DE8AE8','#972FA8','#6B0F97'],
	['#FFFFFF','#F6E2B8','#C65F64','#84577C','#84577C','#343644','#343644','#343644'],
	['#FFFFFF','#ECECEC','#ffffff','#F5D063','#E6AF31','#E6AF31','#5EFFEE','#91FF7B'],
	['#FFFFFF','#FFDCBF','#4792AF','#4792AF','#4792AF','#226288','#226288','#F2FF99'],
	['#FFFFFF','#FFE08C','#FFF80A','#FFBD0A','#E92A13','#E94113','#4DD58C','#42892E'],
	['#FFFFFF','#D1FFE9','#A2EEFF','#93E1F2','#FEF9EF','#FEF9EF','#FE855F','#FFE442']
];	//14column
let bg = ['#1A1E3F','#11232D','#3E1212','#063045','#081014','#1D1F38','#EAE780','#000000','#F0F0F0','#441B42','#343644','#40659D','#E3C3A8','#FF630A','#FEF9EF'];
let sq = ['#B9FEC3','#FFC159','#FE7E7E','#FFFFFF','#62FE4E','#FEE1CF','#A312F9','#ffffff','#000000','#FFB4BB','#F6E2B8','#E67C7C','#226288','#ffffff','#FE855F']

//fx feature discription
let mathName = ['cos & sin', 'arcsin & cos','tan','cos & atan', 'sin & cos']; 
let rarity;
if (show>=0.05) {
	
	rarity = "Common";
	sqShow = "False";

} else {
	
	rarity = "Rare"
	sqShow = "True";

}

function setup() {
	createCanvas(windowWidth, windowHeight);  
	background(bg[v]);
	let density = height*randBetween(0.08,0.3); // density of dots
	let space = width/density;
	frameRate(24);
	noiseSeed(fxrand()*10000); //make sure noise is the same as the same fxrand
	for(var x=0; x<width; x+=space){
  		for(var y=0; y<height; y+=space){
 			// var p = createVector(x^random(-5,5),y^random(-5,5));
 			var p = createVector(x^randBetween(-10,10),y/randBetween(-5,5));
 			points.push(p);
  		
  		}
  	}
  
	// fill(c);	//color of dots	
  window.$fxhashFeatures = {
  	"Color set":v+1,
  	"Pattern": mathName[math],
  	"Particle Density": floor(density),
  	"Rarity": rarity,
  	"Square": sqShow
	}
	

}

function draw() {

	let radius = height*0.3; // size of circle
	let flow = 10; // length of lines
	let mult = 0.0025; // curveness of angle
	fill(255);
  noStroke(0);
	for(var i=0; i<points.length; i++){
		//how drawing behaves
		let angle = map(noise(points[i].x*mult, points[i].y*mult), 0, 1, 0, flow);
		
		//behavior
		if(math == 0){

			points[i].add(createVector(cos(angle),sin(angle)));

		}else if(math == 1){

			points[i].add(createVector(asin(angle),cos(angle)));

		}else if(math == 2){
			
			points[i].add(createVector(tan(angle),tan(angle)));

		}else if(math == 3){
			
			points[i].add(createVector(cos(angle),atan(angle)));

		}else if(math == 4){
			
			points[i].add(createVector(sin(angle),cos(angle)));

		}

		let w = randBetweenInt(0,8);
		let dotSize = randBetween(0,2.5)
		let alpha = 0.8;
		let c = colorSet[v][w];
		let dotColor = colorAlpha(c,alpha);
		fill(dotColor);	//color of dots	

		if(dist(width/2, height/2, points[i].x, points[i].y) < radius){
			ellipse(points[i].x, points[i].y, dotSize);	
		}
	
	}
	
	fill(sq[v]);
	let h = windowHeight/45;
	
	if(frameCount == iteration){
		if(show<0.9){	//sq appearance %
			rect((windowWidth-h)/2,(windowHeight-h)/2,h,h);			
			noLoop();	
		}
	}

	//white borders
	stroke(255);
	noFill();
	rect(0, 0, width, height);
	strokeWeight(width*0.2); 
	
}
console.log(v);
console.log(show);

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg[v]);
}

function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}
