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
