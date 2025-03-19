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

    if (enrollForm) {
        if (enrollForm.classList.contains("hidden")) {
            enrollForm.classList.remove("hidden");
            enrollForm.style.display = "block"; // Make form visible
            enrollForm.style.animation = "fadeIn 0.5s ease-in-out";
        } else {
            enrollForm.classList.add("hidden");
            enrollForm.style.display = "none"; // Hide form
        }
    } else {
        console.error("Enrollment form not found!");
    }
}

// Attach event listener to ensure it works even if placed dynamically
document.addEventListener("DOMContentLoaded", function () {
    var enrollBtn = document.querySelector(".enroll-btn");
    if (enrollBtn) {
        enrollBtn.addEventListener("click", toggleEnrollForm);
    } else {
        console.error("Enroll button not found!");
    }
});

// Function to handle enrollment submission
document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submit-enrollment");

    if (submitButton) {
        submitButton.addEventListener("click", function () {
            var name = document.getElementById("enroll-name").value.trim();
            var email = document.getElementById("enroll-email").value.trim();
            var phone = document.getElementById("enroll-phone").value.trim();
            var successMessage = document.getElementById("success-message");

            // Validate input fields
            if (name === "" || email === "" || phone === "") {
                alert("⚠️ Please fill in all the required fields.");
                return;
            }

            // Validate email format
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("⚠️ Please enter a valid email address.");
                return;
            }

            // Validate phone number (should be 10 digits)
            var phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("⚠️ Please enter a valid 10-digit phone number.");
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
    } else {
        console.error("Submit button not found!");
    }
});

// Lazy load images and videos for better performance
document.addEventListener("DOMContentLoaded", function () {
    let mediaElements = document.querySelectorAll("img[data-src], video[data-src]");

    mediaElements.forEach((element) => {
        if (element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute("data-src");
        }
    });
});
