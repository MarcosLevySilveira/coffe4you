
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
