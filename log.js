function login() {
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            const errorElement = document.getElementById('login-error');

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && username === storedUser.username && password === storedUser.password) {
                errorElement.textContent = 'Login successful. Redirecting to protected page...';
                errorElement.style.color = 'green';

                    window.location.href = 'home.html';
            } else {
                errorElement.textContent = 'Invalid username or password.';
                errorElement.style.color = 'red';
            }
        }