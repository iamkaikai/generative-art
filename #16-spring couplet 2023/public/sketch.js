var feature_bg, 
	p_bg, 
	p_color,
	p_folder,
	p_word,

	f_background,
	f_word,
	f_color,
	f_flip,
	f_lan,
	f_id = randBetweenInt(1,500),

	p_bg_o = randBetween(0,1),
	p_flip_o = randBetween(0,1),
    p_color_o = randBetween(0,1),
    p_word_o = randBetween(0,1),
    p_shadow = randBetweenInt(1, 7),
    
    bg = document.getElementById("bg"),
    word = document.getElementById("word"),
    shadow = document.getElementById("shadow"),
    feature_edition = "common";
    
//bg
console.log('p_bg_o = ' + p_bg_o)
if(p_bg_o < 0.02){
	p_bg = 3;
	f_background = 'Spark';    	
}else if(p_bg_o >= 0.02 && p_bg_o < 0.1){
	p_bg = 2;
	f_background = 'Blue'; 
}else if(p_bg_o >= 0.1 && p_bg_o < 0.29){
	p_bg = 4;
	f_background = 'Gold'; 
}else if(p_bg_o >= 0.29 && p_bg_o < 0.31){
	p_bg = 5;
	f_background = 'Rabbit'; 
}else if(p_bg_o >= 0.31 && p_bg_o < 0.33){
	p_bg = 6;
	f_background = 'Garden'; 
}else if(p_bg_o >= 0.33 && p_bg_o < 0.38){
	p_bg = 7;
	f_background = 'Temple'; 
}else if(p_bg_o >= 0.38 && p_bg_o < 0.4){
	p_bg = 8;
	f_background = 'Praise'; 
}else{
	p_bg = 1;
	f_background = 'Red'; 
}


//color
p_folder = 'black/';
f_color = 'Black';

if(p_color_o >= 0.05 && p_color_o < 0.35){
	f_color = 'White';
	p_folder = 'white/';	
} 

//word
f_lan = 'Chinese';
p_word_o = 0.555;
c = randBetween(0,1);

if(p_word_o < 0.1){
	
	p_word = randBetweenInt(1,6);
	p_word = '0'+p_word.toString()
	f_word = 'Spring';
	if( c < 0.1){
		p_word = '01';
		f_color = 'Gold';
		p_folder = 'gold/';	
	}
}else if(p_word_o >= 0.1 && p_word_o < 0.12){
	p_word = randBetweenInt(7,8);
	p_word = '0'+p_word.toString()
	f_word = 'Summer';
	if(c < 0.2){
		p_word = '07';
		f_color = 'Gold';
		p_folder = 'gold/';
	}
}else if(p_word_o >= 0.12 && p_word_o < 0.14){
	p_word = 9;
	p_word = '0'+p_word.toString()
	f_word = 'To recruit';
	if(c < 0.33){
		p_word = '09';
		f_color = 'Gold';
		p_folder = 'gold/';
	}
}else if(p_word_o >= 0.14 && p_word_o < 0.21){
	p_word = randBetweenInt(10,12);
	f_word = 'Fall';
	if(c < 0.08){
		p_word = '10';
		f_color = 'Gold';
		p_folder = 'gold/';
	}
}else if(p_word_o >= 0.21 && p_word_o < 0.22){
	p_word = randBetweenInt(13,14);
	f_word = 'Winter';
	if( c < 0.33){
		p_word = '13';
		f_color = 'Gold';
		p_folder = 'gold/';
	}
}else if(p_word_o >= 0.22 && p_word_o < 0.27){
	p_word = randBetweenInt(15,16);
	f_word = 'Flower';
}else if(p_word_o >= 0.27 && p_word_o < 0.28){
	p_word = randBetweenInt(17,19);
	f_word = 'Moon';
}else if(p_word_o >= 0.28 && p_word_o < 0.297){
	p_word = randBetweenInt(20,21);
	f_word = 'Wind';
}else if(p_word_o >= 0.297 && p_word_o < 0.31){
	p_word = randBetweenInt(22,24);
	f_word = 'Leave';
}else if(p_word_o >= 0.31 && p_word_o < 0.37){
	p_word = randBetweenInt(25,27);
	f_word = 'Come';
}else if(p_word_o >= 0.37 && p_word_o < 0.41){
	p_word = randBetweenInt(28,29);
	f_word = 'Receive';
}else if(p_word_o >= 0.46 && p_word_o < 0.47){
	p_word = randBetweenInt(30,31);
	f_word = 'Significance';
}else if(p_word_o >= 0.47 && p_word_o < 0.49){
	p_word = randBetweenInt(32,34);
	f_word = 'Rain';
}else if(p_word_o >= 0.49 && p_word_o < 0.505){
	p_word = randBetweenInt(35,36);
	f_word = 'Man';
}else if(p_word_o >= 0.505 && p_word_o < 0.535){

	p_word = randBetweenInt(37,38);
	f_word = 'Fortune';
	if( c < 0.11){
		p_word = '38';
		f_color = 'Gold';
		p_folder = 'gold/';
	}
}else if(p_word_o >= 0.535 && p_word_o < 0.555){
	p_word = 39;
	f_word = 'Advance';
}else if(p_word_o >= 0.555 && p_word_o < 0.56){
	p_word = randBetweenInt(40,41);
	f_word = 'Treasure';
}else if(p_word_o >= 0.56 && p_word_o < 0.565){

	p_word = 42;
	f_word = 'Rich';
	f_color = 'Gold';
	p_folder = 'gold/';

}else if(p_word_o >= 0.565 && p_word_o < 0.595){
	p_word = randBetweenInt(43,44);
	f_word = 'Noble';
}else if(p_word_o >= 0.595 && p_word_o < 0.605){  
	p_word = 45; 				
	f_word = 'underneath';
}else if(p_word_o >= 0.605 && p_word_o < 0.635){  
	p_word = randBetweenInt(47,49); 
	f_lan = 'English';
	f_word = 'Happy';
}else if(p_word_o >= 0.635 && p_word_o < 0.655){  
	p_word = 50; 
	f_lan = 'English';
	f_word = 'New';
}else if(p_word_o >= 0.655 && p_word_o < 0.663){  
	p_word = 51; 
	f_lan = 'English';
	f_word = 'Year';
}else if(p_word_o >= 0.663 && p_word_o < 0.693){  
	p_word = 52; 
	f_lan = 'Chinese';
	f_word = 'Happy year of rabbit';
	if(c < 0.5){
		f_color = 'Gold';
		p_folder = 'gold/';
	}
}else{
	p_word = randBetweenInt(53,81);
	f_lan = 'Chinese';
	if(p_word == 53){
		f_lan = 'English';
		f_word = 'Spring';
	}else if(p_word == 54 || p_word == 55){
		f_lan = 'English';
		f_word = 'Wishes';
	}else if(p_word == 56){
		f_lan = 'English';
		f_word = 'Fxhash';
		if(randBetween(0,1) < 0.4){
			p_word = '56';
			f_color = 'Gold';
			p_folder = 'gold/'; 
		}
	}else if(p_word == 57){
		f_lan = 'English';
		f_word = 'Tezos';
	}else if(p_word >= 58 && p_word <= 60){
		f_word = 'Luck';
	}else if(p_word >= 61 && p_word <= 62){
		f_word = 'Complacent';
	}else if(p_word >= 63 && p_word <= 65){
		f_word = 'Prosperous';
	}else if(p_word == 66){
		f_word = 'As';
	}else if(p_word == 67){
		f_word = 'Hodl';
	}else if(p_word >= 68 && p_word <= 72){
		f_word = 'Blessing';
	}else if(p_word == 73){
		f_word = 'Longevity';
	}else if(p_word == 74){
		f_word = 'Get rich';
	}else if(p_word == 75){
		f_word = 'Love';
	}else if(p_word >= 76 && p_word <= 77){
		f_word = 'Auspicious';
	}else if(p_word >= 78 && p_word <= 79){
		f_word = 'Safety';
	}else if(p_word >= 80 && p_word <= 81){
		f_word = 'Happiness';
	}
}



// p_flip_o = 0.05
//flip
if(p_flip_o < 0.1){
	f_flip = 'flipped';
	word.style.transform = "translate(-50%, -48%) scaleY(-1)";
}else{	
	f_flip = 'unflipped';
}

function randBetween(e, n) { return e + (n - e) * fxrand() }
function randBetweenInt(e, n) { return Math.floor(e + (n + 1 - e) * fxrand()) } 
bg.style.backgroundImage = "url(./bg/bg" + p_bg + ".jpg)", 
word.style.backgroundImage = "url(./word/" + p_folder+p_word + ".png)",

console.log(fxhash),
console.log(fxrand()),
window.$fxhashFeatures={
	"ID": f_id,
	"Background": f_background,
	"Character Color": f_color,
	"Meaning": f_word,
	"Direction": f_flip,
	"Language": f_lan,
};
console.log(f_id);
console.log(f_background);
console.log(f_color);
console.log(f_word);
console.log(f_flip);
console.log(f_lan);
