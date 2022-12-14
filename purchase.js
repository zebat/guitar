//===================================================
// Redirect to Purchase page
var purchase_image = document.getElementById("purchase_image");
var purschasing_product_info = document.getElementById(
  "purschasing_product_info"
);
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
      var i = localStorage.getItem("index")
      purchase_image.setAttribute("src", "images/" + data[i].image_path);
      purschasing_product_info.innerHTML = data[i].product_description;
    }
  };

function formSubmit(){
    var fname = document.getElementById("customer_First_name").value;
    var lname = document.getElementById("customer_Last_name").value;
    var phNum = document.getElementById("contact_number").value;
    var email = document.getElementById("customer_email").value;
console.log(phNum)
    document.getElementById("get_firstName").innerHTML = fname;
    document.getElementById("get_lastName").innerHTML = lname;
    document.getElementById("get_phNumber").innerHTML = phNum;
    document.getElementById("get_email").innerHTML = email;

    const customerObj = {
        fname :  fname,
        lname : lname,
        phNum : phNum,
        email : email 
      }
      
    localStorage.setItem("customerObj", JSON.stringify(customerObj));
}

function confirm_page(){
    location.href = "/confirm.html";
  }
  