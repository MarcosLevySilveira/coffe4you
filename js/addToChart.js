
function addToCart(productName, price, quantity) {
    // Get the quantity value from the input field
    var quantityValue = document.getElementById(quantity).value;

    // Create an object representing the product
    var product = {
        name: productName,
        price: price,
        quantity: parseInt(quantityValue),
    };

    // Get the existing cart items from local storage or initialize an empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    var existingProductIndex = cartItems.findIndex(
        (item) => item.name === productName
    );

    if (existingProductIndex !== -1) {
        // If the product is already in the cart, update the quantity
        cartItems[existingProductIndex].quantity += parseInt(quantityValue);
    } else {
        // If the product is not in the cart, add it
        cartItems.push(product);
    }

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the displayed cart contents on the checkout page
    displayCart();
}


// Function to display the cart contents on the checkout page
function displayCart() {
    // Get the cart content element
    var cartContent = document.getElementById('cart-content');

    // Get the cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the existing content in the cart
    cartContent.innerHTML = '';

    // Loop through each item in the cart and display it
    cartItems.forEach(function (item, index) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        var itemInfo = document.createElement('span');
        itemInfo.textContent = `${item.productName} - $${item.price} - Quantity: ${item.quantity}`;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Call a function to handle item deletion
            deleteCartItem(index);
        });

        itemElement.appendChild(itemInfo);
        itemElement.appendChild(deleteButton);
        cartContent.appendChild(itemElement);
    });
}

// Function to delete a cart item
function deleteCartItem(index) {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Save the updated cart items back to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Refresh the displayed cart contents on the checkout page
    displayCart();
}

// Function to initiate the display of cart contents on page load
window.onload = function () {
    displayCart();
};

function checkout() {
    // Redirect to the summary page
    window.location.href = 'summary.html';
}
