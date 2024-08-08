document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
    
    cart.addEventListener('click', function (e) {
        if (e.target.classList.contains('quantity-button')) {
            handleQuantityChange(e.target);
        } else if (e.target.classList.contains('remove-button')) {
            handleRemoveItem(e.target);
        } else if (e.target.classList.contains('like-button')) {
            handleLikeItem(e.target);
        }
    });

    function handleQuantityChange(button) {
        const cartItem = button.closest('.cart-item');
        const quantityElement = cartItem.querySelector('.item-quantity');
        const priceElement = cartItem.querySelector('.item-price');
        let quantity = parseInt(quantityElement.textContent);
        const price = parseFloat(priceElement.textContent.slice(1));
        
        if (button.classList.contains('plus')) {
            quantity++;
        } else if (button.classList.contains('minus') && quantity > 1) {
            quantity--;
        }
        
        quantityElement.textContent = quantity;
        updateTotal();
    }

    function handleRemoveItem(button) {
        button.closest('.cart-item').remove();
        updateTotal();
    }

    function handleLikeItem(button) {
        button.classList.toggle('liked');
    }

    function updateTotal() {
        let total = 0;
        const cartItems = cart.querySelectorAll('.cart-item');
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.slice(1));
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }
});

