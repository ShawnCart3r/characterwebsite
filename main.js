

document.querySelectorAll('.character-title').forEach((title) => {
    title.addEventListener('click', (event) => {
        // Get the sibling '.character-blurb' element
        const blurb = title.nextElementSibling;

        if (blurb && blurb.classList.contains('character-blurb')) {
            // If the blurb is already visible, hide it
            if (blurb.classList.contains('show')) {
                blurb.classList.remove('show'); // Hide the blurb
            } else {
                // Optionally hide all other blurbs to allow only one open at a time
                document.querySelectorAll('.character-blurb').forEach((b) => {
                    b.classList.remove('show');
                });

                // Show the clicked blurb
                blurb.classList.add('show');
            }
        } else {
            console.error('Blurb element not found or improperly structured!');
        }
    });
});

const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Parallax Effect
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});

// Generate Particles
const particlesContainer = document.querySelector('.particles');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('span');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
    particlesContainer.appendChild(particle);
}

// Play Sound Effects
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        const hoverSound = document.getElementById('hover-sound');
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    card.addEventListener('click', () => {
        const flipSound = document.getElementById('flip-sound');
        flipSound.currentTime = 0;
        flipSound.play();
    });
});

// Idle Flip Animation
let idleTimer;
const idleTime = 5000; // 5 seconds
document.addEventListener('mousemove', () => {
    clearTimeout(idleTimer);
    document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('idle');
    });

    idleTimer = setTimeout(() => {
        document.querySelectorAll('.card').forEach((card) => {
            card.classList.add('idle');
        });
    }, idleTime);
});
