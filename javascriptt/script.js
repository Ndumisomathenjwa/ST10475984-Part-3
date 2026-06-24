// Hamburger Menu
function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Slideshow
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

if (slides.length > 0) {

    showSlide(slideIndex);

    function plusSlides(n) {
        slideIndex += n;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        showSlide(slideIndex);
    }

    function showSlide(n) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[n].style.display = "block";
    }

    setInterval(function () {
        slideIndex++;

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        showSlide(slideIndex);
    }, 3000);

    window.plusSlides = plusSlides;
}

// Automatic Date
const dateElement = document.getElementById("date");

if (dateElement) {
    const today = new Date();
    dateElement.innerHTML =
        "Today's Date: " + today.toDateString();
}

// Contact Form Validation
function validateForm() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let errorMessage = document.getElementById("errorMessage");

    if (name && email && message) {

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            if (errorMessage) {
                errorMessage.innerHTML = "Please fill in all fields.";
            }

            return false;
        }

        alert("Message sent successfully!");
    }

    return true;
}