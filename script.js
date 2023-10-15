$(document).ready(function () {
    // Your existing mobile menu toggle code
    $('#mobile-menu-icon').click(function () {
        $('#nav-list').toggleClass('active');
        $(this).toggleClass('toggle'); // Add this line
    });

    // Initialize the particles effect
    particlesJS.load('particles-js', 'trippyconfig.json', function() {
        console.log('particles.js loaded');
     });
});
