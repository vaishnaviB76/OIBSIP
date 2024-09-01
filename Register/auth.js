function showModal(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('error-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('error-modal').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('form-title').textContent = 'Register';
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('form-title').textContent = 'Login';
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+]).{8,}$/;

    if (username === '' || password === '') {
        showModal('Please fill out all fields.');
    } else if (!passwordRegex.test(password)) {
        showModal('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*()-+).');
    } else {
    
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        showModal('Registration successful! Redirecting to login...');
 
        setTimeout(() => {
            showLoginForm();
            closeModal();
        }, 2000); 
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];


    const user = users.find(user => user.username === username && user.password === password);

    if (!username || !password) {
        showModal('Please fill out all fields.');
    } else if (user) {
        showModal('Login successful!');
     
        setTimeout(() => {
            window.location.href = 'welcome.html'; 
        }, 2000); 
    } else {
        showModal('Invalid username or password.');
    }
}
