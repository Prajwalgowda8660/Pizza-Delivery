const sizes = [
    { name: 'Small', price: 8.99 },
    { name: 'Medium', price: 10.99 },
    { name: 'Large', price: 12.99 }
];

function calculateTotal() {
    const sizeIndex = document.getElementById('size').value;
    const selectedSize = sizes[sizeIndex];

    const selectedToppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    let totalPrice = selectedSize.price;
    totalPrice += selectedToppings.length * 0.99;

    document.getElementById('total').textContent = `$${totalPrice.toFixed(2)}`;
}

function placeOrder() {
    // Display the success message
    document.getElementById('order-message').style.display = 'block';

    // Hide the success message after a delay
    setTimeout(() => {
        document.getElementById('order-message').style.display = 'none';
    }, 3000); // 3 seconds delay

    // Reset the form
    document.getElementById('size').value = '0'; // Reset to Small
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    document.getElementById('total').textContent = '$0.00';
}
