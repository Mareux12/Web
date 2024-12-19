// JavaScript to add a simple scroll animation to the hero section CTA button

document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector('.cta-btn');

    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = "scale(1.05)";
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = "scale(1)";
    });

    // Smooth scroll to the "donanim.html" page (scroll to top effect)
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
