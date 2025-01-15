document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('error');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errorDiv.textContent = 'Por favor, insira um e-mail válido.';
        errorDiv.style.color = 'red';
        return;
    }

    if (password.length < 6) {
        errorDiv.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorDiv.style.color = 'red';
        return;
    }

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('post-login-container').style.display = 'block';
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    document.getElementById('post-login-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});
