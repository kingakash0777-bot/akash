let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert('Item added to cart!');
  });
});

