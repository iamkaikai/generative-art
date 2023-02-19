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


var scheme_bg_case_1 = [
	['#DE3844','#D21C1C','#D82A2A','#B32D2F'],
	['#3F2727','#211D2C','#512F24','#3D241C'],
	['#191819','#3A3637','#2C2829','#3E3A3B'],
	['#A93301','#A12A0A','#852121','#B32D2F'],
	['#39323D','#130F26','#39323D','#150F29'],
	['#E76E42','#E69C4C','#FFBE4E','#D6693D'],
	['#336982','#024C71','#03507A','#014D7C'],
	['#89888A','#827B85','#988F99','#BDB9BB'],
	['#A5D4F0','#92E5FB','#94C3DF','#80C3C4'],
	['#2F2D76','#312C4B','#2D3391','#312535']
];

var scheme_case_1 = [
	['#E15B2C','#E26231','#E58C53'],
	['#B7432A','#8C3B2B','#B22626'],
	['#454442','#3D3936','#2F2B2A'],
	['#920C0F','#951812','#9C2813'],
	['#A79B91','#C0B79F','#5E5D66'],
	['#46567E','#444A69','#4D4D61'],
	['#282422','#423224','#302F2A'],
	['#AE8F8C','#988096','#D6D2D4'],
	['#2C80A2','#2C728B','#72C7EE'],
	['#2E1528','#2A1E36','#5B4452']
];

var scheme_bg_case_2 = [
	['#E27D13','#D6701A','#E37F10','#DE7617'],
	['#D7482B','#E15434','#D3522F','#DD462D'],
	['#DB5F23','#F26427','#C2512B','#DD551A'],
	['#DFA188','#CC5934','#E08161','#D67258'],
	['#D48F2A','#D9820C','#DAA33E','#CB8629'],
	['#413C42','#18162E','#312B39','#261E2B'],
	['#B7472E','#BA5F32','#B65542','#B74D3F'],
	['#5B2D2D','#703737','#623637','#642A3B'],
	['#A6BA51','#92C14C','#AFC74D','#AEAB45'],
	['#988E7E','#9C9891','#AAA189','#A99B86'],
];

var scheme_case_2 = [
	['#E58E0B','#DE7617','#E69113','#E6A10E','#E45918','#DE7617','#E13D1A'],
	['#154F67','#0F506E','#2F5763','#2A698A','#E47B18','#E9A129','#EB6D12'],
	['#EAA14C','#EC944D','#E95E1E','#ECB057','#4F5187','#6EADCC','#414559'],
	['#202A33','#373C42','#293033','#40444D','#FDEEDB','#C07069','#FCE2CB'],
	['#EA7E00','#E29D12','#DA660C','#F68F09','#D9CA65','#E0890E','#E8BE55'],
	['#A1948C','#A69C93','#897A6E','#CBCCC5','#040215','#59545A','#0B0B0D'],
	['#B63928','#AE4D29','#AC3C2E','#CC3623','#C16C21','#D89A60','#DA8B14'],
	['#54606C','#534554','#5D707F','#525F73','#342820','#7F3D50','#3B3130'],
	['#EFEBE8','#B8BC96','#F2E5D5','#E5E2DD','#C45F67','#9AC84C','#CF7284'],
	['#B73F3C','#AB7E63','#C43333','#C05B33','#DBBAAC','#BE9C96','#D3AC94'],
];

var scheme_bg_case_3 = [
	['#BD6058','#B64441','#BF625B','#BC5545'],
	['#CD4428','#D35451','#B1321F','#B1321F'],
	['#BE575A','#BF6E76','#BB6A73','#A7505A'],
	['#C78E59','#A87540','#B66C3D','#C37748'],
	['#BB5F3A','#9A4F28','#D3715C','#B75E3B'],
	['#D3660B','#D97114','#F59012','#D75F08'],
	['#E57F45','#F2935F','#E9854A','#F29258'],
	['#BDC8B8','#CCCCA1','#E6DFD1','#C0C7C0'],
	['#242424','#1A1A1A','#121212','#1A1A1A'],
	['#5E5D7F','#827675','#4860A4','#7E7F8B']		
];

var scheme_case_3 = [
	['#B22121','#BC4740','#B83530','#B74141','#A33051','#C95373','#9B2B4B'],
	['#2A3129','#D06E77','#282F27','#3D473F','#5C5D61','#706971','#748388'],
	['#D8BAD0','#E2929E','#FAE2F0','#F0D3E5','#AF1D16','#DB5945','#C22C12'],
	['#3C3E3D','#5C4A33','#2B3336','#383A39','#E64507','#AE6F45','#C37137'],
	['#1B1515','#3B2315','#291A15','#382A2A','#F9C45A','#DF9566','#FFD887'],
	['#F3AF04','#E78E0C','#F9B703','#EEB416','#D72D00','#E15B08','#DD5907'],
	['#F3AF04','#F2B934','#FFCC54','#E3963E','#E45926','#F47C38','#F57D4A'],
	['#A63925','#D84B22','#AA3905','#A63925','#DDB903','#EECE3A','#C6A505'],
	['#000000','#0A0A09','#000000','#292B2B','#6C7270','#515755','#A2A4A1'],
	['#4E5B4A','#5D7B61','#3C4238','#4F5E5B','#7C4040','#A82F1F','#A02C16'],
];

var scheme_bg_case_4 = [
	['#DBBE96','#DBCBA7','#DFC2A0','#D7B78E'],
	['#EBA804','#ECBA0B','#EDAA03','#F2C011'],
	['#D87203','#ED8E1C','#F8982A','#DD5803'],
	['#234A5E','#05456A','#0E1B3C','#2F4F64'],
	['#0F35A0','#1747B5','#0E3A9A','#0539B3'],
	['#DF8B73','#E6AB9D','#C66347','#D89585'],
	['#C69043','#D8A755','#B68737','#C88F48'],
	['#ED5B42','#E44739','#DF4C22','#DE3F2F'],
	['#87CCEB','#5EBDE3','#56A6BF','#7ACAEF'],
	['#3B222A','#261619','#1B1014','#2F191C']
];

var scheme_case_4 = [
	['#1B1515','#272727','#CA3912','#CA3912','#CA3B11','#D7B78E','#C4390A'],
	['#FFCE48','#FAD26D','#BA282A','#BF0700','#E76C00','#F2C814','#E78000'],
	['#F8DDCC','#F0E5DF','#DE2C42','#DE122B','#E4A40D','#E77B00','#E6B736'],
	['#074A74','#084476','#26231F','#0B0D0B','#004274','#27607B','#0B3665'],
	['#F9F5E9','#CACCD8','#DF8004','#ED930E','#030305','#1751C5','#040308'],
	['#BA3D43','#C54A4D','#D86E70','#D45E66','#D64E31','#D59080','#D03E31'],
	['#BF9E3F','#C3A543','#C16D24','#C87831','#DED0B6','#D4A458','#DAB9AE'],
	['#D8220F','#E0361F','#F8BE2C','#F4BB30','#D51814','#E07836','#E43935'],
	['#24687B','#256D85','#3486B5','#4395C4','#2780A8','#96D0F5','#1F7491'],
	['#170D11','#241A1C','#CD1A0B','#A4150D','#1C1012','#4B4141','#1B1014']
];

var scheme_bg_case_5 = [
	['#E5382C','#FF443A','#D3C2A2','#D21E15'],
	['#E6D9C2','#CFBFA5','#B9A283','#D9C8AA'],
	['#DC4D45','#BA5833','#D48B59','#DB714F'],
	['#DE6B4E','#F37857','#96585B','#C4665C'],
	['#3A3B42','#4B4852','#251D2A','#403F53'],
	['#A2A21D','#716E45','#A09B57','#DCC721'],
	['#193F71','#1B4172','#594C95','#364665'],
	['#942B10','#763322','#A33222','#A23C28'],
	['#E8D1A5','#EFDEBC','#F8E0B8','#DDC59F'],
	['#F4E3DC','#DFCAD4','#C5C16F','#F2DFC1'],
];

var scheme_case_5 = [
	['#842A19','#642D14','#F55F2D','#F9800F','#D9F2EF','#ED867E','#DAF0EE'],
	['#DD9702','#E99F00','#D45614','#CB4E06','#507AAC','#B0BEC1','#4E81AE'],
	['#DD9702','#E99F00','#F0E8D4','#FFE7DB','#DF7496','#EE825C','#E17897'],
	['#3C4D6A','#576374','#F5A31C','#F7AF1B','#7B9443','#E08127','#839444'],
	['#573C4B','#5D363D','#793721','#793721','#133145','#3A3B42','#133342'],
	['#EED427','#F4D82C','#FEFFDF','#FCF5C1','#174988','#EFD622','#1E4D81'],
	['#1B4F8D','#0B4D99','#C3AA0F','#D3B919','#AAC0A9','#DAD5C3','#A0B6A9'],
	['#B23F29','#B54F3B','#38382C','#252A23','#070604','#A7472F','#040404'],
	['#E0B873','#E3BC77','#DD824B','#DD7D4A','#D98547','#E3D1AD','#DD9D49'],
	['#E88F03','#E79301','#B5375C','#CC3B5E','#F3CE39','#F4E3DC','#EBD0A5'],
];

function setup(){
	createCanvas(frameRation*windowHeight*0.89, windowHeight*0.89);
	noStroke();
	p = randBetweenInt(1,10);	//num of blocks
	v = randBetweenInt(0,9);  //10 color sets from 0-9
	
	switch(p){
		case 1:
			background(scheme_bg_case_1[v][0]);			
			break;

		case 2:
			background(scheme_bg_case_2[v][0]);			
			break;

		case 3:
			background(scheme_bg_case_3[v][0]);			
			break;

		case 4:
			background(scheme_bg_case_4[v][0]);			
			break;

		case 5:
			background(scheme_bg_case_5[v][0]);			
			break;

		case 6:
			background(scheme_bg_case_1[v][0]);	
			break;
		case 7:
			background(scheme_bg_case_4[v][0]);	
		
		case 8:
			background(scheme_bg_case_5[v][0]);	
			break;
		case 9:
		background(scheme_bg_case_2[v][0]);	
		
		case 10:
			background(scheme_bg_case_3[v][0]);	
			break;
	}
}







function draw() {
				
		//caculate how many blocks
	switch(p){
		case 1:

			blck_1_pos_y = randBetween(2,4)*height*0.01; //top margin for random blck's position
			blck_1_w= width*0.93;
			blck_1_h = height*0.65;
			
			if(frameCount < 160){
				// blck_1_h	
				paint_horizonal (0, 0, width, height,scheme_bg_case_1[v][1], 0.011, stroke_height, 1500,30);
				paint_horizonal (0, 0, width, height,scheme_bg_case_1[v][2], 0.02, stroke_height,1200,100);
				paint_horizonal (0, 0, width, height,scheme_bg_case_1[v][0], 0.1, stroke_height*10, 1500,0);
				paint_vertical 	(0, 0, width, height*2, scheme_bg_case_1[v][3],0.01, stroke_length*10, stroke_height, 1200, 0);				//light yellow
				paint_vertical(0, 0, width, height, scheme_bg_case_1[v][3], 0.02, stroke_height, 1200, 100);		
			}
			if(120 < frameCount && frameCount < 550){
				paint_horizonal (margin, blck_1_pos_y, blck_1_w, blck_1_h, scheme_case_1[v][0], 0.2, stroke_height, 70, 0, 0);
				paint_horizonal (margin, blck_1_pos_y, blck_1_w, blck_1_h, scheme_bg_case_1[v][1], 0.05, stroke_height, 50, 0, 0);
				paint_vertical	(margin+3, blck_1_pos_y+10, blck_1_w-10, blck_1_h*1.05, scheme_case_1[v][1], 0.5, stroke_height*3, 850, 30, 0);
				paint_vertical	(margin+3, blck_1_pos_y+10, blck_1_w-10, blck_1_h*1.05, scheme_case_1[v][1], 0.03, stroke_length, stroke_height, 850, 0, 10);
				paint_horizonal (margin, blck_1_pos_y, blck_1_w, blck_1_h, scheme_case_1[v][2], 0.01, stroke_height, 30, 0 ,0);				
				paint_vertical	(margin, blck_1_pos_y, blck_1_w, blck_1_h, scheme_case_1[v][2], 0.1, stroke_height, 800, 0, 0);
			}
			break;

		case 2:

			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.7;
			blck_2_y = height*0.368;
			blck_2_height = blck_2_y + height*0.23;

			if(frameCount < 160){
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_2[v][1], 0.2, stroke_height, 150,150);
				paint_vertical 	(0, 0, width, height*2, scheme_bg_case_2[v][2],0.1, stroke_length*10, stroke_height, 100, 100);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_2[v][3], 0.2, stroke_height, 180,30);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_2[v][1], 0.3, stroke_height, 120,150);
			}
			if(120 < frameCount && frameCount < 550){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_2[v][0], 0.3, stroke_height, 150, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_2[v][1], 0.1, stroke_height, 120, 0, 10);
				paint_vertical 	(margin, margin+stroke_length, blck_1_width, blck_1_height, scheme_case_2[v][2],0.1, stroke_length*5, stroke_height, 30, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_2[v][3], 0.1, stroke_height, 120, 0, 10);
				
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_2[v][4], 0.2, stroke_height, 120,10, 10);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_2[v][5], 0.2, stroke_height, 10,10, 10);
				paint_vertical 	(margin, blck_2_y+5, blck_1_width, blck_2_height+40, scheme_case_2[v][6], 0.3, stroke_length, stroke_height, 50, 20, 0);
														
			}

			break;

		case 3:
			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.5-5;
			blck_2_y = height*0.257;
			blck_2_height = blck_2_y + height*0.46;

			if(frameCount < 200){
				paint_horizonal (0, -10, blck_bg_w+120, blck_bg_h, scheme_bg_case_3[v][1], 0.2, stroke_height, 150,150);
				paint_vertical 	(0, 0, width, height*2, scheme_bg_case_3[v][2],0.1, stroke_length*3, stroke_height, 100, 100);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_3[v][3], 0.2, stroke_height, 180,30);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_3[v][1], 0.3, stroke_height, 120,150);
			}
			if(120 < frameCount && frameCount < 550){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][0], 0.3, stroke_height, 150, 0, 0);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][1], 0.1, stroke_height, 120, 0, 0);
				paint_vertical 	(margin, margin+70, blck_1_width, blck_1_height, scheme_case_3[v][2],0.1, stroke_length*3.5, stroke_height, 30, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][3], 0.1, stroke_height, 120, 0, 0);
				
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][4], 0.2, stroke_height, 150,0, 3);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][5], 0.2, stroke_height, 50,10, 0);
				paint_vertical 	(margin, blck_2_y+5, blck_1_width, blck_2_height+100, scheme_case_3[v][6], 0.15, stroke_length*2, stroke_height, 50, 2);
				// paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][4], 0.1, stroke_height, 120,40, 0);
														
			}
			break;

		case 4:
			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.5-25;
			blck_2_y = height*0.245;
			blck_2_height = blck_2_y + height*0.1;
			blck_3_y = height*0.298;
			blck_3_height = blck_3_y + height*0.38;
			
			if(frameCount < 200){
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_4[v][1], 0.1, stroke_height, 150,150);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_4[v][2], 0.1, stroke_height, 150,0);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_4[v][3], 0.1, stroke_height, 150,50);	
			}
			if(120 < frameCount && frameCount < 550){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height-7, scheme_case_4[v][0], 0.3, stroke_height, 150, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_bg_case_4[v][0], 0.01, stroke_height, 150, 0, 0);
				paint_vertical 	(margin, margin+80, blck_1_width, blck_1_height, scheme_case_4[v][1],0.4, stroke_length*3.4, stroke_height, 30, 0, 10);
				
				paint_horizonal (margin+9, blck_2_y, blck_1_width-30, blck_2_height, scheme_case_4[v][2], 0.15, stroke_height*0.5, 150, 0, 10);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_bg_case_4[v][1], 0.03, stroke_height, 150, 0, 30);
				paint_vertical 	(margin, blck_2_y+13, blck_1_width-7, blck_2_height, scheme_case_4[v][3], 0.2, stroke_length/1.3, stroke_height, 50, 2);
				
				paint_horizonal (margin, blck_3_y, blck_1_width-5, blck_3_height, scheme_case_4[v][4], 0.3, stroke_height, 150, 0, 10);
				paint_horizonal (margin, blck_3_y, blck_1_width-5, blck_3_height, scheme_case_4[v][5], 0.03, stroke_height, 150, 0, 10);
				paint_vertical 	(margin, blck_3_y, blck_1_width, blck_3_height*1.15, scheme_case_4[v][6], 0.2, stroke_length*1.5, stroke_height, 50, 2);
										
			}
			break;

		case 5:
			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.22;
			blck_2_y = height*0.125;
			blck_2_height = blck_2_y + height*0.57;
			blck_3_y = height*0.41;
			blck_3_height = blck_3_y + height*0.15;
			
			if(frameCount < 200){
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_5[v][1], 0.1, stroke_height, 150,150);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_5[v][2], 0.1, stroke_height, 150,0);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_5[v][3], 0.1, stroke_height, 150,50);	
			}
			if(150 < frameCount && frameCount < 480){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height-7, scheme_case_5[v][0], 0.15, stroke_height*0.73, 100, 0, 50);
				paint_horizonal (margin+30, margin, blck_1_width, blck_1_height, scheme_bg_case_5[v][0], 0.04, stroke_height, 150, 0, 0);
				paint_vertical 	(margin, margin+30, blck_1_width, blck_1_height, scheme_case_5[v][1],0.4, stroke_length*1.6, stroke_height, 30, 0, 10);
				
				paint_horizonal (margin, blck_2_y-8, blck_1_width-20, blck_2_height, scheme_case_5[v][2], 0.15, stroke_height*0.9, 200, 10, 10);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_bg_case_5[v][1], 0.02, stroke_height, 200, 0, 5);
				paint_vertical 	(margin, blck_2_y, blck_1_width-7, blck_2_height+40, scheme_case_5[v][3], 0.2, stroke_length*2, stroke_height*2, 100, 10);
				
				paint_horizonal (margin+5, blck_3_y, blck_1_width-30, blck_3_height, scheme_case_5[v][4], 0.15, stroke_height*0.5, 120, 0, 50);
				paint_horizonal (margin, blck_3_y, blck_1_width, blck_3_height, scheme_case_5[v][5], 0.03, stroke_height, 150, 0, 10);
				paint_vertical 	(margin+5, blck_3_y+10, blck_1_width-20, blck_3_height*1.1, scheme_case_5[v][6], 0.2, stroke_length*1.5, stroke_height, 50, 2);
										
			}
			break;

		case 6:
			blck_1_pos_y = height*0.2; //top margin for random blck's position
			blck_1_w= width*0.99;
			blck_1_h = height*0.5;
			
			if(frameCount < 200){
				// blck_1_h	
				paint_horizonal (0, 0, width, height,scheme_bg_case_1[v][1], 0.011, stroke_height*2, 1500,30);
				paint_horizonal (0, 0, width, height,scheme_bg_case_1[v][2], 0.02, stroke_height*2,1200,100);
				paint_horizonal (0, 0, width, height,scheme_bg_case_1[v][0], 0.1, stroke_height*10, 1500,0);
				paint_vertical 	(0, 0, width, height*2, scheme_bg_case_1[v][3],0.01, stroke_length*10, stroke_height, 1200, 0);				//light yellow
				paint_vertical(0, 0, width, height, scheme_bg_case_1[v][3], 0.02, stroke_height*2, 1200, 100);		
			}
			if(120 < frameCount && frameCount < 600){
				paint_horizonal (margin-10, blck_1_pos_y, blck_1_w, blck_1_pos_y+180, scheme_case_1[v][0], 0.05, stroke_height, 100, 0, 0);
				paint_horizonal (margin-10, blck_1_pos_y, blck_1_w, blck_1_pos_y+180,scheme_bg_case_1[v][1], 0.05, stroke_height, 50, 0, 0);
				paint_vertical	(margin-5, blck_1_pos_y+10, blck_1_w-10, blck_1_h, scheme_case_1[v][1], 0.3, stroke_height*3, 850, 30, 0);
				paint_vertical	(margin-5, blck_1_pos_y+10, blck_1_w-10, blck_1_h, scheme_case_1[v][1], 0.03,  stroke_height*3, 850, 30, 0);
				paint_horizonal (margin-10, blck_1_pos_y, blck_1_w, blck_1_pos_y+180, scheme_case_1[v][2], 0.01, stroke_height, 30, 50 ,0);				
				paint_vertical	(margin-5, blck_1_pos_y+10, blck_1_w-10, blck_1_h, scheme_case_1[v][2], 0.1, stroke_height, 100, 0, 0);
			}
			break;

		case 7:
			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.5-25;
			blck_2_y = height*0.245;
			blck_2_height = blck_2_y + height*0.1;
			blck_3_y = height*0.298;
			blck_3_height = blck_3_y + height*0.38;
			
			if(frameCount < 150){
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_4[v][1], 0.1, stroke_height, 150,150);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_4[v][2], 0.1, stroke_height, 150,0);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_4[v][3], 0.1, stroke_height, 150,50);	
			}
			if(120 < frameCount && frameCount < 300){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height-7, scheme_case_4[v][0], 0.3, stroke_height, 150, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_bg_case_4[v][0], 0.01, stroke_height, 150, 0, 0);
				paint_vertical 	(margin, margin+80, blck_1_width, blck_1_height, scheme_case_4[v][1],0.4, stroke_length*3.4, stroke_height, 30, 0, 10);
				
				paint_horizonal (margin+9, blck_2_y, blck_1_width-30, blck_2_height, scheme_case_4[v][2], 0.15, stroke_height*0.5, 150, 0, 10);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_bg_case_4[v][1], 0.03, stroke_height, 150, 0, 30);
				paint_vertical 	(margin, blck_2_y+13, blck_1_width-7, blck_2_height, scheme_case_4[v][3], 0.2, stroke_length/1.3, stroke_height, 50, 2);
				
				paint_horizonal (margin, blck_3_y, blck_1_width-5, blck_3_height, scheme_case_4[v][4], 0.3, stroke_height, 150, 0, 10);
				paint_horizonal (margin, blck_3_y, blck_1_width-5, blck_3_height, scheme_case_4[v][5], 0.03, stroke_height, 150, 0, 10);
				paint_vertical 	(margin, blck_3_y, blck_1_width, blck_3_height*1.15, scheme_case_4[v][6], 0.2, stroke_length*1.5, stroke_height, 50, 2);
										
			}

		case 8:
			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.22;
			blck_2_y = height*0.125;
			blck_2_height = blck_2_y + height*0.57;
			blck_3_y = height*0.41;
			blck_3_height = blck_3_y + height*0.15;
			
			if(frameCount < 170){
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_5[v][1], 0.1, stroke_height, 150,150);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_5[v][2], 0.1, stroke_height, 150,0);
				paint_horizonal (0, -10, blck_bg_w, blck_bg_h, scheme_bg_case_5[v][3], 0.1, stroke_height, 150,50);	
			}
			if(150 < frameCount && frameCount < 300){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height-7, scheme_case_5[v][0], 0.15, stroke_height*0.73, 100, 0, 50);
				paint_horizonal (margin+30, margin, blck_1_width, blck_1_height, scheme_bg_case_5[v][0], 0.04, stroke_height, 150, 0, 0);
				paint_vertical 	(margin, margin+30, blck_1_width, blck_1_height, scheme_case_5[v][1],0.4, stroke_length*1.6, stroke_height, 30, 0, 10);
				
				paint_horizonal (margin, blck_2_y-8, blck_1_width-20, blck_2_height, scheme_case_5[v][2], 0.15, stroke_height*0.9, 200, 10, 10);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_bg_case_5[v][1], 0.02, stroke_height, 200, 0, 5);
				paint_vertical 	(margin, blck_2_y, blck_1_width-7, blck_2_height+40, scheme_case_5[v][3], 0.2, stroke_length*2, stroke_height*2, 100, 10);
				
				paint_horizonal (margin+5, blck_3_y, blck_1_width-30, blck_3_height, scheme_case_5[v][4], 0.15, stroke_height*0.5, 120, 0, 50);
				paint_horizonal (margin, blck_3_y, blck_1_width, blck_3_height, scheme_case_5[v][5], 0.03, stroke_height, 150, 0, 10);
				paint_vertical 	(margin+5, blck_3_y+10, blck_1_width-20, blck_3_height*1.1, scheme_case_5[v][6], 0.2, stroke_length*1.5, stroke_height, 50, 2);
										
			}
			break;
		
		case 9:

			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.7;
			blck_2_y = height*0.368;
			blck_2_height = blck_2_y + height*0.23;

			if(frameCount < 160){
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_2[v][1], 0.2, stroke_height, 150,150);
				paint_vertical 	(0, 0, width, height*2, scheme_bg_case_2[v][2],0.1, stroke_length*10, stroke_height, 100, 100);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_2[v][3], 0.2, stroke_height, 180,30);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_2[v][1], 0.3, stroke_height, 120,150);
			}
			if(120 < frameCount && frameCount < 550){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_2[v][0], 0.3, stroke_height, 150, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_2[v][1], 0.1, stroke_height, 120, 0, 10);
				paint_vertical 	(margin, margin+stroke_length, blck_1_width, blck_1_height, scheme_case_2[v][2],0.1, stroke_length*5, stroke_height, 30, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_2[v][3], 0.1, stroke_height, 120, 0, 10);
				
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_2[v][4], 0.2, stroke_height, 120,10, 10);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_2[v][5], 0.2, stroke_height, 10,10, 10);
				paint_vertical 	(margin, blck_2_y+5, blck_1_width, blck_2_height+40, scheme_case_2[v][6], 0.3, stroke_length, stroke_height, 50, 20, 0);
														
			}

		case 10:
			blck_bg_w = width;
			blck_bg_h = height;
			blck_1_width = width-margin*3;
			blck_1_height = height*0.5-5;
			blck_2_y = height*0.257;
			blck_2_height = blck_2_y + height*0.46;

			if(frameCount < 200){
				paint_horizonal (0, -10, blck_bg_w+120, blck_bg_h, scheme_bg_case_3[v][1], 0.2, stroke_height, 150,150);
				paint_vertical 	(0, 0, width, height*2, scheme_bg_case_3[v][2],0.1, stroke_length*3, stroke_height, 100, 100);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_3[v][3], 0.2, stroke_height, 180,30);
				paint_horizonal (0, 0, blck_bg_w, blck_bg_h, scheme_bg_case_3[v][1], 0.3, stroke_height, 120,150);
			}
			if(120 < frameCount && frameCount < 530){
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][0], 0.3, stroke_height, 150, 0, 0);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][1], 0.1, stroke_height, 120, 0, 0);
				paint_vertical 	(margin, margin+70, blck_1_width, blck_1_height, scheme_case_3[v][2],0.1, stroke_length*3.5, stroke_height, 30, 0, 10);
				paint_horizonal (margin, margin, blck_1_width, blck_1_height, scheme_case_3[v][3], 0.1, stroke_height, 120, 0, 0);
				
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][4], 0.2, stroke_height, 150,0, 3);
				paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][5], 0.2, stroke_height, 50,10, 0);
				paint_vertical 	(margin, blck_2_y+5, blck_1_width, blck_2_height+100, scheme_case_3[v][6], 0.15, stroke_length*2, stroke_height, 50, 2);
				// paint_horizonal (margin, blck_2_y, blck_1_width, blck_2_height, scheme_case_3[v][4], 0.1, stroke_height, 120,40, 0);
														
			}
			break;	

	}
	
	//animation stop
	if(frameCount == 500){
		// noLoop();
		fxpreview(); 
	}

}

function paint_horizonal(startX, startY, endX, endY, color, brush_opacity,stroke_height, brush_density, random){

	let y = 0;
	let drawWidth = randBetween(startX, endX-stroke_length);
	let drawHeight = randBetween(startY, endY-stroke_height);
	let x = startX + drawWidth;
	y = startY + drawHeight;
	let rand_Position = randBetween(-random, random);
	brush_horizontal(	x+rand_Position, y+rand_Position,color,brush_opacity,stroke_length,stroke_height,brush_density);
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
	
	let drawWidth = randBetween(startX, endX-stroke_height);
	let drawHeight = randBetween(startY, endY-stroke_length);
	let x = startX + drawWidth;
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
