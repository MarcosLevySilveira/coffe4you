var currentProductIndex = 0;
var products = document.querySelectorAll('.product');

function showProduct(index) {
    for (var i = 0; i < products.length; i++) {
        products[i].style.display = 'none';
    }
    products[index].style.display = 'block';
}

function showNext() {
    currentProductIndex = (currentProductIndex + 1) % products.length;
    showProduct(currentProductIndex);
}

function showPrev() {
    currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
    showProduct(currentProductIndex);
}

function addToCart(productName, price, quantityId) {
    var quantity = document.getElementById(quantityId).value;
    var totalPrice = price * quantity;

    // Here you can implement the logic to add the product to the cart
    // For simplicity, we'll just log the details to the console
    console.log('Product added to cart:');
    console.log('Product Name:', productName);
    console.log('Quantity:', quantity);
    console.log('Total Price:', totalPrice);
}

// Show the first product initially
showProduct(currentProductIndex);