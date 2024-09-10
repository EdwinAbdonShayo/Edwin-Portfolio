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

});