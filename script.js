document.addEventListener('DOMContentLoaded', () => {
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    const cursor = document.getElementById('cursor');
    
    // Custom cursor
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", random: true, out_mode: "out" }
        }
    });

    // GSAP animations
    gsap.from(".nav-link", {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from("#hero h1", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out"
    });

    gsap.from("#hero p", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        delay: 0.5,
        ease: "power4.out"
    });

    gsap.from("#hero a", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        delay: 1,
        ease: "power4.out"
    });

    // Thumbnail data (replace with your actual thumbnails)
    const thumbnails = [
        { src: 'thumbnail2.jpg', alt: 'Thumbnail 2', title: 'Expensive Watches' },
        { src: 'thumbnail1.jpg', alt: 'Thumbnail 1', title: 'Most Posinious' },
        { src: 'thumbnail3.jpg', alt: 'Thumbnail 3', title: 'Jackpot' },
        { src: 'thumbnail4.jpg', alt: 'Thumbnail 4', title: 'Secret Casinos' },
        { src: 'thumbnail5.jpg', alt: 'Thumbnail 5', title: 'Shark Attack' },
        { src: 'thumbnail6.jpg', alt: 'Thumbnail 6', title: 'Help the girl' },
        { src: 'thumbnail7.jpg', alt: 'Thumbnail 7', title: 'Top 5' },
        { src: 'thumbnail8.jpg', alt: 'Thumbnail 8', title: 'Fastest Car' },
        { src: 'thumbnail9.jpg', alt: 'Thumbnail 9', title: 'Monster Drink' },
    ];

    function createThumbnailElement(thumbnail) {
        const div = document.createElement('div');
        div.className = 'thumbnail-item bg-gray-800 rounded-lg overflow-hidden shadow-lg';
        
        const img = document.createElement('img');
        img.src = thumbnail.src;
        img.alt = thumbnail.alt;
        img.className = 'w-full h-64 object-cover';
        
        const overlay = document.createElement('div');
        overlay.className = 'thumbnail-overlay';
        overlay.innerHTML = `<h3 class="text-2xl font-bold">${thumbnail.title}</h3>`;
        
        div.appendChild(img);
        div.appendChild(overlay);
        return div;
    }

    function loadThumbnails() {
        thumbnails.forEach((thumbnail, index) => {
            const thumbnailElement = createThumbnailElement(thumbnail);
            thumbnailGrid.appendChild(thumbnailElement);
            
            gsap.from(thumbnailElement, {
                duration: 1,
                y: 100,
                opacity: 0,
                delay: index * 0.2,
                ease: "power3.out"
            });
        });
    }

    loadThumbnails();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
