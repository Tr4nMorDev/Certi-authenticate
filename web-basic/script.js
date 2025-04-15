function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập (đơn giản)
    if (username === "nhom15" && password === "123") {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('welcome-message').classList.remove('hidden');
        document.getElementById('user-name').innerText = username;
        document.getElementById('info').classList.remove('hidden');
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}

function logout() {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('welcome-message').classList.add('hidden');
    document.getElementById('info').classList.add('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}