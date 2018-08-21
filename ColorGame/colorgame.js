var numSquares=6;

var colors=generateRandomColor(numSquares);

var pickedColor=pickColor();

var squares= document.querySelectorAll(".squares");
var rgbDisplay=document.getElementById("rgbDisplay");
var tryAgain=document.getElementById("tryAgain");
var h1=document.querySelector("h1");
var newColors=document.querySelector("#newColors");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	rgbDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	rgbDisplay.textContent=pickedColor;
	
	for(var i=0; i<squares.length; i++){
		
			squares[i].style.backgroundColor=colors[i];
	
			squares[i].style.display="block";

	}
})

newColors.addEventListener("click",function(){
	//generate new colors
	colors=generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//set the text gain to New COlors;
	newColors.textContent="New Colors";
	//update display to pickcolor
	rgbDisplay.textContent=pickedColor;
	//update h1 background to original color
	h1.style.backgroundColor="steelblue";
	//change colors of squaress
	for (var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
});

rgbDisplay.textContent=pickedColor;
for (var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];
	//add click listeners to every squares
	squares[i].addEventListener("click", function(){
		//grab the colors of every squares and save it to a variables
		var clickedColor=this.style.backgroundColor;
		//compare the color to our picked colors
		if (pickedColor===clickedColor){
			//update rgbDisplay for our picked color
			h1.style.backgroundColor=pickedColor;
			//change newGame text to Play Again?
			newColors.textContent="Play Again?";
			//make all other squares equal to picked square
			changeColor(clickedColor);
			//update tryAgain to Correct
			tryAgain.textContent="Correct!";
		}else{

			this.style.backgroundColor="#f1f1f1";
			tryAgain.textContent="Try Again!";
		}
	});
}

function changeColor(color){
	for (var i=0 ; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	//makes a variable index between 0-5 which will be returned to our pickedColor.
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColor(num){
	//make an array to hold the colors
	var arr=[];
	//get random color and push into arr
	for (var i=0; i<num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//generate random color red from 0-255
	var r=Math.floor(Math.random()*256);
	//generate random color green from 0-255
	var g=Math.floor(Math.random()*256);
	//generate random color blue from 0-255
	var b=Math.floor(Math.random()*256);
	//convention rgb(0, 0, 0);
	return "rgb(" + r + ", " + g + ", " +  b + ")";
}