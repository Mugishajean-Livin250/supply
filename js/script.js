// JavaScript functionality, e.g., "Back to Top" button or any other features you want to add.
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
