// Fetch the navbar and footer content using AJAX
var navbar = new XMLHttpRequest();
navbar.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    document.getElementById("navbar").innerHTML = this.responseText;
  }
};
navbar.open("GET", "public/component/navbar.html", true);
navbar.send();

var footer = new XMLHttpRequest();
footer.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    document.getElementById("footer").innerHTML = this.responseText;
  }
};
footer.open("GET", "public/component/footer.html", true);
footer.send();

// Function to add product
function addToCart(productId) {
  var productName = document.getElementById("product-name-" + productId).innerText;
  // parse kilo's
  var parsePrice = document.getElementById("product-price-" + productId).innerText;
  var productPrice = parseInt(parsePrice) * 1000;

  $.ajax({
    url: "public/pages/add.php",
    type: "POST",
    data: {
      productName: productName,
      productPrice: productPrice,
    },
    success: function (response) {
      alert(productName + " added to cart");
      console.log("Success add: ", response);
    },
    error: function (xhr, status, error) {
      console.log("Error adding product to cart.");
    },
  });
}

// Function to openModal and read orders.txt
function openModal() {
  $.ajax({
    url: "public/pages/read.php",
    type: "POST",
    success: function(data) {
      $('#order-content').html(data);
      $('#my_modal').get(0).showModal();
    },
    error: function(err) {
      console.error("Error", err);
    }
  });
}