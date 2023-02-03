console.log("hello Welcome t spotify Clone")

//Initialize The Variables--------------------------------------------------
let music = '';
let Index = 0;
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
// let timeStamp = document.querySelectorAll('timeStamp');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "8 Letters Why don t we", songPath: "songs/8 Letters Why Don t We.mp3", songCover: "covers/2.jpg" },
    { songName: "Anti Hero", songPath: "songs/Anti Hero.mp3", songCover: "covers/2.jpg" },
    { songName: "closer", songPath: "songs/closer.mp3", songCover: "covers/3.jpg" },
    { songName: "Ghost-Ava Max", songPath: "songs/Ghost-Ava Max.mp3", songCover: "covers/4.jpg" },
    { songName: "Heaven", songPath: "songs/Heaven.mp3", songCover: "covers/5.jpg" },
    { songName: "One Direction Steal My Girl", songPath: "songs/One Direction Steal My Girl.mp3", songCover: "covers/6.jpg" },
    { songName: "Our Song", songPath: "songs/Our Song.mp3", songCover: "covers/7.jpg" },
    { songName: "rocket Science", songPath: "songs/rocket Science.mp3", songCover: "covers/8.jpg" },
    { songName: "Snap", songPath: "songs/Snap.mp3", songCover: "covers/9.jpg" },
    { songName: "You broke me first", songPath: "songs/You broke me first.mp3", songCover: "covers/10.jpg" }
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].songCover;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// Adding Event Listeners------------------------------------------------------------
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        music.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


music.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //updating progress Bar of music
    // console.log(music.currentTime);
    let progress = parseInt((music.currentTime / music.duration) * 100);
    progressBar.value = progress;

})
progressBar.addEventListener('change', () => {
    music.currentTime = (progressBar.value * music.duration) / 100;
})
const makeAllPlays = () => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
}
arrayFrom(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
        Index = parse(e.target.id);
        music.src = 'songs/${index}.mp3';
        music.currentTime = 0;
        music.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add('fa-pause-circle');

    })
})