var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // images/dice1.png to images/dice6.png

// Select the left <img> element
var image1 = document.querySelector("img1");

// Set the src attribute to the random dice image
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png to images/dice6.png

// Select the left <img> element
var image2 = document.querySelector("img1");

// Set the src attribute to the random dice image
image2.setAttribute("src", randomImageSource2);