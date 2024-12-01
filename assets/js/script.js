// script.js
const pages = {
    home: `
    <h1>Home Page</h1>
    <div class="card">Welcome to the Home Page</div>
    <div class="card">Enjoy browsing through our SPA!</div>
  `,
    about: `
    <h1>About Page</h1>
    <div class="card">This is a simple SPA built with HTML, CSS, and JS.</div>
    <div class="card">It demonstrates dynamic content loading.</div>
  `,
    contact: `
    <h1>Contact Page</h1>
    <div class="card">Feel free to reach out to us!</div>
    <div class="card">We are here to help.</div>
  `,
};

// Select the content container
const content = document.getElementById('content');

// Function to load a page
function loadPage(page) {
    content.innerHTML = pages[page];
}

// Add event listeners to sidebar links
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        loadPage(page);
    });
});

// Load the default page
loadPage('home');
