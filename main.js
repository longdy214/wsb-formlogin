const form = document.querySelector('form');
form.addEventListener('submit', function(event)
{
    event.preventDefault();
    var username =document.getElementById('username').value;
    var password =document.getElementById('password').value;
    if(username === 'admin' && password ==='123'){
        alert('Loin page successfull !');
        window.location.href=" ";
        
    }
    else{
        alert('Invalid username or password.');
        document.getElementById('username').value='';
        document.getElementById('password').value='';
    }
   
});
function showHidePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');

    if (passwordField.type === 'password') {
        passwordField.setAttribute('type', 'text');
        toggleButton.innerText = 'Hide'; // Change the button text to 'Hide'
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye");
       
    } else {
        passwordField.setAttribute('type', 'password');
        toggleButton.innerText = 'Show'; // Change the button text to 'Show'
        toggleButton.classList.remove("fa-eye-slash");
        toggleButton.classList.add("fa-eye");
    }
    username=document.getElementById('username').value='';
    password=document.getElementById('password').value='';
    
}
