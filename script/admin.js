let cartButton = document.getElementById('cart-button');
let cartPopup = document.getElementById('cart-popup');
let cartCloseButton = document.getElementById('close-cart-popup');

cartButton.addEventListener('click', function() {
    // This is where i'd add the logic to fetch the cart items and total

    // For now, I'll just show the popup
    cartPopup.style.display = 'block';
});

cartCloseButton.addEventListener('click', function() {
    cartPopup.style.display = 'none';
});