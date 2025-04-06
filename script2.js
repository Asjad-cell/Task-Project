document.addEventListener("DOMContentLoaded", function () {
    const ratingGroups = document.querySelectorAll(".star-rating");

    ratingGroups.forEach(group => {
        const stars = group.querySelectorAll(".fa-star");
        let selectedRating = 0; // Stores the rating for this specific group

        function updateStars(rating) {
            stars.forEach(s => {
                let starValue = parseInt(s.getAttribute("data-value"));
                if (starValue <= rating) {
                    s.classList.remove("fa-regular", "text-gray-400");
                    s.classList.add("fa-solid", "text-yellow-400");
                } else {
                    s.classList.remove("fa-solid", "text-yellow-400");
                    s.classList.add("fa-regular", "text-yellow-400");
                }
            });
        }

        stars.forEach(star => {
            star.addEventListener("click", function () {
                selectedRating = parseInt(this.getAttribute("data-value"));
                updateStars(selectedRating);
            });

            // Highlight stars on hover
            star.addEventListener("mouseover", function () {
                let hoverRating = parseInt(this.getAttribute("data-value"));
                updateStars(hoverRating);
            });

            // Reset stars to selected rating on mouse leave
            star.addEventListener("mouseleave", function () {
                updateStars(selectedRating);
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const minPrice = document.getElementById("min-price");
    const maxPrice = document.getElementById("max-price");
    const minValueDisplay = document.getElementById("min-value");
    const maxValueDisplay = document.getElementById("max-value");
    const progressBar = document.getElementById("progress-bar");

    function updateValues() {
        let minValue = parseInt(minPrice.value);
        let maxValue = parseInt(maxPrice.value);

        if (minValue >= maxValue) {
            minPrice.value = maxValue - 10;
            minValue = parseInt(minPrice.value);
        }

        minValueDisplay.textContent = `$${minValue}`;
        maxValueDisplay.textContent = `$${maxValue}`;

        let minPercent = (minValue / 1000) * 100;
        let maxPercent = (maxValue / 1000) * 100;
        progressBar.style.left = minPercent + "%";
        progressBar.style.width = (maxPercent - minPercent) + "%";
    }

    minPrice.addEventListener("input", updateValues);
    maxPrice.addEventListener("input", updateValues);
    updateValues();
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    // Toggle mobile menu when hamburger is clicked
    menuBtn.addEventListener("click", function (event) {
        mobileMenu.classList.toggle("hidden");
        event.stopPropagation(); // Prevents immediate closure
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target)) {
            mobileMenu.classList.add("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const selectedCountry = document.getElementById("selected-country");
    const arrowIcon = document.getElementById("arrow-icon");

    // Toggle dropdown on button click
    dropdownBtn.addEventListener("click", function (event) {
        dropdownMenu.classList.toggle("hidden");
        arrowIcon.classList.toggle("rotate-180");
        event.stopPropagation(); // Prevents closing immediately
    });

    // Update selected country
    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            selectedCountry.textContent = event.target.getAttribute("data-value");
            dropdownMenu.classList.add("hidden"); // Close menu
            arrowIcon.classList.remove("rotate-180"); // Reset arrow
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
            arrowIcon.classList.remove("rotate-180");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function setupDropdown(buttonId, menuId, selectedId, arrowId) {
        const dropdownBtn = document.getElementById(buttonId);
        const dropdownMenu = document.getElementById(menuId);
        const selectedText = document.getElementById(selectedId);
        const arrowIcon = document.getElementById(arrowId);

        // Toggle dropdown
        dropdownBtn.addEventListener("click", function (event) {
            dropdownMenu.classList.toggle("hidden");
            dropdownMenu.classList.toggle("opacity-100");
            dropdownMenu.classList.toggle("translate-y-0");
            arrowIcon.classList.toggle("rotate-180");
            event.stopPropagation(); // Prevents immediate closing
        });

        // Update selected option
        dropdownMenu.addEventListener("click", function (event) {
            if (event.target.tagName === "LI") {
                selectedText.innerHTML = event.target.getAttribute("data-value");
                dropdownMenu.classList.add("hidden"); // Close menu
                dropdownMenu.classList.remove("opacity-100", "translate-y-0");
                arrowIcon.classList.remove("rotate-180"); // Reset arrow
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", function (event) {
            if (!dropdownMenu.contains(event.target) && !dropdownBtn.contains(event.target)) {
                dropdownMenu.classList.add("hidden");
                dropdownMenu.classList.remove("opacity-100", "translate-y-0");
                arrowIcon.classList.remove("rotate-180");
            }
        });
    }

    // Initialize both dropdowns
    setupDropdown("ship-btn", "ship-menu", "selected-flag", "ship-arrow");
    setupDropdown("country-btn", "country-menu", "selected-country", "country-arrow");
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');

    // Toggle the menu visibility when hamburger is clicked
    hamburger.addEventListener('click', function () {
        if (menu.classList.contains('left-[-250px]')) {
            menu.classList.remove('left-[-250px]');
            menu.classList.add('left-0'); // Slide in the menu
        } else {
            menu.classList.remove('left-0');
            menu.classList.add('left-[-250px]'); // Slide out the menu
        }
    });

    // Close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('left-0');
            menu.classList.add('left-[-250px]'); // Slide out the menu when a link is clicked
        });
    });
});

