// Get elements from DOM
var playButton = document.querySelector("#playButton");
var albumImage = document.querySelector("#albumImage");
var albumShadow = document.querySelector("#albumShadow");
var slider = document.getElementById("slider");
var progress = document.querySelector("progress");
var currentTime = document.querySelector("#currentTime");
var remainingTime = document.querySelector("#remainingTime");

var songDuration = 204;

var songDurationMinutes = Math.floor(songDuration / 60);;
var songDurationSeconds = songDuration - songDurationMinutes * 60;

async function play() {
  playButton.classList.add("clicked");
  albumImage.classList.remove("paused");
  albumShadow.classList.remove("paused");
  await delay(150);
  playButton.setAttribute("onclick", "pause()");
  playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 34"><g transform="translate(-616 -473)"><rect width="13" height="34" rx="1" transform="translate(616 473)"/><rect width="13" height="34" rx="1" transform="translate(632 473)"/></g></svg>`;
  await delay(150);
  playButton.classList.remove("clicked");
}

async function pause() {
  playButton.classList.add("clicked");
  albumImage.classList.add("paused");
  albumShadow.classList.add("paused");
  await delay(150);
  playButton.setAttribute("onclick", "play()");
  playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.769 34.152"><g transform="translate(-214 -529.596)"><path d="M25.015.273A1.8,1.8,0,0,1,27.769,1.8V32.351A1.8,1.8,0,0,1,25,33.867L.83,18.385A1.8,1.8,0,0,1,.848,15.34Z" transform="translate(241.769 563.748) rotate(180)"/></g></svg>`;
  await delay(150);
  playButton.classList.remove("clicked");
}

slider.oninput = async function() {
  currentTime.classList.add("active");
  slideChange();
  await delay(1000);
  currentTime.classList.remove("active");
}

function slideChange() {
  var value = slider.value;
  progress.value = value;
  
  if (value < 10) {
    currentTime.innerHTML = "0:0" + value.toString();
    var duration = songDuration - value;
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;
    if (seconds < 10) {
      remainingTime.innerHTML = "-" + minutes.toString() + ":0" + seconds.toString();
    } else {
      remainingTime.innerHTML = "-" + minutes.toString() + ":" + seconds.toString();
    }
  } else if (value < 60 && value >= 10) {
    currentTime.innerHTML = "0:" + value.toString();
    var duration = songDuration - value;
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;
    if (seconds < 10) {
      remainingTime.innerHTML = "-" + minutes.toString() + ":0" + seconds.toString();
    } else {
      remainingTime.innerHTML = "-" + minutes.toString() + ":" + seconds.toString();
    } 
  } else if (value >= 60) {
    var minutes = Math.floor(value / 60);
    var seconds = value - minutes * 60;
    if (seconds < 10) {
      currentTime.innerHTML = minutes.toString() + ":0" + seconds.toString();
    } else {
      currentTime.innerHTML = minutes.toString() + ":" + seconds.toString();
    }
    var duration = songDuration - value;
    var minutes = Math.floor(duration / 60);
    var seconds = duration - minutes * 60;
    if (seconds < 10) {
      remainingTime.innerHTML = "-" + minutes.toString() + ":0" + seconds.toString();
    } else {
      remainingTime.innerHTML = "-" + minutes.toString() + ":" + seconds.toString();
    } 
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}