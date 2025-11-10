document.addEventListener("DOMContentLoaded", function() {
    
    const music = document.getElementById("background-music");
    const toggleBtn = document.getElementById("music-toggle-btn");
    const musicIcon = toggleBtn.querySelector("i");

    music.volume = 0.5;

    toggleBtn.addEventListener("click", function() {
        
        if (music.paused) {
            music.play();
            musicIcon.classList.remove("fa-play");
            musicIcon.classList.add("fa-pause");
        } 
        else {
            music.pause();
            musicIcon.classList.remove("fa-pause");
            musicIcon.classList.add("fa-play");
        }
    });
});