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

    const links = document.querySelectorAll('.link');
    const sections = document.querySelectorAll('main section');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Observer callback function
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`header nav a[href="#${id}"]`);

            if (entry.isIntersecting) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };

    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, {
        root: null, // Use the viewport as the container
        threshold: 0.5 // Trigger when 50% of the section is in view
    });

    // Observe each section
    sections.forEach(section => observer.observe(section));
});