//getting dom elements
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



//Functions
//1-toggleVideo-play or pause video
//If video is playing, then pause
//If video is paused, then play
function toggleVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

//2.Update Icon - toggle between play and pause icons
//If video is playing, then show pause
//If video is paused, then show play
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
};


// 3. updateProgress - Update the progress bar and timestamp
function updateProgress() {
    //Update Slider
    progress.value = video.currentTime / video.duration * 100;

    // Update timestamp
    //rounding the min
    let minutes = Math.floor(video.currentTime / 60);

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    // rounding the seconds
    let seconds = Math.floor(video.currentTime % 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    //display timestamp
    timestamp.innerHTML = `${minutes}:${seconds}`;
};


//4.function stopVideo - Stop video playback and reset time to 0
function stopVideo() {
    video.pause();
    video.currentTime = 0;
};


//5.setProgress - update video playback time based on change in progress bar
function setProgress() {
    video.currentTime = progress.value * video.duration / 100;
};







//*****Event listeners*******
//1-Video Element - click to play or pause video
video.addEventListener('click', toggleVideo);
//2-Video Element - pause to toggle play icon to pause icon 
video.addEventListener('pause', updateIcon);
//3-Video Element - play to toggle pause icon to back to play icon
video.addEventListener('play', updateIcon);
//4-Video Element - update progreds bar and timestamp
video.addEventListener('timeupdate', updateProgress);
//5-Play Button - Click to play or pause video 
play.addEventListener('click', toggleVideo);
//6-Stop button - Click to reset video and pause video
stop.addEventListener('click', stopVideo);
//7-Progress Bar - Change position to change time of playback 
progress.addEventListener('change', setProgress);
