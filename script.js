$(document).ready(function () {
    $('#mobile-menu-icon').click(function () {
        $('#nav-list').toggleClass('active');
        $(this).toggleClass('toggle'); // Toggling a new class for animating the icon
    });

    particlesJS.load('particles-js', 'trippyconfig.json', function() {
        console.log('particles.js loaded');
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threeCanvas').appendChild(renderer.domElement);
    
    // Galactic Starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({color: 0xFFFFFF, size: 0.1});
    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    // Shooting Stars
    const shootingStars = [];
    const numStars = 10;

    for (let i = 0; i < numStars; i++) {
        const material = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(2 * 3); // two 3D vertices
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const star = new THREE.Line(geometry, material);
        resetShootingStar(star);
        shootingStars.push(star);
        scene.add(star);
    }

    function resetShootingStar(star) {
        star.position.set((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
        const starVertices = star.geometry.attributes.position.array;
        const length = 20;
        const direction = new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize();
        starVertices[0] = star.position.x;
        starVertices[1] = star.position.y;
        starVertices[2] = star.position.z;
        starVertices[3] = star.position.x + direction.x * length;
        starVertices[4] = star.position.y + direction.y * length;
        starVertices[5] = star.position.z + direction.z * length;
        star.geometry.attributes.position.needsUpdate = true;
    }

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0005;

        for (const star of shootingStars) {
            star.position.x += star.geometry.attributes.position.array[3] - star.geometry.attributes.position.array[0];
            star.position.y += star.geometry.attributes.position.array[4] - star.geometry.attributes.position.array[1];
            star.position.z += star.geometry.attributes.position.array[5] - star.geometry.attributes.position.array[2];
            
            if (Math.abs(star.position.x) > 1000 || Math.abs(star.position.y) > 1000 || Math.abs(star.position.z) > 1000) {
                resetShootingStar(star);
            }
        }
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
});
