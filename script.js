$(document).ready(function () {
    // Your existing mobile menu toggle code
    $('#mobile-menu-icon').click(function () {
        $('#nav-list').toggleClass('active');
    });

    // Initialize the particles effect
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ["#ff5e82", "#ff7367", "#ffa67f", "#ffc3a4"]
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000"
                },
                polygon: {
                    nb_sides: 6
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                attract: {
                    enable: true,
                    rotateX: 1000,
                    rotateY: 1000
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                bubble: {
                    distance: 100,
                    size: 10,
                    duration: 2,
                    opacity: 1,
                    speed: 3
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 5
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});
