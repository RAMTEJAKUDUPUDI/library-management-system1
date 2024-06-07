document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                alert('Login successful!');
                // Proceed to the library management dashboard
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = registerForm.username.value;
            const password = registerForm.password.value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(u => u.username === username);

            if (userExists) {
                alert('Username already exists');
            } else {
                users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful!');
                window.location.href = 'index.html';
            }
        });
    }
});
