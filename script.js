$(document).ready(function () {
    $('#mobile-menu-icon').click(function () {
        $('#nav-list').toggleClass('active');
        $(this).toggleClass('toggle'); // Toggling a new class for animating the icon
    });

    particlesJS.load('particles-js', 'trippyconfig.json', function() {
        console.log('particles.js loaded');
    });
});
