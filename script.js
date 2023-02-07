
console.log("hello Welcome t spotify");

//Initialize The Variables--------------------------------------------------
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let masterSong = document.getElementById('masterSong');
let gif = document.getElementById('gif');
let progressTime = document.getElementById('currentTime')
// let timeStamp = document.querySelectorAll('timeStamp');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "8 Letters- Why don't we", songPath: "songs/1.mp3", songCover: "covers/1.jpg", songDuration: "03:10" },
    { songName: "Anti Hero", songPath: "songs/2.mp3", songCover: "covers/2.jpg", songDuration: "05:09" },
    { songName: "closer", songPath: "songs/3.mp3", songCover: "covers/3.jpg", songDuration: "04:20" },
    { songName: "Ghost-Ava Max", songPath: "songs/4.mp3", songCover: "covers/4.jpg", songDuration: "03:00" },
    { songName: "Heaven", songPath: "songs/5.mp3", songCover: "covers/5.jpg", songDuration: "03:11" },
    { songName: "One Direction- Steal My Girl", songPath: "songs/6.mp3", songCover: "covers/6.jpg", songDuration: "05:17" },
    { songName: "Our Song-tylor Shift", songPath: "songs/7.mp3", songCover: "covers/7.jpg", songDuration: "03:04" },
    { songName: "rocket Science", songPath: "songs/8.mp3", songCover: "covers/8.jpg", songDuration: "03:22" },
    { songName: "Snap", songPath: "songs/9.mp3", songCover: "covers/9.jpg", songDuration: "03:14" },
    { songName: "You broke me first", songPath: "songs/10.mp3", songCover: "covers/10.jpg", songDuration: "02:47" }
]
let index = 1;
let music = new Audio(songs[index - 1].songPath);
masterSong.innerText = songs[index - 1].songName;

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].songCover;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timeStamp')[0].innerText = songs[i].songDuration;
})
const playMusic = (index) => {
    music.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSong.innerText = songs[index - 1].songName;
    gif.style.opacity = 1;
}
const pauseMusic = () => {
    music.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
// Adding Event Listeners------------------------------------------------------------
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {

        playMusic(index);
    }
    else {

        pauseMusic();
    }
})


music.addEventListener('timeupdate', () => {

    //updating progress Bar of music

    let progress = parseInt((music.currentTime / music.duration) * 100);
    progressBar.value = progress;
    // let cTime = Math.floor(music.currentTime);
    // progressTime.innerText = cTime;

})
progressBar.addEventListener('change', () => {
    music.currentTime = (progressBar.value * music.duration) / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        index = parseInt(e.target.id);
        music.src = songs[index - 1].songPath;
        music.currentTime = 0;
        playMusic(index);
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (index >= 10) {
        index = 1;
    }
    else {
        index += 1;
    }
    makeAllPlays();
    music.src = songs[index - 1].songPath;
    music.currentTime = 0;
    playMusic(index);
})

document.getElementById('previous').addEventListener('click', () => {
    if (index <= 1) {
        index = 1;
    }
    else {
        index -= 1;
    }
    makeAllPlays();
    music.src = songs[index - 1].songPath;
    music.currentTime = 0;
    playMusic(index);
})
