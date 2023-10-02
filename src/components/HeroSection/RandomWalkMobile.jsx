import React, {useEffect} from "react";
import Sketch from "react-p5";


let img;
let h = 400;
let w = 380;
let x1 = w/2;
let y1 = h/2;

let x2 = w/2;
let y2 = h/2;

  
let xoff = 0.0;
let yoff = 100000.0;

let noiseIncrement = 0.01;
let r =0;
let g =0;
let b =0;

var loopMax=1;
var count=1;

let x = 50;
let y = 50;
const RandomWalk = () => {


	const setup = (p5, canvasParentRef) => {
		
		  p5.frameRate(20000000);
		  p5.createCanvas(w,h).parent(canvasParentRef);
		

		  p5.background(252,252,252,158);
		  x1 = p5.map(p5.noise(xoff),0,1,0,w);
		  y1 = p5.map(p5.noise(yoff),0,1,0,h);
		
		  var imageUrls = [
			"/assets/profilepicblacknwhite2.jpg",
		  ];
		  var randomImage = p5.random(imageUrls);
		  img = p5.loadImage(randomImage);
		  p5.background(255,250,235);
	};

	const draw = (p5) => {
		

		for (var i=1; i <= loopMax; i++) {
			xoff += noiseIncrement;
			yoff += noiseIncrement;
			x2 = p5.map(p5.noise(xoff),0,1,0,w);
			y2 = p5.map(p5.noise(yoff),0,1,0,h);
			let rgb = img.get(x2,y2);
			r=p5.red(rgb);
			g=p5.green(rgb);
			b=p5.blue(rgb);
			p5.stroke(r,g,b);
			p5.strokeWeight(0.5);
			p5.line(x1,y1,x2,y2);
			x1=x2;
			y1=y2;
		}
			count += 1;
			if (count > 60) {
				loopMax ++;
			}
			if (count > 240 && count < 500) {
				loopMax = 2;
			}
			loopMax = p5.max(loopMax, 4);
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default RandomWalk;