

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

window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;

    // Change nav bar appearance on scroll
    const nav = document.querySelector("nav");
    if (scrollTop > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});