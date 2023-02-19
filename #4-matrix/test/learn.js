function setup() {
	createCanvas(1160, 840);
	//fullScreen();
	theFont = "Arial";
	textFont(theFont);
	textAlign(CENTER, TOP);

	streams = [];

	for (var x = 10; x < width; x += 20) { //add streams across the width of the screen with text size intervals
		streams.push(new Stream(x));
	} //end for

	currentX = 10;
	tempWidth = width;
	
	textSize(20);
}

function draw() {
	background(0, 20, 0);

	if (tempWidth == width) { //adds more streams when the window is maximized
		for (var i = 0; i < streams.length; i++) {
			s = streams[i];
			currentX += 20;
			if (keyIsPressed == true) {
				s.update(0, 0);
			} //end if
			else {
				s.update(2, 0.001);
			} //end else
		} //end for
	} //end if
	else {
		streams = [];
		for (var x = 10; x < width; x += 20) {
			streams.push(new Stream(x));
		} //end for
		tempWidth = width;
	} //end else
	currentX = 10;
}



this.getRandomChar = function() {
    this.charType = round(random(1)); //return decimal return 0 or 1 with the round
     if (this.charType == 0) {
        this.rndChar = round(random(48, 90)); //0 to Z is 48 to 90
        //char built in func only takes base10
        //character map is in hexadecimal, need to convert
        this.theChar = char(this.rndChar);
				return this.theChar
    } else if (this.charType == 1) {
        this.rndChar = round(random(12449, 12615)); //Katakana 12449-12615
        this.theChar = char(this.rndChar);
				return this.theChar
    } //end else
} //end getRandomCHar







function Char(tempX, tempY) {

	this.x = tempX;
    this.y = tempY;

    this.theChar = getRandomChar();

    this.show = function() {
        text(this.theChar, this.x, this.y);
    } //endShow
} //end class




function Stream(tempX) {
	this.chars = [];
	this.numChar = round(random(10, 30));
	this.x = tempX;
	this.rndPos = round(random(0, height));

        
	//adding from top to bottom, bottom is last element of the array   
	for (var y = 0; y < this.numChar * 20; y += 20) { //20 is text size 
		this.chars.push(new Char(tempX, y + this.rndPos)); //takes 2 integer objects  
	} //end for 

    this.update = function(speed, chance) {

        //orig    for(Char c: chars)
        for (var i = 0; i < this.chars.length; i++) { // for every character in the character array
            //how we pick colors
            this.alpha = map(i, 0, this.chars.length - 1, 50, 255); //map scale from 0 to 19 to 50 to 255

            fill(0, 250, 80, this.alpha); //alpha makes the characters fade
            if (i == this.chars.length - 1) {
                fill(250, 255, 250);
            } //end if

            this.chars[i].show();

            //move characters
            if (frameCount % speed == 0) {
                this.chars[i].y += 20; //20 is size of text

                //character stays if size-1 new char
                if (i == this.chars.length - 1) {
                    this.chars[i].theChar = getRandomChar();
                } //end if
                else {
                    this.chars[i].theChar = this.chars[i + 1].theChar;
                } //end else
            } //end if

            //change the characters randomly
            if (random(1) < chance) { //probability of the character changing in the stream
                this.chars[i].theChar = getRandomChar(); //random chance it changes
            } //end if

        } //end for

        //checks if the stream goes over the window height
        if (this.chars[0].y > height) {
            for (var i = 0; i < this.chars.length; i++) {
                this.chars[i].y = ((this.chars.length - 1) - i) * -20;
            } //end if
        } //end for
    } //end update
} //end class