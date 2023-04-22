// Simple JavaScript code for smooth scrolling

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, ease(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
            }
        });
    });

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
});

// Add a function to scroll to the Pricing section
// Update the scrollToPricing function
function scrollToPricing() {
    const pricingSection = document.getElementById('pricing');
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Add a function to toggle the FAQ answers
document.addEventListener('DOMContentLoaded', function () {
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const faq = this.parentElement.parentElement;
            const answer = faq.querySelector('.faq-answer');
            answer.style.maxHeight = answer.style.maxHeight ? '' : answer.scrollHeight + 'px';
            this.textContent = this.textContent === '+' ? '-' : '+';
        });
    });
});
