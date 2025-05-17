
const signInButton = document.getElementById('signIn');
const registerButton = document.getElementById('register');
const container = document.querySelector('.container');
const signInForm = document.getElementById('signInForm');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    
});

registerButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
   
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    window.location.href = 'signinfoodmenu.html'; // Redirect to food.html
    alert('Sign in   successfully');
});
