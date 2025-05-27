// Находим элементы формы
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const errorMessage = document.getElementById('errorMessage');



togglePassword.addEventListener('click', ()=>{
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text'
        togglePassword.textContent = '🤔'
    } else{
        passwordInput.type = 'password'
        togglePassword.textContent = '👁'
    }
})