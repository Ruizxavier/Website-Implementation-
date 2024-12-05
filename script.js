function loadHeader() {
    // Fetch the header content from base.html
    fetch('base.html')
        .then(response => response.text())
        .then(data => {
            // Find the header element
            const headerElement = document.querySelector('header');
            // Inject the header content
            headerElement.innerHTML = data.split('<main>')[0]; // Grab the header content before the <main> tag
        });
}

function loadFooter() {
    // Fetch the footer content from base.html
    fetch('base.html')
        .then(response => response.text())
        .then(data => {
            // Find the footer element
            const footerElement = document.querySelector('footer');
            // Inject the footer content
            footerElement.innerHTML = data.split('</main>')[1]; // Grab the footer content after the </main> tag
        });
}

// Call these functions on page load
window.onload = () => {
    loadHeader();
    loadFooter();
}