// Smooth scrolling for the "Back to Top" link
document.querySelector('a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation with alerts
document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('Email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
        e.preventDefault();
        alert('All fields must be filled out!');
    } else {
        alert('Message sent successfully!');
    }
});

// Loader until page fully loads
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Animation on scroll (Fade-in effect for articles)
const articles = document.querySelectorAll('article');
window.addEventListener('scroll', function() {
    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (articleTop < windowHeight - 100) {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }
    });
});
