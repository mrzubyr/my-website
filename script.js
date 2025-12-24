alert("Welcome to my website!");
// When button is clicked, show message
document.getElementById("showSkills").onclick = function() {
    document.getElementById("message").innerText = "You are doing amazing, keep learning!";
};

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Stop page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("messageBox").value.trim();
    let feedback = document.getElementById("formFeedback");

    if(name === "") {
        feedback.innerText = "Hey! Don’t forget your name 😎";
        feedback.style.color = "red";
    } else if(email === "") {
        feedback.innerText = "Please enter your email!";
        feedback.style.color = "red";
    } else if(message === "") {
        feedback.innerText = "Your message cannot be empty!";
        feedback.style.color = "red";
    } else {
        feedback.innerText = "Thank you, your message was sent!";
        feedback.style.color = "green";
        document.getElementById("contactForm").reset();
    }
    feedback.style.color = "red";   // For errors
feedback.style.color = "green"; // For success
};

function showAlert() {
    const feedback = document.getElementById("formFeedback");

    if (feedback) {
        feedback.textContent = "You're doing amazing, keep it up!";
        feedback.style.color = "red";
    }
}

function showAlert() {
    const feedback = document.getElementById("formFeedback");
    feedback.textContent = "You're doing amazing, keep it up!";
    feedback.style.color = "red";
}