document.addEventListener("loadall", function () {
    checkLoginStatus();
});

function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        showSecuredPage();
    }
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "user" && password === "pass") {
        localStorage.setItem("isLoggedIn", "true");
        showSecuredPage();
    } else {
        alert("Invalid username or password");
    }
}

function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var newEmail = document.getElementById("newEmail").value;

    
    localStorage.setItem("isLoggedIn", "true");
    showSecuredPage();
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    document.getElementById("securedPage").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function showSecuredPage() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("securedPage").style.display = "block";
}
