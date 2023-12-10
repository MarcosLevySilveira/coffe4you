// summary.js

document.addEventListener('DOMContentLoaded', function () {
    // Call a function to display the order summary
    displayOrderSummary();
});

function displayOrderSummary() {
    // Get the order summary content element
    var orderSummary = document.getElementById('order-summary');

    // Get the cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the existing content in the order summary
    orderSummary.innerHTML = '';

    // Create an object to store the quantity and total sum for each unique product
    var productSummary = {};

    // Loop through each item in the cart and update the product summary
    cartItems.forEach(function (item) {
        // If the product is not in the productSummary object, initialize its values
        if (!productSummary[item.productName]) {
            productSummary[item.productName] = {
                quantity: 0,
                total: 0,
            };
        }

        // Update the quantity and total for the current product
        productSummary[item.productName].quantity += item.quantity;
        productSummary[item.productName].total += item.price * item.quantity;
    });

    // Initialize the overall total sum
    var overallTotalSum = 0;

    // Loop through the productSummary object and display the order summary
    Object.keys(productSummary).forEach(function (productName) {
        var productData = productSummary[productName];

        var itemElement = document.createElement('div');
        itemElement.classList.add('order-item');

        var itemInfo = document.createElement('span');
        itemInfo.textContent = `${productName} - $${productData.total.toFixed(2)}`;

        // Add the product total to the overall total sum
        overallTotalSum += productData.total;

        itemElement.appendChild(itemInfo);
        orderSummary.appendChild(itemElement);
    });

    // Display the overall total sum
    var totalElement = document.createElement('div');
    totalElement.classList.add('order-total');
    totalElement.textContent = `Overall Total: $${overallTotalSum.toFixed(2)}`;

    orderSummary.appendChild(totalElement);
}
