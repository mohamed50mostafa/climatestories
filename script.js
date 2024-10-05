// Navigates between pages
function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    // Deactivate all pages
    pages.forEach(page => page.classList.remove('active'));

    // Activate the target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}


// Initialize the home page
window.onload = () => {
    goToPage('home');
};
