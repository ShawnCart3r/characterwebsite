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