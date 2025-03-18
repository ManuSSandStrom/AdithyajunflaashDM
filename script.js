// Function to toggle mobile menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu").querySelector("ul");
    menu.classList.toggle("show");
}

// Close menu when clicking outside (for better UX)
document.addEventListener("click", function (event) {
    var menu = document.getElementById("nav-menu").querySelector("ul");
    var menuToggle = document.querySelector(".menu-toggle");

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("show");
    }
});

// Function to toggle the enrollment form
function toggleEnrollForm() {
    var enrollForm = document.getElementById("enrollment-form");

    if (enrollForm.classList.contains("hidden")) {
        enrollForm.classList.remove("hidden");
        enrollForm.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
        enrollForm.classList.add("hidden");
    }
}

// Function to handle enrollment submission
document.getElementById("submit-enrollment").addEventListener("click", function () {
    var name = document.getElementById("enroll-name").value.trim();
    var email = document.getElementById("enroll-email").value.trim();
    var phone = document.getElementById("enroll-phone").value.trim();
    var successMessage = document.getElementById("success-message");

    // Validate input fields
    if (name === "" || email === "" || phone === "") {
        alert("⚠️ Please fill in all the required fields.");
        return;
    }

    // Show success message
    successMessage.textContent = `🎉 FLAASH welcomes you, ${name}! Our team will contact you soon.`;
    successMessage.classList.remove("hidden");
    successMessage.style.color = "#ffcc00";
    successMessage.style.fontWeight = "bold";
    successMessage.style.textAlign = "center";

    // Clear the form fields after submission
    setTimeout(function () {
        document.getElementById("enroll-name").value = "";
        document.getElementById("enroll-email").value = "";
        document.getElementById("enroll-phone").value = "";
        successMessage.classList.add("hidden");
        toggleEnrollForm(); // Close the form after submission
    }, 3000);
});

// Lazy load images and videos for better performance
document.addEventListener("DOMContentLoaded", function () {
    let mediaElements = document.querySelectorAll("img, video");

    mediaElements.forEach((element) => {
        if (element.dataset.src) {
            element.src = element.dataset.src;
        }
    });
});
