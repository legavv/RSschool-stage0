const videoPlayer = document.querySelector('.video-player')
const playerViewer = document.querySelector('.player__viewer');
const videoBtn = document.querySelector('.video-btn');
const splashScreen = document.querySelector('.splash-screen');
const playerPlayPause = document.querySelector('.player__play-pause');
const play = document.querySelector('.player__play-pause')
const pause = document.querySelector('.player__play-pause.pause')
const mute = document.querySelector('.player__mute')
const playerVolume = document.querySelector('.player__volume')
const playerProgress = document.querySelector('.player__progress')
let playPercent;


function togglePlay () {
    if (playerViewer.paused) {
    playerViewer.play()
    playerViewer.volume = playerVolume.value;
    playerPlayPause.classList.remove('pause');
    videoBtn.style.display = 'none';
    } else {
    playerViewer.pause();
    playerPlayPause.classList.add('pause');
    videoBtn.style.display = 'block';
    }
}

playerViewer.addEventListener('click',togglePlay);
videoBtn.addEventListener('click', () => {
    togglePlay();
    splashScreen.style.display = 'none';
    videoPlayer.style.border = '1px solid #bdae82';
});
play.addEventListener('click', togglePlay);
mute.addEventListener('click', () => {
    if (!playerViewer.paused) {
        if (playerViewer.muted) {
            playerViewer.volume = playerVolume.value;
            playerViewer.muted = false;
            mute.classList.remove('active');
        } else {
            playerViewer.volume = 0.0;
            playerViewer.muted = true;
            mute.classList.add('active');
        }
    }    
}); 
playerVolume.addEventListener('input', () => {
    playerViewer.volume = playerVolume.value;
    playerVolume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${playerVolume.value * 100}%, #c8c8c8 ${playerVolume.value * 100}%, #c8c8c8 100%`
});
playerViewer.addEventListener('ended', () => {
    playerViewer.currentTime = 0;
});
playerViewer.addEventListener('timeupdate', () => {
    playPercent = Math.round((playerViewer.currentTime / playerViewer.duration) * 100);
    playerProgress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${playPercent}%, #c8c8c8 ${playPercent}%, #c8c8c8 100%`
    playerProgress.value = playPercent
})
playerProgress.addEventListener('click', (event) => {
    playerViewer.currentTime = playerProgress.value * playerViewer.duration / 100 ;
});


console.log(playerProgress)
