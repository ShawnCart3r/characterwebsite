function toggleBlurb(element) {
    const blurb = element.nextElementSibling; // Find the next sibling (the blurb)
    if (blurb.classList.contains('show')) {
        blurb.classList.remove('show'); // Hide the blurb
    } else {
        blurb.classList.add('show'); // Show the blurb
    }
}