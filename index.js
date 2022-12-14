var myImage = document.getElementById("image_display");
var product_info = document.getElementById("product_info");
var shipping_info = document.getElementById("shipping_info");
var customer_review = document.getElementById("customer_review");
var data;
var i = 0;

function prevImage() {
  if (i <= 0) i = data.length;
  i--;
  return setImg();
}

function nextImage() {
  if (i >= data.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  // Define object
  myImage.setAttribute("src", "images/" + data[i].image_path);
  product_info.innerHTML = data[i].product_description;
  shipping_info.innerHTML = data[i].shipping_details;
  customer_review.innerHTML = data[i].customer_reviews;
  var obj = {
    myImage: myImage,
    product_info: product_info,
    shipping_info: shipping_info,
    customer_review: customer_review,
  };
  // Return obj
  return obj;
}

//=======================================================================================================
// Create the XMLHttpRequest object.
var ajax_req = new XMLHttpRequest();
// Initialize the request
ajax_req.open("GET", "./guitardata.json");
// Send the request
ajax_req.send();
// Fired once the request completes successfully
ajax_req.onload = function () {
  // Check if the request was a success
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    // Get and convert the responseText into JSON
    var response = JSON.parse(ajax_req.responseText);
    data = response.allProducts;
    product_info.innerHTML = data[i].product_description;
    shipping_info.innerHTML = data[i].shipping_details;
    customer_review.innerHTML = data[i].customer_reviews;
  }
};
// ============================================================================
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function redirect_page(){
  location.href = "/purchase.html";
localStorage.setItem('index', i)
}

