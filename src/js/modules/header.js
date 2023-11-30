document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuButton = document.getElementById("mobile-menu-btn");
    var mobileCloseMenuButton = document.getElementById("menu-close");
    var mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });

    mobileCloseMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("show");
    });
});
