let autoCount = 0;
let ruleset = [];
let cell = [];
let cellSize = randBetweenInt(randBetweenInt(2,6),8);	
let cellLength;
let row = 0;
let nextCell = [];
let colorRand = randBetweenInt(0,119);
let cRand = randBetweenInt(0,8);
let cBW = randBetweenInt(0,255);
let p3 = randBetweenInt(1,3);
let count;
						
let rRand = randBetween(50,220);
let gRand = randBetween(50,220);
let bRand = randBetween(50,220);

let patternRand = randBetween(0,1);
let pInitial = randBetween(0,1);
let p;

for(let i=0; i<32; i++){
	ruleset.push(randBetweenInt(0,1));
}

while(rRand+gRand+brRand < 350){
	rRand = randBetween(100,220);
	gRand = randBetween(100,220);
	bRand = randBetween(100,220);
}

if(patternRand<0.25){
	p = 1;
}else if(patternRand>=0.25 && patternRand<0.55){
	p = 2;
}else if(patternRand>=0.55 && patternRand<0.9){
	p = 3;	
}else if(patternRand>=0.88){
	p =4;
}

function setup() {
	noiseSeed(randBetweenInt(0,10000));
	noStroke();
	pixelDensity(1);
	canvas = createCanvas(windowHeight, windowHeight);
	background(255);
	initialState();
	console.log('[' + cell+ '],');
	C = new CA();
}

function draw() {
	
	C.nextGen();
	C.update();
	C.draw(row);

	row += 1;

	if(row == int(height/cellSize)+1){
		noLoop();
		screenshot(frameCount);
		// autoSave();
	}
}	

function initialState(){

	cellLength = width/cellSize;
	cellSize = width/cellLength;
	
	//initail cell
	if(pInitial<0.3){
		
		for(let i=0; i<cellLength; i++){
			cell.push(0);	
		};
		for(let i=randBetweenInt(0,10); i<cellLength; i+=randBetweenInt(1,10)){
			cell[i] = 1;
		}
		
	}else if(pInitial>=0.3 && pInitial<0.7){
		
		for(let i=0; i<cellLength; i++){
			cell.push(randBetweenInt(0,1))	
		};

	}else if(pInitial>=0.7){

		for(let i=0; i<cellLength; i++){
			cell.push(1);	
		};
		
		div = randBetweenInt(2,5);
		interval = int(cellLength/div); 
		for(let i=1; i<div; i++){
			cell[interval*i] = 0;
		}

	}
	
	check(cell);
}

function check(cell){
	count = 0;
	
	for(let i=0; i<cell.length; i++){
		count += cell[i];
	}
	if(count == 0 || count == cell.length){
		for(let i=0; i<cell.length; i++){
			cell.push(randBetweenInt(0,1))	
		};
	}
}

function CA(){
	this.draw = function(row){
		for(let i = 0; i<cellLength; i++){	
			
			reSize = cellSize/2;
			if(cell[i] == 0){
			
				switch(p){
					//ligth
					case 1:
						r = rRand+noise(i*0.001+row*0.01)*100*randBetween(0,1);
						g = gRand+noise(i*0.001+row*0.01)*100*randBetween(0,1);
						b = bRand+noise(i*0.001+row*0.01)*100*randBetween(0,1);
						fill(r,g,b);
						break;
		
					//dark
					case 2:
						r = noise(i+row*randBetween(0,1)*0.05)*rRand;
						g = noise(i+row*randBetween(0,1)*0.05)*gRand;
						b = noise(i+row*randBetween(0,1)*0.05)*bRand;
						fill(r,g,b);
						break;

					//colorpallet
					case 3:
						f = int(noise((i/2-row*randBetween(0,1))*.0075)*8+1);
						if(f>8){console.log('!!!!!!!! f: ' + f);}
						l = 1;
						fill(colorAlpha(strokeColor[colorRand][f], l));					
						break;
					
					case 4:
						fill(255);
						break
				}
			}
			if(cell[i] == 1){
				// fill(bg[colorRand]);
				switch(p){

					case 1:
						fill(255);
						// if(randBetweenInt(0,1)==true){
						// 	fill(rRand,gRand,bRand);
						// }else{
						// 	fill(255); 
						// }
						break;

					case 2:
						fill(rRand,gRand,bRand);
						break;

					case 3:
						
						f = int(noise(i)*8);
						l = noise(i)*0;				
						console.log('colorRand: ' + colorRand);
						(p3 == 1)? fill(30): fill(colorAlpha(bg[colorRand], l));						
						break;

					case 4:
						fill(0);
						break
				}	
			}
			rect(i*cellSize, row*cellSize, cellSize);
		}
	}
	this.nextGen = function(){
		nextCell = [];
		for(let i = 0; i<cellLength; i++){
	
			let a = cell[i-2];
			let b = cell[i-1];
			let c = cell[i];
			let d = cell[i+1];
			let e = cell[i+2]
			
			if(a == undefined && b == undefined && c == undefined && d == undefined){
				newState = rules(0,0,0,0,e);				
			}else if(a == undefined && b == undefined && c == undefined){
				newState = rules(0,0,0,d,e);				
			}else if(a == undefined && b == undefined){
				newState = rules(0,0,c,d,e);				
			}else if(a == undefined){
				newState = rules(0,b,c,d,e);				
			}else if(b == undefined && c == undefined && d == undefined && e == undefined){
				newState = rules(a,0,0,0,0);				
			}else if(c == undefined && d == undefined && e == undefined){
				newState = rules(a,b,0,0,0);				
			}else if(d == undefined && e == undefined){
				newState = rules(a,b,c,0,0);				
			}else if(e == undefined){
				newState = rules(a,b,c,d,0);				
			}else{
				newState = rules(a,b,c,d,e);				
			}				

			nextCell.push(newState);
		}
		this.update = function() {
			cell = nextCell;
		}
	}
}

function rules(a,b,c,d,e){
		let result;
		(a == 1 && b == 1 && c == 1 && d ==1 && e==1) ? result = ruleset[0]:
		(a == 0 && b == 0 && c == 0 && d ==0 && e==0) ? result = ruleset[1]:
		
		(a == 1 && b == 1 && c == 1 && d ==1 && e==0) ? result = ruleset[2]:
		(a == 1 && b == 1 && c == 1 && d ==0 && e==1) ? result = ruleset[3]:
		(a == 1 && b == 1 && c == 0 && d ==1 && e==1) ? result = ruleset[4]:
		(a == 1 && b == 0 && c == 1 && d ==1 && e==1) ? result = ruleset[5]:
		(a == 0 && b == 1 && c == 1 && d ==1 && e==1) ? result = ruleset[6]:

		(a == 0 && b == 0 && c == 0 && d ==0 && e==1) ? result = ruleset[7]:
		(a == 0 && b == 0 && c == 0 && d ==1 && e==0) ? result = ruleset[8]:
		(a == 0 && b == 0 && c == 1 && d ==0 && e==0) ? result = ruleset[9]:
		(a == 0 && b == 1 && c == 0 && d ==0 && e==0) ? result = ruleset[10]:
		(a == 1 && b == 0 && c == 0 && d ==0 && e==0) ? result = ruleset[11]:
		
		(a == 1 && b == 1 && c == 0 && d ==0 && e==0) ? result = ruleset[12]:
		(a == 1 && b == 0 && c == 0 && d ==0 && e==1) ? result = ruleset[13]:
		(a == 0 && b == 0 && c == 0 && d ==1 && e==1) ? result = ruleset[14]:
		(a == 1 && b == 0 && c == 0 && d ==1 && e==0) ? result = ruleset[15]:
		(a == 0 && b == 0 && c == 1 && d ==1 && e==0) ? result = ruleset[16]:
		(a == 0 && b == 1 && c == 0 && d ==1 && e==0) ? result = ruleset[17]:
		(a == 0 && b == 1 && c == 1 && d ==0 && e==0) ? result = ruleset[18]:
		(a == 1 && b == 0 && c == 1 && d ==0 && e==0) ? result = ruleset[19]:
		(a == 0 && b == 1 && c == 0 && d ==0 && e==1) ? result = ruleset[20]:
		(a == 0 && b == 0 && c == 1 && d ==0 && e==1) ? result = ruleset[21]:

		(a == 1 && b == 1 && c == 1 && d ==0 && e==0) ? result = ruleset[22]:
		(a == 1 && b == 1 && c == 0 && d ==0 && e==1) ? result = ruleset[23]:
		(a == 1 && b == 0 && c == 0 && d ==1 && e==1) ? result = ruleset[24]:
		(a == 0 && b == 0 && c == 1 && d ==1 && e==1) ? result = ruleset[25]:
		(a == 1 && b == 1 && c == 0 && d ==1 && e==0) ? result = ruleset[26]:
		(a == 1 && b == 0 && c == 1 && d ==1 && e==0) ? result = ruleset[27]:
		(a == 0 && b == 1 && c == 1 && d ==1 && e==0) ? result = ruleset[28]:
		(a == 1 && b == 0 && c == 1 && d ==0 && e==1) ? result = ruleset[29]:
		(a == 0 && b == 1 && c == 1 && d ==0 && e==1) ? result = ruleset[30]:
		(a == 0 && b == 1 && c == 0 && d ==1 && e==1) ? result = ruleset[31]:
		result = result;
		return result;
}


function gradient(x,y,w,h,c1,c2){

	for (var i = y; i <= y+h; i++) {

		let inter = map(i, y, y+h, 0, 1);
		let inter2 = map(inter, 0,1, 0, 1 + inter)
		let c = lerpColor(c1, c2, inter2);
		stroke(c);
		line(x,i, x+w,i);					
	}
}

function addNoise(size, opacity){
		let progress;
		const total = width*height/noiseD;
		for(let x=0; x<=width; x+=size){
			for(let y=0; y<=height/noiseD; y+=size){
				progress = x+x*y;
				if(noiseA[x][y] == 1){
					fill(colorAlpha('#ffffff',opacity));
				}else{
					fill(colorAlpha('#000000',opacity));
				}
				noStroke();
				blendMode(SOFT_LIGHT);
				for(let i=0; i<noiseD; i++){
					square(x, y+i*y, 0.7);				
				}
			}
			console.log('noise progress: ' + floor(progress*100/total) +'%');	
		}		
		if(floor(progress*100/total)>=99){console.log('noise size: '+ size +' completed!');}	
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
	if(autoCount == 1000){return}
	save(canvas, 'p_'+p+'_cellSize_' + cellSize + '_rule_[' + ruleset + ']'+'.png');
	setTimeout(() => {
		clear();
		ruleset = [];
		cell = [];
		count = 0;		
		row = 0;
		nextCell = [];
		patternRand = randBetween(0,1);
		cRand = randBetweenInt(0,8);
		rRand = randBetween(100,200);
		gRand = randBetween(100,200);
		bRand = randBetween(100,200);
		cellSize = randBetweenInt(randBetweenInt(2,6),8);	
		p3 = randBetweenInt(1,3);
		colorRand = randBetweenInt(0,119);
		
		for(let i=0; i<32; i++){
			ruleset.push(randBetweenInt(0,1));
		}

		while(rRand+gRand+bRand<255){
			rRand = randBetween(0,255);
			gRand = randBetween(0,255);
			bRand = randBetween(0,255);
		}

		if(patternRand<0.2){
			p = 2;
		}else if(patternRand>=0.2 && patternRand<0.55){
			p = 1;
		}else if(patternRand>=0.55 && patternRand<0.9){
			p = 3;	
		}else if(patternRand>=0.85){
			p =4;
		}
		
		background(0);
		initialState();
		autoCount+=1;
	
	}, 0);
	
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
]