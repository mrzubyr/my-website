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

navLinks.forEach(link => {
    if(link.href === currentLocation){
        link.classList.add('active');
    }
});

const form = document.querySelector("form");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission

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

    // Clear the form
    form.reset();

    // Optional: auto-hide feedback after 3 seconds
    setTimeout(() => {
        feedback.textContent = "";
    }, 3000);
});