   function validateEmail(email) {
            return email.endsWith('@gmail.com') || email.endsWith('@yahoo.com');
        }

        function signup() {
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const passwordConfirm = document.getElementById('signup-password-confirm').value;
            const errorElement = document.getElementById('signup-error');

            if (!username || !email || !password || !passwordConfirm) {
                errorElement.textContent = 'Please fill in all fields.';
                errorElement.style.color = 'red';
                return;
            }

            if (!validateEmail(email)) {
                errorElement.textContent = 'Please enter a valid email address.';
                errorElement.style.color = 'red';
                return;
            }


            if (password !== passwordConfirm) {
                errorElement.textContent = 'Passwords do not match.';
                errorElement.style.color = 'red';
                return;
            }

            // Save user information to localStorage
            const user = {
                username: username,
                email: email,
                password: password
            };
            localStorage.setItem('user', JSON.stringify(user));

            errorElement.textContent = 'Signup successful. Redirecting to login page...';
            errorElement.style.color = 'green';

                window.location.href = 'log.html';
        }