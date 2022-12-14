var confirmation_image = document.getElementById("confirmation_image");
var product_details = document.getElementById("product_details");
var shipping_details = document.getElementById("shipping_details");
var customer_firstName = document.getElementById("customer_firstName");
var customer_lastName = document.getElementById("customer_lastName");
var customer_phNumber = document.getElementById("customer_phNumber");
var customer_email = document.getElementById("customer_email");
var data;
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
    var i = localStorage.getItem("index");
    var customerObj = localStorage.getItem("customerObj");
    var result = JSON.parse(customerObj);
    confirmation_image.setAttribute("src", "images/" + data[i].image_path);
    product_details.innerHTML = data[i].product_description;
    shipping_details.innerHTML = data[i].shipping_details;
    customer_firstName.innerHTML = result.fname;
    customer_lastName.innerHTML = result.lname;
    customer_phNumber.innerHTML = result.phNum;
    customer_email.innerHTML = result.email;
  }
};

function goToHome(){
  location.href = "/";

}