// Function to add a product to the cart
function addToCart(productName, price, quantityId) {
    // Get the quantity from the input field
    var quantity = document.getElementById(quantityId).value;

    // Create a new cart item
    var cartItem = {
        productName: productName,
        price: price,
        quantity: quantity
    };

    // Add the item to the cart stored in localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    var cartContent = document.getElementById('cart-content');

    // Clear the current content
    cartContent.innerHTML = '';

    // Check if the cart is empty
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Display each item in the cart
    cart.forEach(function (item) {
        var cartItemHTML = document.createElement('div');
        cartItemHTML.innerHTML = `
            <p><strong>${item.productName}</strong> - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}</p>
        `;
        cartContent.appendChild(cartItemHTML);
    });
}

// Function to handle the checkout process (you can implement your own logic here)
function checkout() {
    // Placeholder for checkout logic
    alert('Thank you for shopping with us!');

    // Clear the cart after checkout
    localStorage.removeItem('cart');
    updateCartDisplay(); // Update the display to show an empty cart
}