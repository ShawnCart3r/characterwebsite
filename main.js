document.querySelectorAll('.character-title').forEach((title) => {
    title.addEventListener('click', (event) => {
        const blurb = event.target.nextElementSibling; // Select the sibling .character-blurb
        if (blurb.classList.contains('show')) {
            blurb.classList.remove('show'); // Hide blurb if it's already visible
        } else {
            // Hide all blurbs first (if you want only one open at a time)
            document.querySelectorAll('.character-blurb').forEach((b) => {
                b.classList.remove('show');
            });
            blurb.classList.add('show'); // Show the clicked one
        }
    });
});
