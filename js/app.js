
//names of image files
var productNames = ["bag", "banana", "boots", "chair", "cthulhu", "dragon",
"pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];

var productArray = [];

//constructor function for the products
var Product = function(productName) {
  this.name = productName;
  this.imageFile = productName + ".jpg"
  this.numberOfVotes = 0;
  this.voteCounter = function() {
      this.numberOfVotes = this.numberOfVotes + 1;
  }
}

function createProducts() {
  for (var index = 0; index < productNames.length; index++)
    productArray.push(new Product(productNames[index]));
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
  addImage("images/"+productArray[index].imageFile);
  index = Math.floor(Math.random() * 14)
  addImage("images/"+productArray[index].imageFile);
  index = Math.floor(Math.random() * 14)
  addImage("images/"+productArray[index].imageFile);
}

//function called to log clicks
function recordClick(event) {
  var index = 0;
  var imageSource = event.target.src;
  var imageNodes = document.getElementsByTagName("img")[0];
  var imageNodes2 = document.getElementsByTagName("img")[1];
  var imageNodes3 = document.getElementsByTagName("img")[2];
  var partialFileName = imageSource.split("images/")[1];
 // console.log(imageSource.split("images/")[1]);

  do {
    index++
 } while (partialFileName !== productArray[index].imageFile);

 productArray[index].voteCounter();
 console.log(productArray[index].name)
 console.log("Number of votes so far: " + productArray[index].numberOfVotes);
var sectionNode = document.getElementById("image-container");
sectionNode.removeChild(imageNodes);
sectionNode.removeChild(imageNodes2);
sectionNode.removeChild(imageNodes3);
showImages();
}

//shows the images once the rest of the page loads
window.addEventListener("load", showImages);

//ranker object to manage all the attributes and behaviors around a visitor's product-ranking experience
var ranker = {

}