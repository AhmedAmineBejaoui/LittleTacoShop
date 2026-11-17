// Enhance the "Back to Top" links only on pages where they exist.
document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// The contact page is a static demo: never transmit visitor information.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const status = document.getElementById('form-status');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;
        if (status) {
            status.textContent = 'Demo only: your message was not sent or saved.';
        }
    });
    contactForm.addEventListener('reset', () => {
        if (status) status.textContent = '';
    });
}

// Mark the page as loaded when all resources are ready.
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Reveal articles as they enter the viewport.
const articles = document.querySelectorAll('article');
if (articles.length > 0) {
    const revealArticles = () => {
        articles.forEach((article) => {
            if (article.getBoundingClientRect().top < window.innerHeight - 100) {
                article.style.opacity = '1';
                article.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', revealArticles, { passive: true });
    revealArticles();
}
