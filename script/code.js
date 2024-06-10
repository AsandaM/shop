let navLink = document.querySelector('.nav-link');
let input = document.getElementById('search-input');

navLink.addEventListener('click', function(event) {
    if (input.style.display === "none") {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
});