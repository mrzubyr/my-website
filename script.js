document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully 🚀");
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        if(this.hash !== ""){
            e.preventDefault();
            const hash = this.getAttribute('href');
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// script.js
const currentLocation = location.href;
const navLinks = document.querySelectorAll('nav a');

const links = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if(link.href === currentLocation){
        link.classList.add('active');
    }
});

const form = document.querySelector("form");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill out all fields!";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "You're doing amazing! Message sent ✔️";
    feedback.style.color = "green";

   
    form.reset();

    
    setTimeout(() => {
        feedback.textContent = "";
    }, 3000);
});

function toggleCountries() {
    const menu = document.getElementById("countries-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function login() {
    localStorage.setItem("loggedIn", "true");
    checkLogin();
}

function logout() {
    localStorage.removeItem("loggedIn");
    checkLogin();
}

function checkLogin() {
    const auth = document.getElementById("auth-section");
    if (localStorage.getItem("loggedIn")) {
        auth.innerHTML = `
            <p>✅ Logged in</p>
            <button onclick="logout()">Logout</button>
        `;
    } else {
        auth.innerHTML = `
            <button onclick="login()">Login</button>
        `;
    }
}

checkLogin();

function toggleCountries() {
    document.getElementById("countries-menu").classList.toggle("active");
}

function toggleSettings() {
    document.getElementById("settings-menu").classList.toggle("active");
}
function toggleSettings() {
    const menu = document.getElementById("settings-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("loggedIn") === "true") {
        showLoggedIn();
    }
});

function loginUser() {
    localStorage.setItem("loggedIn", "true");
    showLoggedIn();
}

function logoutUser() {
    localStorage.removeItem("loggedIn");
    showLoggedOut();
}

function showLoggedIn() {
    document.getElementById("login-status").innerText = "Status: Logged in";
}

function showLoggedOut() {
    document.getElementById("login-status").innerText = "Status: Logged out";
}

function toggleMenu() {
    document.getElementById("side-menu").classList.toggle("show");
}


function toggleMenu() {
    const menu = document.getElementById("side-menu");
    menu.classList.toggle("open");
}


function toggleSettings() {
    const settings = document.getElementById("settings-menu");
    settings.classList.toggle("open");
}


function loginUser() {
    localStorage.setItem("loggedIn", "true");
    updateLoginStatus();
    alert("You are now logged in ✅");
}


function logoutUser() {
    localStorage.setItem("loggedIn", "false");
    updateLoginStatus();
    alert("You are now logged out ❌");
}

function updateLoginStatus() {
    const statusText = document.getElementById("login-status");
    const loggedIn = localStorage.getItem("loggedIn");
    const protectedContent = document.querySelector(".protected-content");
    const warning = document.getElementById("login-warning");

    if (loggedIn === "true") {
        statusText.textContent = "Status: Logged in";
        statusText.style.color = "lightgreen";
        protectedContent.style.display = "flex";
        warning.style.display = "none";
    } else {
        statusText.textContent = "Status: Logged out";
        statusText.style.color = "red";
        protectedContent.style.display = "none";
        warning.style.display = "block";
    }
}


window.onload = updateLoginStatus;

const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh
    feedback.textContent = "✅ Your message has been sent!";
    feedback.style.color = "#00ff00";

    // Optional: Clear the form after submit
    form.reset();
});