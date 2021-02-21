//getting dom elements
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//*****Event listeners*******
//1-Video Element - click to play or pause video
video.addEventListener('click',toggleVideo);
//2-Video Element - pause to toggle play icon to pause icon 
video.addEventListener('pause',updateIcon);
//3-Video Element - play to toggle pause icon to back to play icon
video.addEventListener('play',updateIcon);
//4-Video Element - update progreds bar and timestamp
video.addEventListener('timeupdate',updateProgress);
//5-Play Button - Click to play or pause video 
play.addEventListener('click',toggleVideo);
//6-Stop button - Click to reset video and pause video
stop.addEventListener('click',stopVideo);
//7-Progress Bar - Change position to change time of playback 
progress.addEventListener('change',setProgress);