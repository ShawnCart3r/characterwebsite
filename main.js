document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'character-title'
    const characterTitles = document.querySelectorAll(".character-title");

    // Add a click event listener to each title
    characterTitles.forEach((title) => {
        title.addEventListener("click", function () {
            // Get the next sibling element, which should be the blurb
            const blurb = this.nextElementSibling;

            // Toggle the 'show' class
            if (blurb) {
                blurb.classList.toggle("show");
            }
        });
    });
});
