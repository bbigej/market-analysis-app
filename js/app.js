
//names of image files
var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg",
"pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

productArray = [];

//constructor function for the products
var Product = function(imageFile) {
  this.imageFile = imageFile;
  this.numberOfVotes = 0;
  this.voteCounter = function() {
      this.numberOfVotes = this.numberOfVotes + 1;
  }
}

function createProducts() {
  for (var index = 0; index < imageNames.length; index++)
    productArray.push(new Product(imageNames[index]));
}

createProducts();


//function to create image elements, console.log clicks and append them to the section element
function addImage(imageFileName) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}


//function to render images to the page
function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImage("images/"+imageNames[index]);
  index = Math.floor(Math.random() * 14)
  addImage("images/"+imageNames[index]);
  index = Math.floor(Math.random() * 14)
  addImage("images/"+imageNames[index]);
}

//function called to log clicks
function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked: "+imageSource);
}

//shows the images once the rest of the page loads
window.addEventListener("load", showImages);

//ranker object to manage all the attributes and behaviors around a visitor's product-ranking experience
var ranker = {

}


  .addEventListener("click", this.voteCounter);