document.addEventListener("DOMContentLoaded", function () {
    // Email validation
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("blur", function () {
        const email = this.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            this.classList.add("is-invalid");
            this.classList.remove("is-valid");
        } else {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    });

    // Auto-fill phone code based on selected country
    const countrySelect = document.getElementById("country");
    const phoneCodeInput = document.getElementById("phoneCode");
    countrySelect.addEventListener("change", function () {
        const country = this.value;
        let phoneCode = "";

        switch (country) {
            case "Malta":
                phoneCode = "+356";
                break;
            case "Greece":
                phoneCode = "+30";
                break;
            case "England":
                phoneCode = "+44";
                break;
            case "France":
                phoneCode = "+33";
                break;
            default:
                phoneCode = "";
        }

        phoneCodeInput.value = phoneCode;
    });

    // Phone validation
    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("blur", function () {
        const phone = this.value;
        const phoneRegex = /^(?:\+)?[\d\s-]{8,15}$/;

        if (!phoneRegex.test(phone)) {
            this.classList.add("is-invalid");
            this.classList.remove("is-valid");
        } else {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        }
    });

    // Form submission handler
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Check if all fields are valid
        const isValid = Array.from(this.querySelectorAll("input[required]")).every(input => {
            return input.checkValidity() &&
                (input.id !== "phone" || input.classList.contains("is-valid")) &&
                (input.id !== "email" || input.classList.contains("is-valid"));
        });

        if (isValid) {
            // Display success toast on form submission
            const toastLive = document.getElementById("toastMessage");
            if (toastLive) {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
                toastBootstrap.show();
                console.log("Form submitted successfully.");
            } else {
                console.error("Toast element not found.");
            }

            // Reset form fields and validation states
            this.reset();
            Array.from(this.querySelectorAll(".is-valid, .is-invalid")).forEach(input => {
                input.classList.remove("is-valid", "is-invalid");
            });
        }
    });

});

// Event listener to Contact Us button
        document.querySelector('.contact').addEventListener('click', function (event) {
            event.preventDefault();
            const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
            contactModal.show();
        });
        
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
    document.querySelector('.top-nav-items').classList.toggle('show');
}