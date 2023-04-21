// Get all the Loremipsum links
const loremLinks = document.querySelectorAll('#picker a');

// Add click event listeners to each link
loremLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the corresponding main-content section
    const section = document.querySelectorAll('#main-content section')[index];

    // Scroll the section into view
    section.scrollIntoView({ behavior: 'smooth' });
  });
});