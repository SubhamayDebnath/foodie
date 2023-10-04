const video = document.querySelector("video");
video.addEventListener('mouseover', () => {
    video.play();
})
video.addEventListener('mouseleave', () => {
    video.pause();
})