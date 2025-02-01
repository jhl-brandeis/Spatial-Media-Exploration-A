document.addEventListener("DOMContentLoaded", () => {
    // Enable fullscreen on image click
    document.querySelectorAll('.fullscreenTarget').forEach(img => {
        img.addEventListener('click', () => {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.webkitRequestFullscreen) {
                img.webkitRequestFullscreen();
            }
        });
    });

    // Open HEIC files in a new tab for Vision Pro users
    // document.querySelectorAll('.openHeicLink').forEach(link => {
    //     link.addEventListener('click', event => {
    //         event.preventDefault(); // Prevent default link behavior
    //         window.open(link.href, '_blank'); // Open HEIC file in a new tab
    //     });
    // });
});