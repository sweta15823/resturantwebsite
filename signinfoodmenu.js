document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.getAttribute('data-price'));
        const totalAmountElement = document.getElementById('total-amount');
        const currentTotal = parseFloat(totalAmountElement.textContent);
        totalAmountElement.textContent = (currentTotal + price).toFixed(2);
    });
});
document.getElementById('payButton').addEventListener('click', function() {
    window.location.href = 'payment.html';
});