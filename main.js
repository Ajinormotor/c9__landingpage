const showIcon = document.getElementById("show");
const hideIcon = document.getElementById("hide");
const navlinks = document.querySelector(".navlinks");

showIcon.onclick = function() {
    showIcon.style.display = "none"; // Hide the "show" icon
    hideIcon.style.display = "inline"; // Show the "hide" icon
    navlinks.style.display = "block"; // Show the navigation
};

hideIcon.onclick = function() {
    hideIcon.style.display = "none"; // Hide the "hide" icon
    showIcon.style.display = "inline"; // Show the "show" icon
    navlinks.style.display = "none"; // Hide the navigation
};
