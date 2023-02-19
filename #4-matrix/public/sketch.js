var MatrixType;
var MatrixObject;
var MatrixSource;
var MatrixMessage;
var MatrixPrice;
var img_path;
var color;
var colorT = '#00FC95';
var colorG = '#9CFFCD';

// p = randBetweenInt(1,99);
p = 31;
p_c = randBetweenInt(1,28);   //characters 1-30
p_p = randBetweenInt(1,28);		//programs 1-28
p_s = 20;
p_s = randBetweenInt(1,22);		//programs 1-22
p_o = randBetweenInt(1,12);		//programs 1-12
p_q = randBetweenInt(1,10);		//programs 1-10
p_l = randBetweenInt(1,10);		//programs 1-10

console.log('p: ' + p);
console.log('p_c: ' + p_c);
console.log('p_p: ' + p_p);
console.log('p_s: ' + p_s);
console.log('p_o: ' + p_o);
console.log('p_q: ' + p_q);
console.log('p_l: ' + p_l);

switch (true) {
  case (p<10):
    console.log('Type: Terminal');
    MatrixType = 'Terminal';
    MatrixPrice = 101;
    img_path = '/terminal';
    
    switch(true){
      case (p_q == 1):
      	MatrixObject = 'What is the Matrix?';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "The Matrix is everywhere. It is all around us. Even now in this very room"
	      img_path += '/1';
      	break
    	case (p_q == 2):
      	MatrixObject = 'Follow the white rabbit';
	      MatrixSource = 'The Matrix, Matrix Resurrections';
	      MatrixMessage = "Searching..."
	      img_path += '/2';
      	break

      case (p_q == 3):
      	MatrixObject = 'Wake up';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "Wake up, Neo..."
	      img_path += '/3';
      	break

      case (p_q == 4):
      	MatrixObject = 'The Matrix has you';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "The Matrix has you..."
	      img_path += '/4';
      	break

      case (p_q == 5):
      	MatrixObject = 'Knock, knock, Neo.';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "Knock, knock, Neo."
	      img_path += '/5';
      	break

      case (p_q == 6):
      	MatrixObject = 'Package';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "Mr. Anderson, do you got my package?"
	      img_path += '/6';
      	break

      case (p_q == 7):
      	MatrixObject = 'Phone call';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "What good is a phone call, if you're unable… to speak?"
	      img_path += '/7';
      	break

      case (p_q == 8):
      	MatrixObject = '303';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "Christian God: Father, Son, and Holy Spirit."
	      img_path += '/8';
      	break

      case (p_q == 9):
      	MatrixObject = '101';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "You got the money?"
	      img_path += '/9';
      	break

      case (p_q == 10):
      	MatrixObject = 'They are watching';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "They are watching you, Neo"
	      img_path += '/10';
      	break
    }

    break;
  
  case (10<=p && p<20):
    console.log('Type: Location');
    MatrixType = 'Location';
    MatrixPrice = 1010;
    img_path = '/location';

    switch(true){
      case (p_l <= 9):
      	MatrixObject = 'Backdoor';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "Always another way.";
	      img_path += '/'+randBetweenInt(1,4);
      	break;

      case (p_l == 10):
      	MatrixObject = 'Park';
	      MatrixSource = 'Matrix Reloaded';
	      MatrixMessage = "Because you didn't come here to make the choice, you've already made it. You're here to try to understand *why* you made it. I thought you'd have figured that out by now.";
	      img_path += '/5';
      	break;

    }
    break;

  case (20<=p && p<30):
    console.log('Type: Objects');
    MatrixType = 'Objects';
    MatrixPrice = 10101;
    img_path = '/objects';
    
    switch(true){
      case (p_o<=4):
	      MatrixObject = 'Battery';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "The human body generates more bioelectricity than a 120-volt battery and over 25,000 BTUs of body heat. Combined with a form of fusion, the machines had found all the energy they would ever need.";
	      img_path += '/'+randBetweenInt(1,4);
	    	break;
	    
	    case (p_o == 5):
	      MatrixObject = 'Mirror';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "The mirror was a device in the Matrix which was used to fill a hole left behind when a program in the Matrix exited.";
	      img_path += '/5';
	    	break;

    	case (p_o == 6):
	      MatrixObject = 'Spoon';
	      MatrixSource = 'The Matrix';
	      MatrixMessage = "Then you'll see, that it is not the spoon that bends, it is only yourself.";
	      img_path += '/6';
	    	break;
    	
    	case (p_o == 7):
	      MatrixObject = 'The Logos';
	      MatrixSource = 'Matrix trilogy';
	      MatrixMessage = "The smallest vessel in the fleet.";
	      img_path += '/7';
	    	break;

    	case (p_o == 8):
	      MatrixObject = 'The Osiris';
	      MatrixSource = 'Matrix Reloaded';
	      MatrixMessage = "The Osiris was a MARK VI, No. 16 Zion hovercraft, named after the Egyptian god of the Afterlife.";
	      img_path += '/8';
    		break;
    	case (9<=p_o && p_o<13):
	      MatrixObject = 'Sentinel';
	      MatrixSource = 'Matrix trilogy';
	      MatrixMessage = "Search and destroy.";
	      img_path += '/'+randBetweenInt(9,12);
    		break;
    }
    break;

  case (30<=p && p<50):
    console.log('Type: sentients');
    MatrixType = 'Sentients';
    MatrixPrice = 10;
    img_path = '/sentient';

    switch(true){
      case (p_s<=10):
      MatrixObject = 'Agent';
      MatrixSource = 'All Matrix franchise';
      MatrixMessage = "Inside the Matrix, they are everyone...and they are no one.";
      img_path += '/'+randBetweenInt(1,10);
    	break;

    	case (10<p_s && p_s<=22):
      MatrixObject = 'Smith';
      MatrixSource = 'All Matrix franchise';
      MatrixMessage = "Inside the Matrix, they are everyone...and they are no one.";
      img_path += '/smith/'+randBetweenInt(1,12);
    	break;

  	}
  	break;

  case (50<=p && p<70):
    console.log('Type: program');
    MatrixType = 'Program';
    MatrixPrice = 10101;
    img_path = '/programs';
    
    switch(true){

      case (p_p<=3):
      	MatrixObject = 'Cake';
      	MatrixSource = 'Matrix Reloaded';
      	MatrixMessage = "What is the reason? Soon the why and the reason are gone and all that matters is the feeling. This is the nature of the universe. We struggle against it, we fight to deny it; but it is of course a lie. Beneath our poised appearance we are completely out of control.";
        img_path += '/'+randBetweenInt(1,3);
        break;

      case (p_p == 4):
      	MatrixObject = 'Cookies';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "Here, take a cookie. I promise, by the time you're done eating it, you'll feel right as rain.";
        img_path += '/4';
        break;

      case (p_p > 4 && p_p <= 7):
      	MatrixObject = 'Phone booth';
      	MatrixSource = 'All Matrix franchise';
      	MatrixMessage = "Exit...";
        img_path += '/5';
        break; 

      case (p_p > 7 && p_p <= 10):
      	MatrixObject = 'Red pill';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "You take the red pill... you stay in Wonderland, and I show you how deep the rabbit hole goes.";
        img_path += '/6';
        colorT = '#FF0000';
        colorG = '#E552DE'
        break; 

      case (p_p > 10 && p_p <= 13):
      	MatrixObject = 'Blue pill';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "You take the blue pill... the story ends, you wake up in your bed and believe whatever you want to believe.";
        img_path += '/7';
        colorT = '#0055FF';
        colorG = '#96BAFF'
        break; 

      case (p_p > 13 && p_p <= 15):
      	MatrixObject = 'Choice';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "What is real? How do you define 'real'? If you're talking about what you can feel, what you can smell, what you can taste and see, then 'real' is simply electrical signals interpreted by your brain.";
        img_path += '/8';
        break; 

      case (p_p == 16):
      	MatrixObject = 'key';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "Only the One can open the door. And only during that window can that door be opened.";
        img_path += '/9';
        break;

      case (p_p > 16 && p_p <= 26):
      	MatrixObject = 'deja vu';
      	MatrixSource = 'The Matrix, The Matrix Resurrections';
      	MatrixMessage = "A déjà vu is usually a glitch in the Matrix. It happens when they change something.";
        img_path += '/'+randBetweenInt(10,11);
        break;

      case (p_p == 27):
      	MatrixObject = 'Woman in the red dress';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "Were you listening to me, Neo? Or were you looking at the woman in the red dress?";
        img_path += '/12';
        break;
      
      case (p_p == 28):
        MatrixObject = 'Telephone';
      	MatrixSource = 'The Matrix';
      	MatrixMessage = "What good is a phone call, if you're unable… to speak?";
        img_path += '/13';
        break;

    }   

    break;

  case (70<=p && p<100):
    console.log('Type: Characters');
    MatrixType = 'Characters';
    MatrixPrice = 101010;
    img_path = '/characters';

    switch(true){

      case (p_c<=4):
      	MatrixObject = 'Neo';
      	MatrixSource = 'All Matrix franchise';
      	MatrixMessage = "Ever have that feeling where you’re not sure if you’re awake or dreaming?";
        img_path += '/neo/'+randBetweenInt(1,4);
        break;

      case (4<p_c && p_c<=21):
        console.log('key role');

        if(4<p_c && p_c<=7){
        	MatrixObject = 'Trinity';
	      	MatrixSource = 'All Matrix franchise';
	      	MatrixMessage = 'The answer is out there, Neo, and it’s looking for you, and it will find you if you want it to.';
	      	img_path += "/keyroles/"+randBetweenInt(1,4);

        }else if(p_c==8){
        	MatrixObject = 'Spoon boy';
	      	MatrixSource = 'The Matrix (1999)';
	      	MatrixMessage = "Do not try and bend the spoon. That's impossible. Instead...only try to realize the truth.";
	      	img_path += "/keyroles/5";

        }else if(8<p_c && p_c<=10){
        	MatrixObject = 'The oracle';
	      	MatrixSource = 'Matrix trilogy';
	      	MatrixMessage = "Would You Still Have Broken It If I Hadn't Said Anything?";
	      	img_path += '/keyroles/'+randBetweenInt(6,7);

        }else if(p_c==11){
        	MatrixObject = 'The architect';
	      	MatrixSource = 'Matrix Reloaded, Matrix Revolutions';
	      	MatrixMessage = 'I am The Architect. I created the Matrix.';
	      	img_path += '/keyroles/8';

        }else if(p_c==12){
        	MatrixObject = 'The analyst';
	      	MatrixSource = 'Matrix Resurrections';
	      	MatrixMessage = "Quietly yearning for what you don't have, while dreading losing what you do. Desire and fear.";
	      	img_path += '/keyroles/9';

        }else if(12<p_c && p_c<=17){
        	MatrixObject = 'Morpheus';
	      	MatrixSource = 'All Matrix franchise';
	      	MatrixMessage = 'What is real? How do you define real?';
	      	img_path += '/keyroles/'+randBetweenInt(10,12);

        }else if(17<p_c && p_c<=19){
        	MatrixObject = 'Niobe';
	      	MatrixSource = 'The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections';
	      	MatrixMessage = "If we fail, Neo fails, and that cannot happen at any cost.";
	      	img_path += '/keyroles/'+randBetweenInt(13,14);

        }else if(p_c==20){
        	MatrixObject = 'Cypher';
	      	MatrixSource = 'The Matrix';
	      	MatrixMessage = "You know.. I know this steak doesn't exist. I know that when I put it in my mouth; the Matrix is telling my brain that it is juicy, and delicious. After nine years.. you know what I realize? Ignorance is bliss.";
	      	img_path += '/keyroles/15';

        }else if(p_c==21){
        	MatrixObject = 'Tank';
	      	MatrixSource = 'The Matrix';
	      	MatrixMessage = 'Opertaor....';
	      	img_path += '/keyroles/16';

        }

        break;
      
      case (21<p_c && p_c<=30):
        console.log('exiles');

        if(p_c == 22){
        	MatrixObject = 'The Merovingian';
	      	MatrixSource = 'The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections';
	      	MatrixMessage = "You see there is only one constant. One universal. It is the only real truth: Causality. Action, reaction. Cause and effect.";
	      	img_path += "/keyroles/17";

        }else if(p_c == 23){
        	MatrixObject = 'Seraph';
	      	MatrixSource = 'Matrix Reloaded';
	      	MatrixMessage = "You do not truly know someone until you fight them.";
	      	img_path += "/keyroles/18";

        }else if(p_c == 24){
        	MatrixObject = 'Sati';
	      	MatrixSource = 'The Matrix Revolutions, The Matrix Resurrections';
	      	MatrixMessage = "mindfulness";
	      	img_path += "/keyroles/"+randBetweenInt(19,20);

        }else if(p_c == 25){
        	MatrixObject = 'The Twins';
	      	MatrixSource = "Matrix Reloaded";
	      	MatrixMessage = "We are getting aggravated. Yes we are.";
	      	img_path += "/keyroles/21";

        }else if(p_c == 26){
        	MatrixObject = 'The Keymaker';
	      	MatrixSource = 'Matrix Reloaded';
	      	MatrixMessage = "There is a building. Inside this building there is a level where no elevator can go, and no stair can reach. This level is filled with doors. These doors lead to many places. Hidden places. But one door is special. One door leads to the source";
	      	img_path += "/keyroles/22";

        }else if(p_c == 27){
        	MatrixObject = 'Persephone';
	      	MatrixSource = 'The Matrix Reloaded, The Matrix Revolutions';
	      	MatrixMessage = "Cause and Effect, my love.";
	      	img_path += "/keyroles/23";

        }else if(p_c == 28){
        	MatrixObject = 'The Trainman';
	      	MatrixSource = 'Matrix Reloaded';
	      	MatrixMessage = "You don't get it. I built this place. Down here I make the rules. Down here I make the threats. Down here... I'm God.";
	      	img_path += "/keyroles/24";
        }

        break;
    }
    break;
}

let charSize = window.innerHeight/80;
let offset = (window.innerWidth-window.innerHeight)/2;
let ratio = window.innerWidth/window.innerHeight;
let speed = 1;			//integer only
var img_final = './img'+ img_path +'.jpg';
let rainLength = 1;			//the bigger the longer the length of the rain
let table = "$え@B8&おWMせ#いうZQLC0O0の1JUYXとへ%*oahkbdpqwmzcvunxrjft?/|({[+<っi!lI;:~-^`',_.      "
// let table = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYX/|()1{}[]?-_+~<>i!lI;:,\"^`∶. ";
let img;
let art = [];
let img_w;
let img_h;
let x = 0;
let y = 0;
let opacity = 0;
let lum = 0;
let LightY = 0;
let startingY = [];
let posY;
let first = true;
let lineFade = 30;
let buffer = 50;
let scanH = 1;		//1 = img.height; 2 = half......

function preload(){
  	img = loadImage(img_final);
}

function generate_matrix(){
	
	img.loadPixels();
	img_w = img.width;
	img_h = img.height;
	let scan = img_h/scanH;										//starting Y position

	for(let i=0; i<img.width; i++){    	  
	  
	  art[i] =[];
	  for(let j=0; j<img.height; j++){
	    let index = (i+j*img.height)*4;
	    let r = img.pixels[index+0];
	    let g = img.pixels[index+1];
	    let b = img.pixels[index+2];
	    let lumi = r*0.3 + g*0.59 + b*0.11;
	    let len = table.length;
	    let charIndex = floor(map(lumi,0,255,len,0));
	    let render_text = table.charAt(charIndex);
	    art[i][j] = render_text;
	  }

	  startingY.push( randBetweenInt(scan*0.4, scan) );		
	}
}

function setup() {

	frameRate(10);
	canvas = createCanvas(windowWidth, windowHeight);
	background(0);
	noStroke();
	textFont('Courier');;
	textAlign(CENTER,CENTER);
  textSize(charSize);
	generate_matrix();
	Streams = [];
	
	for(let x = 0; x < img_w; x++){					//image code line
		Streams.push(new stream(x));

	}

	
}

function draw() {
	
	background(0);
	let column;
	drawingContext.shadowBlur = 16;                     //glow
	drawingContext.shadowColor = color(colorG);      //glow color    		

	Streams.forEach(function(stream, index){ 
	
		startingY[index] += speed;
		
		

		stream.render(startingY[index]); 
		
		if(startingY[index] >= img_h+ buffer){				//frame buffer
			startingY[index] = 0;
		}			

	})		
	if(frameCount < 16){
		for(x=0; x<img_w; x++){
			for(y=0; y<img_h; y++){
				fill(colorAlpha( colorT, 1-frameCount*0.0625));
				text(art[x][y], x*charSize+offset, y*charSize);
			}
		}	
	}
	screenshot(1);
}

function stream(x){

	let line = [];
	let length = map(rainLength, 0,1, 1,0);
	let alpha = 0;

	function char(x, y){
		return art[x][y];	
	}

	for(let y = 0; y < img_h; y ++){

		line.push( char(x, y) );

	}

	this.render = function(input){

		let charY = 0;
		let count = 0;
		let charAlpha = 1;
		let fade;

		line.forEach(function(char, index){

			if(index <= input){
				
				charAlpha = map(index, 0,input-4, 0,1) - input*0.0015;

			}else{
				charAlpha = 0;
			}
			
			if(charAlpha < 0.01){								//clean ending alpha
				charAlpha = 0;			
			}

			if(index == input){										//first
				
				fill(colorAlpha('#C9FFE9', 1));
				for(i=0; i<3; i++){
					text(char, x*charSize + offset, charY*charSize);
					
				}
							
			}else{
				fill(colorAlpha(colorT, charAlpha));				
			}
			
			text(char, x*charSize + offset, charY*charSize);
			charY ++;
			
		});
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
  return min + (max - min +1) * fxrand();
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
  	console.log('Fx preview!');
  };
}
//does not include max


