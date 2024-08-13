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
});
