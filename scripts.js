document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.fullscreenTarget').forEach(img => {
        img.addEventListener('click', () => {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            // } else if (img.webkitRequestFullscreen) {
            //     img.webkitRequestFullscreen();
            }
        });
    });

    // fullscreenTarget.addEventListener('click', () => {
    //     if (img.requestFullscreen) {
    //         img.requestFullscreen();
    //     }
    // });



    // // Enable fullscreen on image click
    // document.querySelectorAll('.fullscreenTarget').forEach(img => {
    //     img.addEventListener('click', () => {
    //         if (img.requestFullscreen) {
    //             img.requestFullscreen();
    //         } else if (img.webkitRequestFullscreen) {
    //             img.webkitRequestFullscreen();
    //         }
    //     });
    // });
    // // Fullscreen support for videos
    // document.querySelectorAll('.spatialVideo').forEach(video => {
    //     video.addEventListener('click', () => {
    //         if (video.requestFullscreen) {
    //             video.requestFullscreen();
    //         } else if (video.webkitRequestFullscreen) {
    //             video.webkitRequestFullscreen();
    //         }
    //     });
    // });

    // Open HEIC files in a new tab for Vision Pro users
    // document.querySelectorAll('.openHeicLink').forEach(link => {
    //     link.addEventListener('click', event => {
    //         event.preventDefault(); // Prevent default link behavior
    //         window.open(link.href, '_blank'); // Open HEIC file in a new tab
    //     });
    // });
// });

// document.addEventListener("DOMContentLoaded", () => {

    // Open Spatial Video in a new tab
    // document.querySelectorAll('.openSpatialVideo').forEach(link => {
    //     link.addEventListener('click', event => {
    //         event.preventDefault();
    //         window.open(link.href, '_blank');
    //     });
    // });
});