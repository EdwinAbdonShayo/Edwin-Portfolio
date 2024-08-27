document.addEventListener("DOMContentLoaded", function() {
    var mediaContainers = document.querySelectorAll('.media-container');

    mediaContainers.forEach(function(container) {
        var loader = container.querySelector('.loader');
        var media = container.querySelector('img, video');

        if (media.tagName === 'VIDEO') {
            media.addEventListener('canplay', function() {
                loader.style.display = 'none';
            });
            media.addEventListener('waiting', function() {
                loader.style.display = 'block';
            });
        } else if (media.tagName === 'IMG') {
            media.addEventListener('load', function() {
                loader.style.display = 'none';
            });
            media.addEventListener('error', function() {
                loader.style.display = 'none';
            });
        }
    });

    document.body.classList.add('loaded');

    // Function to add or remove the active class based on scroll position
    function activateLinkOnScroll() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Listen for scroll events
    window.addEventListener('scroll', activateLinkOnScroll);

    // Call the function initially to set the correct active link
    activateLinkOnScroll();
});