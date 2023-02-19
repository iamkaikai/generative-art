let opacity,cellW,cellH;
let p = randBetween(0,1);
let case1length = 20;
let grid = [];
let blockArray = [];
let progress = 0;
let gridDivX = 1200;
let gridDivY = 800;
let x =0 ;
let colorV = 0;
let cSet = randBetweenInt(0,119);
let loop = 0;
let autoCount = 0;
let gradientSet = randBetweenInt(0,2);
let bgPattern = randBetweenInt(0,1);
let mainPattern = randBetween(0,1);
let colorPattern = randBetween(0,1);
let sizePattern = randBetween(0,1);
let gradientPattern = randBetween(0,1);
let size1List = [2,3,7,8,15,40,130,160,180,220,300]
let size1 = size1List[randBetweenInt(0,10)];
let size2 = randBetween(20,80);
let size3 = randBetween(1,3);
let size4 = randBetween(10,50);
let size5 = randBetween(5,30);
let bSize1 = [size1,size2,size3];
let bSize2 = [size4,size5,1];


function preload() {
  img = loadImage('./noise.png');
}

function setup() {
	pixelDensity(4);
	canvas = createCanvas(1200, 800);
	noiseSeed(randBetweenInt(0,10000));
	background(bg[cSet]);
	initial();
	for(var i = 0; i < bSize1.length; i++){
		for (var j = 0; j < bSize2.length; j++) {
			console.log('loop: '+loop)
			loop+=1;
			r1 = bSize1[i];
			r2 = bSize2[j];
			blockFill([r1,r2],[r2,r1]);
		}
	}

	// marks();
	noLoop();
}

function draw() {

	//background pattern
	fromBG = strokeColor[cSet][randBetweenInt(0,8)];
	toBG = strokeColor[cSet][randBetweenInt(0,8)];
	offset1 = randBetween(-width/2,0);
	offset2 = randBetween(0,width/1.5);
	width1 = randBetween(0,width);
	width2 = randBetween(0,width);

	for(let i=0; i<height; i++){
		noStroke();
		m = map(i, 0,height, 1,0);
		w = map(i, 0,height, 0,width);
		w2 = map(i, 0,height, 0,width/2);
		interBG = lerpColor(colorAlpha(fromBG,0), colorAlpha(toBG,0.15), m);
		fill(interBG);

		if(bgPattern == 0 && mainPattern <= 0.3){
			rect(i+offset1,i,width1,1);
		}else if(mainPattern > 0.3 && mainPattern <= 0.6){
			rect(0,i,width,1);
		}else if(mainPattern > 0.6 && mainPattern <= 0.8){
			rect(w2,0,1,height);
		}else{
			rect(0,i,width/2,1);
		}

		m = map(i, 0,height, 0,1);
		interBG = lerpColor(colorAlpha(fromBG,0), colorAlpha(toBG,0.1), m);
		fill(interBG);
		if(bgPattern == 0 && mainPattern <= 0.7){
			rect(i+offset2,i,width2,1);			
		}else if(mainPattern > 0.3 && mainPattern <= 0.6){
			rect(width/2,i,width/2,1)			
		}else{
			rect(width/2,i,width/2,1);
		}

	}

	// blocks
	for(let i=0; i<blockArray.length; i++){	
		blockArray[i].render();	
		if(i %150 >= 146){
			if(mainPattern <= 0.7){
				// blockArray[i].render4();
			}else if(mainPattern > 0.8){
				// blockArray[i].render4();	
			}
		}else if(i %3 == 0){
			if(mainPattern <= 0.7){
				// blockArray[i].render();
			}
		}else	if(i %8 == 0){
			if(mainPattern <= 0.9){
				// blockArray[i].render2();
			}
		}else if(i %4 >= 3){
				// blockArray[i].render3();	
		}
	}

	noStroke();	

	//random gradient blocks
	for(let i=0; i<8; i+= 1/8){

		if(gradientSet == 0){
			r1 = randBetweenInt(100,255);
			g1 = randBetweenInt(100,255);
			b1 = randBetweenInt(100,255);
		}else if(gradientSet == 1){
			r1 = randBetweenInt(255,255);
			g1 = randBetweenInt(255,255);
			b1 = randBetweenInt(255,255);
		}else{
			r1 = randBetweenInt(50,100);
			g1 = randBetweenInt(50,100);
			b1 = randBetweenInt(50,100);
		}

		r2 = randBetweenInt(50,250);
		g2 = randBetweenInt(50,250);
		b2 = randBetweenInt(50,250);
		x = randBetween(0,width);
		y = randBetween(0,height);
		w = randBetween(2,120);
		h = randBetween(randBetween(5,20),randBetween(40,240));		
		if(gradientPattern < 0.7 && size1 > 80){
			// gradient(x,y,w,h,r1,g1,b1,r2,g2,b2,0.6,HARD_LIGHT);
		}
	}

	//stars
	for(let i=0; i<80; i++){
		x = randBetween(0,width);
		y = randBetween(0,height);
		sizeAmp = randBetween(0.5, 2);
		radius1 = 0.3*sizeAmp;
		radius2 = 12*sizeAmp;
		npoints = 4;
		opacity = randBetween(0.45, 0.8);
		// star(x, y, radius1, radius2, npoints, opacity);
	}
	
	//noise
	blendMode(SOFT_LIGHT);
	tint(255, 65);
	image(img, 0, 0, width, height);

	//division lines
	fill(colorAlpha(bg[cSet]),0.1);
	noStroke();
	
	//vertical lines
	for (var i = 0; i < 16; i++) {
		randDx = randBetween(0,2)*width*0.618^randBetweenInt(0,5); 
		randDy = 0; 
		rect(randDx,randDy,0.2,height)
	}
	//horizontal lines
	for (var i = 0; i < 14; i++) {

		fill(strokeColor[cSet][7]);
		randDx = 0 
		randDy = randBetween(-0.5,2)*height*0.618^randBetweenInt(0,4);; 
		stroke(bg[cSet]);
		strokeWeight(0.7);
		beginShape(LINES);
		randStart = randBetween(0,width);
		randEnd = randBetween(10,width/2);
		for(var j = 0+randStart; j<randStart+randEnd; j++){
			vertex(j, randDy+noise(j)*5);
		}
		endShape();
	}

	//top and bottom division
	// gradient(0,0,width, height/2, 50,50,50, 255,255,255, 0.1, HARD_LIGHT)
	// gradient(0,height/2,width, height/2, 255,255,255, 50,50,50, 0.1, HARD_LIGHT)

	console.log('size1: ' + size1);
	console.log('size2: ' + size2);
	console.log('size3: ' + size3);
	console.log('size4: ' + size4);
	console.log('size5: ' + size5);
	console.log('sizePattern: ' + sizePattern);
	console.log('mainPattern: ' + mainPattern);
	console.log('colorPattern: ' + colorPattern);
	console.log('gradientSet: ' + gradientSet);
	autoSave();
	fxpreview();
	////////resize work////////////;
	finalResize();

}	

function finalResize(){
	var workWidth = 1200;
	var workHeight = 800;
	var workRatio = workWidth/workHeight;
	var screenRatio = window.innerWidth/window.innerHeight;
	var cv =  document.getElementById("defaultCanvas0");
	var wd = cv.style;
	wd.width = null;
	wd.height = null;

	if(screenRatio > workRatio){
		var w = 100*workRatio;
		wd.width = w + 'vh';
		wd.height = '100vh';
	}else{
		var h = 100/workRatio;
		wd.width = '100vw';
		wd.height = h  +'vw';
	}
	
}
function star(x, y, radius1, radius2, npoints, opacity) {
	
	this.c1 = strokeColor[cSet][randBetweenInt(0,8)]
	this.c2 = strokeColor[cSet][randBetweenInt(0,8)]
	f = [ bg[cSet],'#ffffff', this.c1, this.c2];
	colorF = f[randBetweenInt(0,3)];
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  noStroke();
  fill(colorAlpha(colorF, opacity));
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function gradient(x,y,w,h,r1,g1,b1,r2,g2,b2,opacity,mode){

	let from = color(r1,g1,b1);
	let to = color(r2,g2,b2);
	for(let i=0; i<h; i++){
		m = map(i, 0, h, 0, opacity);			
		let interA = lerpColor(from, to, m);
		r = interA.levels[0];
		g = interA.levels[1];
		b = interA.levels[2];
		o = m;
		if(mode == 'none'){

		}else{
			blendMode(mode);
		}
		fill('rgba('+r+','+g+','+b+', '+ o +')');
		rect(x,y+i,w,1);
	}

}

function initial(){
	grid = [];
	cellW = width/gridDivX;
	cellH = height/gridDivY;
	for(let x=0; x<gridDivX; x++){
		let col = []
		for(let y=0; y<gridDivY; y++){
			col.push(0);
		}
		grid.push(col);	
	}
	// console.log('grid'+grid);
}

function marks(){
	for(let x=0; x<gridDivX; x++){
		for(let y=0; y<gridDivY; y++){
			if(grid[x][y]==0){
				noFill();
				stroke(255);
				strokeWeight(2);
				point(x*cellW+cellW/2, y*cellH+cellH/2);

			}
		}
	}
}

function block(x,y,w,h){
	if(cSet == 90){
		blendMode(EXCLUSION);
	}
	this.pattern = randBetweenInt(0,1)
	this.x = x*cellW;
	this.y = y*cellH;
	this.w = w*cellW;
	this.h = h*cellH;
	this.c1 = strokeColor[cSet][randBetweenInt(0,8)]
	this.c2 = strokeColor[cSet][randBetweenInt(0,8)]
	this.step = randBetween(1,randBetween(0.5,0.001));
	let from, to;
	/////////// check here //////////	
	if(colorPattern > 0.6){	
		from = colorAlpha(this.c1,1);
		to = colorAlpha(this.c2,1);
	}else if(colorPattern < 0.4){
		from = colorAlpha(strokeColor[cSet][0],1);
		to = colorAlpha(strokeColor[cSet][0],0.2);
	}else{
		r1 = randBetweenInt(120,200);
		g1 = randBetweenInt(120,200);
		b1 = randBetweenInt(120,200);
		r2 = randBetweenInt(180,250);
		g2 = randBetweenInt(180,250);
		b2 = randBetweenInt(180,250);
		from = color(r1,g1,b1);
		to = color(r2,g2,b2);
	}

	this.render = function(){
		stroke(0);
		strokeWeight(0.5);
		fill(255)
		rect(this.x,this.y,this.w,this.h);

		let extraLength = randBetweenInt(0,10);
		//decide color direction
		if(this.pattern == 1){
			for(let i=0; i<this.h; i+=this.step){
				m = map(i, 0, this.h, 0, 1);			
				let interA = lerpColor(from, to, m);
				stroke(interA);
				// line(this.x, this.y+i, this.x+this.w+extraLength, this.y+i);					
			}
		}else{
			for(let i=0; i<this.w;  i+=this.step){
				m = map(i, 0, this.w, 0, 1);			
				let interA = lerpColor(from, to, m);
				stroke(interA);
				// line(this.x+i, this.y, this.x+i, this.y+this.h+extraLength);					
			}
		}
	}

	//horizontal lines
	this.render2 = function () {
		r1 = randBetween(0,80);
		randWidth = randBetween(0.5,2);
		// this.h *=0.1;
		this.w *=randWidth;	
		for(let i=0; i<this.w; i++){
				m = map(i, 0, this.h, 0, 1);			
				let interA = lerpColor(from, to, m);
				stroke(interA);
				line(this.x+i+r1, this.y+r1, this.x+this.h+i+r1, this.y+r1);
		}
	
	}

	//vertival lines
	this.render3 = function () {
		r2 = randBetween(-50,50);
		randWidth = randBetween(0.05,0.3);
		this.w *=randWidth;	
		for(let i=0; i<this.h*10; i++){
				m = map(i, 0, this.h, 0, 1);			
				let interA = lerpColor(from, to, m);
				stroke(interA);
				line(this.x+r2, this.y+i+r2, this.x+this.w+r2, this.y+i+r2);
		}
	}
	//dots
	this.render4 = function () {
		// blendMode(SOFT_LIGHT);
		f = [ bg[cSet], this.c1, this.c2];
		colorF = f[randBetweenInt(0,2)];
		opacity4 = randBetween(0,0.2);
		randRadius = randBetween(width/8,height);
		randX4 = randBetween(-2,2)*width*0.618^randBetween(0,4);
		randY4 = randBetweenInt(-2,2)*height*0.618^randBetween(0,4);
		direction = randBetweenInt(0,1);

		if(direction == 0){
			for(i=PI*1/2; i<PI*(3/2); i+=1/randRadius){
				strokeWeight(1);
				c = map(i, PI*1/2, PI*(3/2), 0.01, 0.1*opacity4);
	    	stroke(colorAlpha(colorF,c));  
	    	line(randX4+cos(i)*randRadius, randY4+sin(i)*randRadius, randX4-cos(i)*randRadius, randY4+sin(i)*randRadius);
			}			
		}else{
			for(i=PI*1/2; i<PI*(3/2); i+=1/randRadius){
				strokeWeight(1);
				c = map(i, PI*1/2, PI*(3/2), 0.01, 0.1*opacity4);
	    	stroke(colorAlpha(colorF,c));  
	    	line(randX4+cos(i)*randRadius, randY4+sin(i)*randRadius, randX4+cos(i)*randRadius, randY4-sin(i)*randRadius);
			}			
		}
	}
}

function blockFill(sizeX, sizeY){
	let blockW, blockH;

	//////////check here//////////////
	let randX = randBetweenInt(1,12);
	let randY = randBetweenInt(1,12);
	// let randX = 6;
	// let randY = 6;
	
	let progressTotal = ((gridDivX-max(sizeX)+1)/randX)*((gridDivY-max(sizeY)+1)*randY);
	
	for(let x=0; x<gridDivX-max(sizeX)+1; x+=randX){	

		for(let y=0; y<gridDivY-max(sizeY)+1; y+=randY){
			
			progress += 1;

			//generate width and height
			let fit = 1;	
			blockW = randBetweenInt(min(sizeX),max(sizeX));
			blockH = randBetweenInt(min(sizeY),max(sizeY));

			if(x == gridDivX-max(sizeX)){
				blockW = max(sizeX);
			}			
			if( x+blockW > gridDivX || y+blockH > gridDivY){
					fit = 0;
			}
			
			
		
			//check if they are overlaping to each other
			if(fit){
				for(let x2=x; x2<x+blockW; x2++){
					for(let y2=y; y2<y+blockH; y2++){
						if(x2>gridDivX || y2>gridDivY){
							break
						}
						if(grid[x2][y2] == 1){
							fit = 0;
						}
					}
				}
			}

			//secure the size and fill with 1 in the grid
			if(fit){
				for(let x2=x; x2<x+blockW; x2++){
					for(let y2=y; y2<y+blockH; y2++){
						grid[x2][y2] = 1;
					}
				}
				blockArray.push(new block(x, y, blockW, blockH));		
			}

		}
	}
}




function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function randBetween(min,max){
  return min + (max - min) * fxrand();
}

function randBetweenInt(min,max){
  return Math.floor(min + (max+1 - min) * fxrand());
}//does not include max

function frameStop(num){
  if(frameCount == num){
  	noLoop();
  	console.log('Frame Stop!');
  };
}
function screenshot(num){
	if(frameCount == num){
    fxpreview();
  };
}
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
function autoSave(){
	if(autoCount > 255){
		return;
	}
	save(canvas, 'size1-'+size1+'-image.jpg');
	autoCount += 1;
	setTimeout(() => {
		clear();
		frameCount = 0;
		document.location.reload()
	}, 1000);
	
}
let pause = false;
function keyTyped() {
	if (key === 'p') {
		if(pause == false){
			frameRate(0);
			pause = true;
		}else{
			pause = false;
		  frameRate(60);
		}
	}
	
	if (key === 's') {
	save(canvas, 'image.jpg');
	}
}

var bg = [
	'#000000','#cda683','#e31e48','#261b17','#d8dbd8','#3c2e2b','#223d8a','#10110d','#f0e3d2','#957a87','#b0312a','#cdd1d0','#f8d2a3','#bab5b1','#e9ead8','#f9edde','#dad2af','#907868','#afa790','#e5e2db','#cdc5c0','#f3f4f6','#233535','#f2e9d8','#ded3c6','#f8f6c3','#b2afae','#d8d3ae','#d9dbda','#3361a4','#343e8a','#0d71be','#352a65','#8956a1','#065395','#d881ae','#bea4ee','#a782b4','#adcd45','#085b75','#245367','#298961','#4e8061','#052901','#d0cbb6','#3da9c6','#e3d7a5','#f5df07','#a9c6ca','#418c85','#f59b31','#e7a839','#f1cad2','#ca362d','#d93f15','#ec5050','#ffffff','#000000','#231e1b','#d0dedf','#faf4fc','#ffffff','#fefaf4','#4ccee5','#dbdbc6','#fafefb','#f2f5dc','#ffffff','#51515b','#fbd95f','#f6f6ee','#c80c13','#81589e','#caaa91','#eae9e7','#ffffff','#d09d0a','#bbcceb','#d0c2b1','#ecd873','#b88f45','#e4d0b8',
	'#f76653','#a2c3e2','#35333e','#ddc9a9','#243c35','#456460','#392d2c','#0e6499','#ffffff','#f8edd6','#0988cf','#dfd1b2','#fafafa','#b13131','#0d0d0d','#f3ffff','#fbeef6','#c83a00','#fcd5dd','#51951f','#d6f2ee','#E0C097', '#7e9ed2','#c0a9c5',
	'#b2a33c','#707c5a','#fdcb08','#040000','#1290d5','#f8f5e0','#050603','#bf8193','#191917','#040203','#9e7157','#ebecef','#d0d5d9','#e5e2dd'

];

var strokeColor = [
	['#222222', '#000000', '#111111', '#333333', '#111111', '#444444', '#000000', '#333333', '#000000'],
	['#dccebe', '#131311', '#161414', '#c19310', '#606368', '#898b94', '#4d3f3a', '#cf2d30', '#3b3d41'],
	['#eabfcf', '#d6325c', '#45387c', '#822a5e', '#d77e98', '#ca131e', '#d98aba', '#e45a90', '#1f71af'],
	['#e4d8a6', '#75b5ab', '#d8d85d', '#906a3f', '#597f67', '#ca310d', '#54989a', '#803618', '#50615e'],
	['#272826', '#cbcabf', '#5e4a44', '#6c6e68', '#f9f9ed', '#e7ad56', '#959890', '#8c8385', '#429886'],
	['#fafafa', '#332d2d', '#2975b2', '#92a857', '#f39d3e', '#ab3b40', '#e9e9e9', '#2c5880', '#57746a'],
	['#ecb0c1', '#51b7c8', '#517fba', '#09080c', '#244d89', '#7e6279', '#d03040', '#f2cf1b', '#415452'],
	['#e2cd8c', '#364b62', '#6d4c3f', '#d9814a', '#516985', '#b44937', '#a9aaa9', '#f2dd82', '#3c8458'],
	['#676062', '#eae0d2', '#576b88', '#38353a', '#bcc3cc', '#a89b90', '#a3abbd', '#b9aeaa', '#cc9486'],
	['#8b6c6e', '#130808', '#8c1211', '#dbc0ac', '#7a5259', '#e4c8a4', '#d09e89', '#9a0a0a', '#574747'],
	['#2d2424', '#a43b35', '#e1ca69', '#ab835a', '#5b3633', '#887ea6', '#dc7e4a', '#825e78', '#3f7cbf'],
	['#2e1b17', '#0183aa', '#b63a21', '#fad530', '#2da790', '#7a8c90', '#f04c19', '#204280', '#9fa9ae'],
	['#16110d', '#b3642a', '#9a302a', '#c49f26', '#f0d00c', '#efebe0', '#26a07d', '#d0b45d', '#087045'],
	['#7e828e', '#0b0f12', '#1a4352', '#b53329', '#d7ac00', '#f6f8ff', '#596d69', '#1a91af', '#44758b'],
	['#008187', '#f5606f', '#9b76a0', '#dea834', '#f9df25', '#0cbc94', '#85b9b2', '#ccc3a2', '#ea8a9f'],
	['#f7dc2b', '#3d4646', '#171316', '#1ca2b7', '#48873d', '#548b9e', '#a8190f', '#592522', '#3d4c5b'],
	['#a28574', '#e1b82a', '#a32b29', '#eee9d8', '#586365', '#e3d69d', '#c5922b', '#e4ae81', '#7db69b'],
	['#78583b', '#e72c04', '#edcfa1', '#d49059', '#ac9773', '#806757', '#73949b', '#7d9368', '#efc63b'],
	['#1c2527', '#b3ab97', '#b52d1f', '#db7923', '#e1e0dd', '#b5675d', '#f3a38e', '#73848b', '#f1e0b4'],
	['#cfcec7', '#25292f', '#d1673c', '#b2793d', '#916f7d', '#ae9f6a', '#b88fab', '#365581', '#4b9952'],
	['#645741', '#c07035', '#5a7886', '#c7a140', '#798991', '#e4e5e7', '#85989f', '#a79f9a', '#705b5c'],
	['#e2dddd', '#2d2c30', '#a09fa2', '#847b7d', '#6380b1', '#d94444', '#67676c', '#595054', '#415278'],
	['#d5c9af', '#283330', '#847a66', '#4d776c', '#8cab9b', '#544d40', '#c95e31', '#4a6364', '#8e9a9c'],
	['#3c2e21', '#e5d6c0', '#775c43', '#99846f', '#916f4f', '#faf5e7', '#a1998e', '#ae9b8d', '#646457'],
	['#ddcc86', '#39484c', '#687778', '#a86564', '#9f8a70', '#527279', '#939f9e', '#d9d8d0', '#e4e7ed'],
	['#402f35', '#d2cfa5', '#c64135', '#da8733', '#a56c5a', '#deaf56', '#82a082', '#f1f1dc', '#6a8c3f'],
	['#1f1a1e', '#d49fab', '#746d6f', '#eae6e8', '#90677d', '#504f4a', '#9d5f6f', '#e58ca0', '#9fa38a'],
	['#dfd6cd', '#3b3f4f', '#916e6f', '#a7b0b9', '#c0303b', '#949cb1', '#5a6d89', '#6a7e91', '#171017'],
	['#c6c7c1', '#1f222b', '#646a6e', '#ab515d', '#334f92', '#86736f', '#8b9194', '#a39a70', '#e6c80b'],
	['#ef8a3e', '#152d5a', '#4e77b3', '#3963a5', '#234783', '#2c5491', '#ec873e', '#f48a3d', '#a38086'],
	['#6c78b8', '#2f1f41', '#3a428b', '#57285d', '#2f2e6b', '#745598', '#3e44a4', '#464c74', '#74749c'],
	['#146ab5', '#cd9759', '#5f1e85', '#6b58ac', '#9034a4', '#4da8c3', '#dd8329', '#aca6ae', '#2b83dd'],
	['#ca458d', '#3e1d61', '#8f2d7a', '#6b226e', '#e99aac', '#1a134e', '#494c80', '#a07590', '#722c94'],
	['#6786a1', '#7bc2ce', '#267295', '#1a5d7c', '#815999', '#967eb8', '#934298', '#71a0c6', '#2f5d8b'],
	['#193ca2', '#7144e5', '#dd9829', '#3862de', '#2b43b5', '#0e7e91', '#27a3b9', '#55b3f3', '#eecb53'],
	['#a75a70', '#edcab2', '#b85f8d', '#c47f8b', '#f5f3e4', '#a44765', '#e798c2', '#ce76a5', '#77334e'],
	['#c2ace2', '#54408b', '#62725b', '#7d66ab', '#838698', '#799578', '#565b87', '#e2dae7', '#e7c4f1'],
	['#d1cdd5', '#3f600a', '#6b6775', '#83719a', '#879787', '#49623d', '#4a3f64', '#404247', '#99628a'],
	['#7cab45', '#d4dc6a', '#e9ebca', '#eaec94', '#afcb4b', '#4f8739', '#a8c580', '#5a803a', '#9cd456'],
	['#192626', '#49879e', '#206276', '#16424f', '#5d7b6f', '#255c6e', '#224535', '#28523d', '#4c5454'],
	['#c8d1de', '#113339', '#698895', '#98b4c3', '#092a1f', '#456d81', '#36606c', '#5d7269', '#a4acb4'],
	['#a2d3ae', '#539d74', '#1d6846', '#0f5441', '#c13106', '#0c3f2c', '#428f65', '#1b484d', '#f5a83b'],
	['#c5b398', '#183822', '#706d4e', '#729b7a', '#456f52', '#38523a', '#b7804c', '#eed195', '#2a5d46'],
	['#95b963', '#91bf80', '#10270f', '#7a974f', '#57813d', '#3c5e29', '#456352', '#8b9e90', '#ac9c34'],
	['#b9bba6', '#394631', '#5b633e', '#707a5b', '#e6e4dc', '#7c8a7c', '#595b4e', '#8e8b78', '#4c6064'],
	['#753101', '#4aa4b5', '#f6e3b5', '#e69405', '#f5c807', '#f5ba03', '#f4ce05', '#f2dd41', '#918c5f'],
	['#bc8eb2', '#e8af16', '#d7af7a', '#8b3175', '#f2d51b', '#9137a5', '#e89c0d', '#9a5e8e', '#ba843d'],
	['#f3c905', '#4a1708', '#9b430c', '#cf7812', '#dd9c08', '#e1bf83', '#e5ba4d', '#746454', '#ac944c'],
	['#285643', '#b9cbc4', '#ebc455', '#809d77', '#cbc895', '#d88c39', '#8e6428', '#d3821f', '#55a099'],
	['#e28e17', '#33756f', '#9b551e', '#332724', '#66725d', '#6392b8', '#504225', '#8dc7d1', '#bf380b'],
	['#f4cb22', '#eb7132', '#f2cb36', '#7f7d0e', '#eaab36', '#f46e45', '#f1d4c5', '#f5cd20', '#e77758'],
	['#ab3805', '#da9a3a', '#e0c1a8', '#d35a07', '#cfa376', '#a0723f', '#f3cd70', '#f5dabf', '#b49c94'],
	['#ffffff', '#efa39f', '#f1be71', '#e35e6b', '#ea8a5d', '#efd0af', '#f1cad2', '#96a749', '#ae9679'],
	['#e77920', '#e8d391', '#ecddcf', '#ca362d', '#e6a089', '#eab045', '#e16f66', '#877534', '#b4d4b4'],
	['#d1a0b2', '#ca3a29', '#d0657c', '#ee764e', '#c5455b', '#ed9886', '#ac1320', '#971209', '#572420'],
	['#973333', '#f07373', '#f28585', '#f49696', '#9e50ec', '#f7b9b9', '#421616', '#508eec', '#cdec50'],
	['#3e99b9', '#3788a5', '#307790', '#29667c', '#b5ddeb', '#c7e6f0', '#daeef5', '#ecf7fa', '#ffffff'],
	['#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#ffffff'],
	['#d3c09c', '#6db3be', '#3d74b0', '#20191d', '#825854', '#c04336', '#496b79', '#374275', '#552d29'],
	['#3d8e5e', '#7da342', '#e2e9e3', '#7fb8ae', '#37a2bd', '#c1bf86', '#a9cdcc', '#afb3b0', '#f98b43'],
	['#ded5e1', '#43869d', '#89abbe', '#adc1d2', '#bd8c93', '#c5a8bd', '#eeb8d3', '#cda29d', '#e9cbdd'],
	['#3f5faa', '#ef7b7a', '#e33134', '#f8f5ec', '#f7e89f', '#eec934', '#f5b4b5', '#f3e266', '#fbf7d4'],
	['#d8cfc9', '#4e515e', '#9d938f', '#a3a6b7', '#b1b5c0', '#818695', '#151215', '#74788e', '#192030'],
	['#7f4e3f', '#e7e3da', '#fae29e', '#ffc47a', '#e66003', '#ccb1a4', '#8e96af', '#f6eeee', '#9ac2c8'],
	['#c6824c', '#d0bfa9', '#907156', '#bf6f2a', '#486c85', '#90abb9', '#dddccf', '#a0aca1', '#146ca3'],
	['#dbc790', '#17425c', '#9ec8b0', '#ef6654', '#74a0b8', '#499574', '#3c6682', '#eadf98', '#d8393e'],
	['#ded1b5', '#120a12', '#fef1d3', '#1b4148', '#589844', '#59889c', '#512826', '#bd392e', '#fad920'],
	['#386362', '#dae1dc', '#77231c', '#c388bd', '#e3634b', '#b4f9fa', '#f3205c', '#ebcb45', '#2fa2b0'],
	['#dbb334', '#c1211f', '#fc7f0e', '#6a7eae', '#222425', '#676172', '#9e5b32', '#a3b5a1', '#2346b4'],
	['#ddc386', '#575857', '#94330d', '#f8ebc8', '#c1751a', '#8b6e46', '#cfa242', '#898e61', '#8aa436'],
	['#f6f6ee', '#f4f3ec', '#d3ad5f', '#eff0f4', '#555e7c', '#e6ccb8', '#e2b2ad', '#a9b0b7', '#a57a77'],
	['#fcf14b', '#292829', '#7b3630', '#baa579', '#b5aab9', '#d35d57', '#867483', '#8e784f', '#31a3b0'],
	['#fca185', '#7d64b0', '#14091a', '#624fab', '#5eabf8', '#fafaef', '#1864cc', '#4a62b2', '#547d01'],
	['#998e8e', '#1b1011', '#df0a11', '#e6dace', '#b79e76', '#ed9c08', '#e5b087', '#0d1011', '#3c64a4'],
	['#e6e5e1', '#b59144', '#4f8389', '#d5a88d', '#92aa95', '#bf8276', '#dad024', '#b5cabd', '#b8acac'],
	['#242662', '#da4725', '#dfb226', '#2cbf16', '#f4f5ec', '#bc8e97', '#d5db8c', '#dec0c8', '#9fc0d8'],
	['#cbae63', '#181310', '#77b1a2', '#825f32', '#4172a3', '#436b56', '#2e405f', '#51331a', '#ba3a38'],
	['#192974', '#b3c0d6', '#a17637', '#667a96', '#d14a14', '#000e9d', '#d2c129', '#e8ccce', '#4494bc'],
	['#cdc2af', '#b38e1c', '#dcc8af', '#cf5d58', '#dbcec7', '#d3b72c', '#e1dfdb', '#7e9973', '#d7d3c6'],
	['#8d825e', '#94baa8', '#c59571', '#e1de9a', '#ffecb0', '#abbe8b', '#e2ecd2', '#cd795a', '#69a77e'],
	['#cdbb91', '#372f23', '#698969', '#a18b62', '#736145', '#597a7e', '#afbaa4', '#6f9aa4', '#bc6c3c'],
	['#cbbaa3', '#9a4130', '#b0723a', '#a16a54', '#516882', '#969f9f', '#c3925f', '#f4e9d3', '#a5aba5'],
	['#368cb2', '#fdd800', '#e7613e', '#d8180f', '#183fcf', '#be8d89', '#7ee6f8', '#f89100', '#e3a244'],
	['#1b4875', '#9dbcde', '#f6f6d9', '#5a7db8', '#feffd7', '#b4a435', '#6091cc', '#939f8f', '#3fb9a0'],
	['#34323b', '#afafab', '#7c7b7f', '#000000', '#93939c', '#57555c', '#63626c', '#636463', '#9c9c8c'],
	['#b8a28e', '#6e7970', '#a78a78', '#aba4a0', '#decdb2', '#b99f91', '#b595a0', '#aa6e5c', '#959c82'],
	['#f4a82f', '#151c19', '#6f7560', '#a2100c', '#374a3e', '#70311f', '#899d8c', '#4b585e', '#859196'],
	['#bdc0bc', '#262926', '#7e847f', '#91a9a6', '#5a7570', '#1c1b1b', '#8b9ba4', '#364239', '#a26553'],
	['#b69a54', '#f1a51e', '#1d335b', '#5b4922', '#0e1b37', '#224c98', '#07020b', '#89420b', '#f4d953'],
	["#764c6b", "#04030f", "#7e7b8e", "#d26279", "#fcdad1", "#fee920", "#477f64", "#2d95a5", "#f1fcff"],
	['#ff0000', '#00ff00', '#0000ff', '#ff0000', '#00ff00', '#0000ff', '#ff0000', '#00ff00', '#0000ff'],
	["#262932", "#d5bfb2", "#7d3635", "#686b6e", "#a96d37", "#e24b3d", "#e88421", "#f0edea", "#3c9982"],
	["#01559b", "#cacbcb", "#593b3d", "#a51626", "#657e88", "#fe8c1a", "#bfd168", "#fafdfc", "#0463b4"],
	["#2e2c23", "#c7c9cc", "#70523a", "#7f7e71", "#dcdcda", "#f5f4eb", "#b09d79", "#343028", "#8ab896"],
	["#273866", "#e3c22d", "#f1f2ee", "#8f4e58", "#8ba1ae", "#e0d792", "#bd9da0", "#53a4a5", "#b9c8d2"],
	["#2e2422", "#a53c36", "#dfc75f", "#ab8358", "#5c3631", "#837da6", "#db804a", "#825f78", "#5d74af"],
	["#423937", "#d57626", "#141a23", "#427bb2", "#8e4439", "#2c4f83", "#69b0d7", "#eac831", "#5b798d"],
	["#24324a", "#79d0e2", "#d0f0f4", "#3a6184", "#548db6", "#415c56", "#619687", "#2890a8", "#6085c6"],
	["#fdbd90", "#14a4de", "#ae4482", "#6ffea0", "#f7d5ba", "#ea426d", "#ddeb58", "#f772ba", "#1bc6df"],
	["#16080a", "#c67da6", "#c5360b", "#eabbaf", "#c33756", "#793430", "#cf766a", "#e65a27", "#e6cba3"],
	["#e5d2d9", "#291007", "#f4b6e5", "#d5738e", "#b07e32", "#de9aba", "#80bad5", "#fef1f4", "#b99d85"],
	["#ffe50f", "#668630", "#3ea6b7", "#512b74", "#fb8c0b", "#0273ab", "#d33e1c", "#00b990", "#022963"],
	["#1199c0", "#2c2e39", "#122ab8", "#8c524f", "#ed582e", "#c0383a", "#3e5686", "#9ab2c2", "#fcaa16"],
	["#dcccb0", "#523c25", "#0A090E", "#785f3a", "#B46B26", "#a18864", "#faf8ea", "#97897f", "#A89468"],
	["#ab6e3b", "#bfbec2", "#a62c1e", "#c3ab91", "#6d8047", "#cfaf31", "#415f72", "#e4cf50", "#2c3c8c"],
	["#23264b", "#881b22", "#adb3b5", "#6b968b", "#f2e1cc", "#9b6d79", "#a0927c", "#88594d", "#66389f"],
	["#305d6c", "#c39e83", "#461e1d", "#933536", "#9bbaad", "#60948f", "#242138", "#25809d", "#60a8bd"],
	["#a12a06", "#aaa1a4", "#4a8f89", "#968670", "#8098a9", "#5e5923", "#9ca692", "#155d43", "#5d220f"],
	["#2e4b65", "#763939", "#cfd2cd", "#bf942d", "#667791", "#9f7178", "#cdb06f", "#91a7b9", "#40a4cf"],
	["#e6dec3", "#a8aaa4", "#856057", "#0f0e0e", "#81858f", "#595e5b", "#d50f10", "#232e59", "#47332d"],
	["#d2d0d4", "#253161", "#7cb9d6", "#3e7acf", "#251b1e", "#81667b", "#294ca1", "#ba4e52", "#497e98"],
	["#3e5257", "#eae6d4", "#6b674a", "#e78b35", "#503619", "#a6ae9a", "#b5814a", "#bbc6ac", "#3c9484"],
	["#a0a678", "#cdc2b0", "#9c9483", "#aab9b1", "#8ea2b3", "#788583", "#646b76", "#686055", "#bd5816"],
	["#a97fb4", "#ea3528", "#83b990", "#d3c02b", "#f929b7", "#42a2b8", "#66c138", "#2d335a", "#975f43"],
	["#c7be9e", "#21221d", "#7a7865", "#98977d", "#595d4e", "#4b4c3e", "#888b8c", "#505354", "#a75c34"],
	["#cdc3bc", "#100e0f", "#6c5d55", "#8b8c8b", "#3d322d", "#a25138", "#4b4c4c", "#87838c", "#403f50"],
	["#422f23", "#c5b290", "#93806a", "#786f60", "#150c09", "#aaa491", "#6a5b49", "#a59b9c", "#6e6364"],
	["#2e3533", "#d6d8d5", "#777f7a", "#a3a9a6", "#f2e2e7", "#5e5a55", "#9b9f91", "#96928c", "#508cb4"],
	["#dbd1cc", "#2f363a", "#b24235", "#c07b4a", "#7f959f", "#33aacc", "#c68787", "#d3ae90", "#a5b5be"],
	["#e7dbd7", "#f3b9cf", "#e698c3", "#9086cb", "#4a75d3", "#0564d4", "#064ca1", "#053266", "#050505"],

];