
//names of image files
var productNames = ["boots", "banana", "bag", "chair", "cthulhu", "dragon",
"pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine_glass"];

var productArray = [];

//constructor function for the products
var Product = function(productName) {
  this.label = productName;
  this.imageFile = productName + ".jpg";
  this.y = 0;
  this.voteCounter = function() {
    this.y += 1;
  }
}

//function to create image elements, console.log clicks and append them to the section element
function addImage(imageFileName) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  setTimeout(function(){
    image.className = "fade-in";
    }, 250);
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

//function to render images to the page
function showImages() {
  var index = Math.floor(Math.random() * 14);
  addImage("images/"+productArray[index].imageFile);
  do {
    var index2 = Math.floor(Math.random() * 14);
  } while (index2 == index);
  addImage("images/"+productArray[index2].imageFile);
  do {
    var index3 = Math.floor(Math.random() * 14);
  } while (index3 == index2 || index3 == index);
  addImage("images/"+productArray[index3].imageFile);
}

//this will track how many times the user has voted
var fifteenVoteTracker = 0;

//function to find the product image in the array that matches the partial image url,
// then increase the vote count of that Product. After this is done 15 times, button will appear
function recordClick(event) {
  var index = 0;
  var imageSource = event.target.src;
  var partialFileName = imageSource.split("images/")[1];
  var imageNodes = document.getElementsByTagName("img")[0];
  var imageNodes2 = document.getElementsByTagName("img")[1];
  var imageNodes3 = document.getElementsByTagName("img")[2];
  imageNodes.className = "fade-out";
  imageNodes2.className = "fade-out";
  imageNodes3.className = "fade-out";

  while (partialFileName !== productArray[index].imageFile) {
    index++
  }

  productArray[index].voteCounter();
  console.log("Product name: " +productArray[index].label);
  console.log("Number of votes so far: " + productArray[index].y);
  var sectionNode = document.getElementById("image-container");
  setTimeout(function(){
    sectionNode.removeChild(imageNodes);
    sectionNode.removeChild(imageNodes2);
    sectionNode.removeChild(imageNodes3);
    fifteenVoteTracker += 1;
    if (fifteenVoteTracker == 15) {
      localStorage.setItem("chartInfo", JSON.stringify(productArray));
  
      document.getElementById("button-container").innerHTML ="<input type=\"button\" value=\"Show results!\" id=\"listButton\">"
      + "<input type=\"button\" value=\"Keep voting!\" id=\"reset-button\">";
      document.getElementById("listButton").addEventListener("click", createChart);
      document.getElementById("reset-button").addEventListener("click", keepVoting);
    }
    else {
      showImages();
    }
    move();
    }, 250);
}

var width = 0;

//function to manage the progress bar
function move() {
  var elem = document.getElementById("myBar");
  width += 7;
  elem.style.width = width + '%';
}

function keepVoting() {
  width = 0;
  fifteenVoteTracker = 0;
  showImages();
  document.getElementById('listButton').style.visibility = 'hidden';
  document.getElementById('reset-button').style.visibility = 'hidden';
  document.getElementById('chartContainer').className = "chart-fade-out";
}

function showLocalStorage() {
  if(localStorage.getItem("chartInfo") != null) {
    var storedProducts = JSON.parse(localStorage.getItem("chartInfo"));
    for (var index = 0; index < storedProducts.length; index++) {
      var newProduct = new Product(storedProducts[index].label);
      newProduct.y = storedProducts[index].y;
      productArray.push(newProduct);
    }
  } else {
      function createProducts() {
      for (var index = 0; index < productNames.length; index++) {
        productArray.push(new Product(productNames[index]));
      }
    }
    createProducts();
  }
  showImages();
}

window.addEventListener("load", showLocalStorage);

//ranker object to manage all the attributes and behaviors around a visitor's product-ranking experience
var ranker = {}
