// Created by Kyle Huang
// Follow me on Twitter: @KyleHuang16

let a = fxrand();
function setup(){
  	createCanvas(windowWidth,windowHeight,WEBGL);
  	// createGraphics(windowWidth,windowHeight,P2D);
  	background(255);
  	noLoop();
}

function draw(){
	let color = [	
		['#f9c74f','#f3722c','#f8961e','#f9844a','#f9c74f','#90be6d','#43aa8b','#4d908e','#577590','#277da1','#ffcbf2','#f3c4fb','#ecbcfd','#e5b3fe','#e2afff','#deaaff','#d8bbff','#d0d1ff','#c8e7ff','#c0fdff'],
		['#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#1e88e5','#1e88e5','#1565C0','#0d47a1','#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#1e88e5','#1e88e5','#1565C0','#0d47a1'],
		['#fbf8cc','#fde4cf','#ffcfd2','#F1C0E8','#CFBAF0','#A3C4F3','#90DBF4','#8EECF5','#98F5E1','#B9FBC0','#ffcbf2','#f3c4fb','#ecbcfd','#e5b3fe','#e2afff','#deaaff','#d8bbff','#d0d1ff','#c8e7ff','#c0fdff'],
		['#0466c8','#0353a4','#023e7d','#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#83c5be','#ffcbf2','#f3c4fb','#ecbcfd','#e5b3fe','#edede8','#eeddd3','#f0efeb','#fff1e6','#eddcd2','#e8d1c5'],
		['#0081a7','#00afb9','#fdfcdc','#fed9b7','#f07167','#22577a','#38a3a5','#57cc99','#80ed99','#c7f9cc','#0466c8','#0353a4','#023e7d','#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#83c5be'],
		['#054a91','#3e7cb1','#81a4cd','#dbe4ee','#f17300','#f79256','#fbd1a2','#7dcfb6','#00b2ca','#1d4e89','#054a91','#3e7cb1','#81a4cd','#dbe4ee','#f17300','#f79256','#fbd1a2','#7dcfb6','#00b2ca','#1d4e89'],
		['#e8d1c5','#eddcd2','#fff1e6','#f0efeb','#eeddd3','#edede8','#e8d1c5','#eddcd2','#fff1e6','#0466c8','#f9c74f','#f3722c','#f8961e','#f9844a','#f9c74f','#90be6d','#43aa8b','#4d908e','#577590','#277da1'],
		['#f1e3f3','#c2bbf0','#8fb8ed','#62bfed','#3590f3','#64a6bd','#90a8c3','#ada7c9','#d7b9d5','#f4cae0','#f1e3f3','#c2bbf0','#8fb8ed','#62bfed','#3590f3','#64a6bd','#90a8c3','#ada7c9','#d7b9d5','#f4cae0'],
		['#f5f100','#cada16','#ffa126','#c35806','#ea5b0c','#ff7e63','#dc4558','#cc608e','#f5f100','#cada16','#ffa126','#c35806','#ea5b0c','#ff7e63','#dc4558','#cc608e','#f5f100','#cada16','#ffa126','#c35806']
	]
	let blocks = int(a*100);
	if(blocks <= 0){
		blocks = 1;
	}
	let length = (height*0.8)/blocks;
	for(let b=0; b<blocks; b++){
		for(let i = width/10; i < width*0.9+1; i++){
			let colorRange = fxrand()*20;
			stroke(color[int(a*9)][int(colorRange)]);	
			line(i-width/2, 0.1*height+b*length-height/2, -1, i-width/2, 0.1*height+b*length+length-height/2,-1);
		}
	}

	fill(255);
	let h = width*0.6182*(a)*0.2;
	let p = a;
	if(p>0.1){
		rect(0-h/2,0-h/2,h,h);		
	}
	
}