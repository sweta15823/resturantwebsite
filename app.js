$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    alert('booked   successfully');

    // Simulate form submission
    const confirmationMessage = `
        Thank you, ${name}! Your table has been booked for ${guests} guests on ${date} at ${time}.
        We will send a confirmation to ${email} or contact you at ${phone} if necessary.
    `;

    document.getElementById('confirmationMessage').innerText = confirmationMessage;
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Clear form fields
    document.getElementById('bookingForm').reset();
});




function addToCart() {
    window.location.href = 'signin.html';
}


