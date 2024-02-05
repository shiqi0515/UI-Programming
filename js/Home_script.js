var users = []

document.getElementById('./js/dutchman_table_users.json').addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            users = JSON.parse(e.target.result);
        };
        reader.readAsText(file);
    }
});

function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var isAuthenticated = users.some(function (user) {
        return user.username === username && user.password === password;
    });

    if (isAuthenticated) {
        alert('Login successful');
        window.location.href = 'Menu.html';
    } else {
        alert('Login failed');
    }
}