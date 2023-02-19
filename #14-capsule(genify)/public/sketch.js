var workWidth = 1000;
var workHeight = 1200;
let opacity;
let p = randBetween(0,1);
let x =0 ;
let loop = 0;
let autoCount = 0;
let bgDivNum = randBetweenInt(2,5);
let bgW = [];
let bgDivAccWidth = 0;
let bg_H1 = randBetweenInt(0,100);
let bg_H2 = Range_100(bg_H1+randBetweenInt(-10,10));
let bg_S1 = randBetweenInt(0,60);
let bg_S2 = randBetweenInt(3,15);
let bg_B1 = randBetweenInt(30,80);
let bg_B2 = randBetweenInt(15,50);
let bg_pattern = randBetweenInt(0,5);
let bgLine_offset_x=0;
let hue_pattern = randBetweenInt(0,100);
let rainbow = false;
let color_r = Math.floor(hue_pattern/10);
let bgList = [];
let angle;
let pill_num = Math.floor(randBetween(11,randBetweenInt(12,18)));
let bg_p = 'Regular';

if ( (bg_H1>80||bg_H2>80)&&(Math.abs(bg_H1-bg_H2)>80) || (((bg_H1||bg_H2)<0 ||((bg_H1||bg_H2) > 105))&&(Math.abs(bg_H1-bg_H2)>10))){
			rainbow = true;
}

function preload() {
  img = loadImage('./noise.png');
}

function setup() {
	pixelDensity(2);
	canvas = createCanvas(workWidth, workHeight);
	noiseSeed(Genify.random());
	background(200);
	noLoop();
	bgInitial();	
}

function draw() {

	
	bg_stripe();

	//generate graphics here
	noStroke();	
	generating_pills(pill_num);
	stripe();

	//noise
	blendMode(SOFT_LIGHT);
	tint(255, 6);
	image(img, -width/2, -height/2);
	finalResize();


}	

function bgInitial(){
	for(i=0;i<bgDivNum;i++){
		bgW.push(0);
	}	
	while(bgDivAccWidth != width){
		bgDivAccWidth = 0;
		for(i=0;i<bgDivNum;i++){
			bgW[i] = randBetweenInt(width/12,width);
			bgDivAccWidth += bgW[i];
		}	
	}
	if(bgDivAccWidth == width){
		for(i=0;i<bgDivNum;i++){
			if(i == 0){
				bgList.push(new bgDiv(0,0,bgW[i],height))
			}else{
				TempX = bgList[i-1].x + bgList[i-1].width;
				bgList.push(new bgDiv(TempX,0,bgW[i],height))
			}
			bgList[i].render();
		}	
	}
}



function generating_pills(num){
	translate(width/2, height/2);
	let	Random_B;
	for(b=0; b<num; b++){
		
		x1_start = randBetween(randBetween(-500,-200),0); //-400-0
		y1_end = randBetween(700,-700); 
		x2_start = randBetween(randBetween(500,200),0); //400-0
		y2_end = y1_end;
		x3_circle = (width*0.618+randBetween(-50,50))*randBetween(-1,1);
		y3_circle = (height*0.618+randBetween(-50,50))*randBetween(-1,1);

		v1  = createVector(x1_start,y1_end);	
		v2  = createVector(x2_start,y2_end);
		v3  = createVector(x3_circle,y3_circle);

		////////////// pill height //////////////
		pill_height = randBetween(randBetween(40,60),randBetween(60,300));
		pill_angle = randBetween(0,PI);  

		//////////////// circle here /////////////////////
		r_circle = pill_height*randBetween(0.5,1.1);

		
		while( v1.dist(v2) > randBetween(700,450) ){
			x1_start = randBetween(randBetween(-500,-200),0); //-400-0
			y1_end = randBetween(700,-700); 
			x2_start = randBetween(randBetween(500,200),0); //400-0
			y2_end = y1_end;
			v1  = createVector(x1_start,y1_end);	
			v2  = createVector(x2_start,y2_end);

		}	
		
		c = bg_H1;
	
		//random highlight
		if(b % 20 == 0){
			Random_B = randBetween(0,20);
		}
	
		// medium layer
		if(hue_pattern <= 30){ 
			pill_H1 = Range_100( bg_H1+randBetweenInt(-10,10) );
			pill_H2 = Range_100( pill_H1+randBetweenInt(-5,5) );
			pill_S1 = bg_S1 + randBetween(0,5);
			pill_S2 = bg_S2;
			pill_B1 = bg_B1;	//12-25
			pill_B2 = bg_B2 + 30; //50-75


		// highlight layer
		}else if(hue_pattern > 85 && hue_pattern <= 100){
			pill_H1 = Range_100( bg_H1+randBetweenInt(-40,0) );
			pill_H2 = Range_100( pill_H1+randBetweenInt(0,20) );
			pill_S1 = bg_S1 + 20;
			pill_S2 = bg_S2;
			pill_B1 = bg_B1 + randBetweenInt(-10,20);	//12-25
			pill_B2 = 75; //50-75
			
		
		//generate from bg
		}else{ 
			pill_H1 = bg_H1 + randBetweenInt(-30,30);
			pill_H2 = pill_H1 + randBetweenInt(-5,5);
			pill_S1 = bg_S1 + randBetweenInt(-5,5);
			pill_S2 = bg_S2 + randBetweenInt(-5,5);
			pill_B1 = bg_B1 + randBetweenInt(-2,2);	//12-25
			pill_B2 = bg_B2 + randBetweenInt(-2,2);; //50-75
		}
		
		if ( (pill_H1>80||pill_H2>80)&&(abs(pill_H1-pill_H2)>80) || (((pill_H1||pill_H2)<0 ||((pill_H1||pill_H2) > 105))&&(abs(pill_H1-pill_H2)>10))){
			rainbow = true;
		}
		
		////////////////////////////////////// here ////////////////////////
		if (p<0.95){
			pill(v1.x,v1.y, v2.x,v2.y, pill_H1, pill_S1, pill_B1, pill_H2, pill_S2, pill_B2, pill_height,pill_angle);
			
			//skip every 2 frames
			if(b % 4 == 0){
				////////////////////////////////////// here ////////////////////////
				circles(v3.x, v3.y, r_circle, bg_H1,bg_S1, bg_B1, bg_H2,bg_S2+randBetween(10,-20),pill_B2+randBetween(-20,30));
				doodle(v3.x, v3.y)
			}
		}else{
			if(b % 2 == 0){
				circles(0, 0, randBetween(0,randBetween(width/2,width/4)), bg_H1,bg_S1, bg_B1, bg_H2,bg_S2+randBetween(10,-20),pill_B2+randBetween(-20,30));
			}			
		}
		
	/////////// some pensil doodle /////////////
		for (var i = 0; i < 8; i++) {

			switch (randBetweenInt(1,4)){
				case 1:
					dX = randBetween(-width,0);
					dY = randBetween(-height,0);
					break;
				case 2:
					dX = randBetween(0,width);
					dY = randBetween(-height,0);
					break;
				case 3:
					dX = randBetween(0,-width);
					dY = randBetween(0,height);
					break;
				case 4:
					dX = randBetween(0,width);
					dY = randBetween(0,height);
					break;

			}
				doodle(dX,dY)
			}
		}
		
		
}

function bg_stripe(){
	
	temp_Y = -height/2;
	temp_X = -width/2+200;
	this.offX = randBetween(-width,width/2);
	this.offY = randBetween(-height/2,height/4);
	this.draw = function(x,y,offset){
		strokeWeight(5);
		noFill();
		beginShape();
		for(i=0;i<300;i+=10){
			curveVertex(x + offset + sin(i/randBetween(10,20))*randBetween(1,20),y+i*10);
		}
		endShape();
	}

	for(row=0; row<width; row+=width/80){
		line_X = -width/2 + offX ;
		line_y = -height/2 + offY;
		this.draw(line_X+row,line_y,row*0.08)
		
	}

}

function stripe(){
	for(i=0;i<width; i+=3){
		strokeWeight(1);
		stroke(255,3);
		x1 = -width/2;
		y1 = -height/2;
		x2 = -width/2;
		y2 = height/2;
		// line(x1+i,y1,x2+i,y2);		
	}
}

function doodle(x,y){
	noFill();
	strokeWeight(randBetween(0,1));
	stroke(randBetweenInt(0,255),5);
	temp_X = x;
	temp_Y = y;
	case_D = randBetweenInt(0,1)

	beginShape();
		
	for(i=0;i<80;i+=1){
		curveVertex(temp_X, temp_Y);		
		switch (case_D){

			case 0:
				temp_X += randBetween(-width/40,width/40);
				// temp_X += randBetween(-10,10);

				temp_Y += randBetween(-height/10,height/4);;
				break;

			case 1:
				temp_X += randBetween(-width/12,width/12);
				temp_Y += randBetween(-height/40,height/40);;

		}
	}

	endShape();
	
}

function Range_100(value) {
	//control the value between 0 to 100
	if(value>100){
		value-=100;
	}else if(value<0){
		value = 100-value;
	}else{
		value = value;
	}
	return value
}

function circles(x,y,r,h1,s1,b1,h2,s2,b2){
	colorMode(HSB);
	h = 2*r;

	for(let a=0; a<h; a+=0.1){

		i = map(a,0,r,0,r);
		j = map(a,0,r,r,0);

		xi = sqrt(sq(r)-sq(j));
		yj = sqrt(sq(r)-sq(i));
	
		x1 = x-xi;
		x2 = x+xi;
		y1 = y-r+a;
		y2 = y1;

		ch = map(a, 1, h, h1, h2);			
		cs = map(a, 1, h, s1, s2);			
		cb = map(a, 1, h, b1, b2);
		stroke(ch,cs,cb);
		line(x1,y1,x2,y2);
	}

}

function pill(x1,y1,x2,y2,h1,s1,b1,h2,s2,b2,h,angle){

	colorMode(HSB);

	for(let i=1; i<h+1; i+=1/h){
		
		//base points
		sX1 = x1;
		sY1 = y1+i;
		sX2 = x2;
		sY2 = y2+i;

		//color
		ch = map(i, 1, h+1, h1, h2);			
		cs = map(i, 1, h+1, s1, s2);			
		cb = map(i, 1, h+1, b1, b2);	


		//rounded curves
		r = h/2
		i = map(i,1,r,1,r);
		j = map(i,1,r,r,1);

		xi = sqrt(sq(h/2)-sq(j));
		yj = sqrt(sq(h/2)-sq(i));
	
		pX1 = sX1-xi;
		pX2 = sX2+xi;
		pY1 = sY1;
		pY2 = sY2;

		//rotation matrix
		x1_final = pX1*cos(angle)-pY1*sin(angle);
		y1_final = pX1*sin(angle)+pY1*cos(angle);
		x2_final = pX2*cos(angle)-pY2*sin(angle);
		y2_final = pX2*sin(angle)+pY1*cos(angle);

		//render lines
		stroke(ch,cs,cb);
		line(x1_final,y1_final,x2_final,y2_final);

		//drop shadow
		stroke(0,0.1);	
		line(x1_final+20,y1_final+20,x2_final+20,y2_final+20);
	}

}

function bgDiv(x,y,w,h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.direction = randBetweenInt(0,1);
	this.h1 = bg_H1;
	this.h2 = bg_H2;
	this.s1 = bg_S1;
	this.s2 = bg_S2;
	this.b1 = bg_B1;
	this.b2 = bg_B2;
	this.render = function(){
			gradient(this.x, this.y, this.width, this.height ,this.h1,this.s1,this.b1,this.h2,this.s2,this.b2,100,this.direction);
			if(bg_pattern == 0 && randBetweenInt(0,2) == 1){
				bg_p = 'Irregular';
				for (var i = 0; i < 3; i++) {
					gradient(this.x+randBetween(200,-200), this.y+randBetween(200,-200), this.width, this.height ,this.h1,this.s1,this.b1,this.h2,this.s2,this.b2,100,this.direction+randBetweenInt(-1,0));
				}
			}
			
	}
}

function finalResize(){
	var w = workWidth;
	var h = workHeight;
	var workRatio = w/h;
	var screenRatio = window.innerWidth/window.innerHeight;
	var cv =  document.getElementById("defaultCanvas0");
	var wd = cv.style;
	wd.width = null;
	wd.height = null;

	if(screenRatio > workRatio){
		var wf = 100*workRatio;
		wd.width = wf + 'vh';
		wd.height = '100vh';
	}else{
		var hf = 100/workRatio;
		wd.width = '100vw';
		wd.height = hf  +'vw';
	}
	
}
function gradient(x,y,w,h,h1,s1,b1,h2,s2,b2,opacity,direction){

	colorMode(HSB,opacity);
	noStroke();
	if(direction == 0){
		for(let i=0; i<w; i+=0.3){
			ch = map(i, 0, w, h1, h2);			
			cs = map(i, 0, w, s1, s2);			
			cb = map(i, 0, w, b1, b2);			
			fill(ch,cs,cb);
			rect(x+i,y,1,h);
		}		
	}else if(direction == 1){
		for(let i=0; i<h; i++){
			ch = map(i, 0, h, h1, h2);			
			cs = map(i, 0, h, s1, s2);			
			cb = map(i, 0, h, b1, b2);			
			fill(ch,cs,cb);
			rect(x,y+i,w,1);
		}		
	}


}



function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function randBetween(min,max){
  return min + (max - min) * Genify.random();
}

function randBetweenInt(min,max){
  return Math.floor(min + (max+1 - min) * Genify.random());
}//does not include max

function frameStop(num){
  if(frameCount == num){
  	noLoop();
  	console.log('Frame Stop!');
  };
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function autoSave(){
	save(canvas, 'sample/image.jpg');
	autoCount += 1;
	setTimeout(() => {
		clear();
		frameCount = 0;
		document.location.reload()
	}, 1000);
	
}

let pause = false;

function keyTyped() {	
	if (key === 's') {
	save(canvas, 'image.jpg');
	}
}

var features = {
    "Division": bgDivNum,
    "Background": bg_p,
    "Pill num": pill_num,
    "Color": color_r,
    "Rainbow": rainbow

};
console.log(color_r)
Genify.setGenFeatures(features);