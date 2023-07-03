let musicPlayer = document.querySelector(".music-player-container");
let togglePlayer = document.querySelector(".toggle-player");

let trackInfo = document.querySelector(".track-info");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");
let trackNav = document.querySelector(".track-nav");

let playPauseBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;

let currentTrack = document.createElement("audio");

let soundBars = document.querySelector(".sound-bars");

togglePlayer.addEventListener("click", function () {
  isHidden = !isHidden;
  if (isHidden) {
    musicPlayer.classList.remove("hide");
    togglePlayer.innerHTML = '<ion-icon name="remove-outline"></ion-icon>';
    trackInfo.style.transitionDelay = "0.4s";
    trackNav.style.transitionDelay = "0.4s";
  } else {
    musicPlayer.classList.add("hide");
    togglePlayer.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
    trackInfo.style.transitionDelay = "0s";
    trackNav.style.transitionDelay = "0s";
  }
});

let soundBarsLottie = bodymovin.loadAnimation({
  container: soundBars,
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets5.lottiefiles.com/packages/lf20_jJJl6i.json",
});

let trackList = [
  {
    name: "hARAkiRI",
    artist: "Duki, C.R.O.",
    path: "/songs/harakiri.mp3",
  },
  {
    name: "antes de perderte",
    artist: "Duki",
    path: "/songs/antesdeperderte.mp3",
  },
  {
    name: "BABY HELLO",
    artist: "Rauw, Bzrp",
    path: "/songs/babyhello.mp3",
  },
  {
    name: "Bzrp Session 56",
    artist: "Bzrp, Rauw",
    path: "/songs/bzrprauw.mp3",
  },
  {
    name: "WHERE SHE GOES",
    artist: "Bad Bunny",
    path: "/songs/whereshegoes.mp3",
  },
  {
    name: "Baby Don't Hurt Me",
    artist: "David Guetta",
    path: "/songs/babydonthurtme.mp3",
  },
  {
    name: "Ahora y Siempre",
    artist: "Quevedo, Linton",
    path: "/songs/ahoraysiempre.mp3",
  },
  {
    name: "FEEL ME??",
    artist: "Trueno",
    path: "/songs/feelme.mp3",
  },
  {
    name: "Tigini (Remix)",
    artist: "Rvfv, Kikimoteleba",
    path: "/songs/tigini.mp3",
  },
  {
    name: "Reina",
    artist: "C.R.O.",
    path: "/songs/reina.mp3",
  },
  {
    name: "Lo Siento BB",
    artist: "Tainy, Bad Bunny...",
    path: "/songs/losientobb.mp3",
  },
  {
    name: "Como vas?",
    artist: "Kidd Keo",
    path: "/songs/comovas.mp3",
  },
  {
    name: "Supernova",
    artist: "Saiko",
    path: "/songs/supernova.mp3",
  },
   {
    name: "Fantasma|AVC",
    artist: "Tainy, Jhayco",
    path: "/songs/fantasma.mp3",
  },
   {
    name: "Mami",
    artist: "Rvfv, Pablo Mas",
    path: "/songs/mami.mp3",
  },
   {
    name: "MERCHO",
    artist: "LiL CaKe, Migrantes...",
    path: "/songs/mercho.mp3",
  },
   {
    name: "Rara Vez",
    artist: "Taiu, Milo j",
    path: "/songs/raravez.mp3",
  },
   {
    name: "PLAYA DEL INGLÉS",
    artist: "Quevedo, Myke Towers",
    path: "/songs/playadelingles.mp3",
  },
];

function loadTrack(trackIndex) {
  currentTrack.src = trackList[trackIndex].path;
  currentTrack.load();
  trackName.textContent = trackList[trackIndex].name;
  trackArtist.textContent = trackList[trackIndex].artist;
  currentTrack.addEventListener("ended", nextTrack);
}

loadTrack(trackIndex);

function playPauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPauseBtn.innerHTML = '<ion-icon name="pause-sharp"></ion-icon>';
  soundBarsLottie.play();
}

function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '<ion-icon name="play-sharp"></ion-icon>';
  soundBarsLottie.pause();
}

function nextTrack() {
  if (trackIndex < trackList.length - 1) trackIndex += 1;
  else trackIndex = 0;
  loadTrack(trackIndex);
  playTrack();
}

function prevTrack() {
  if (trackIndex > 0) trackIndex -= 1;
  else trackIndex = trackList.length;
  loadTrack(trackIndex);
  playTrack();
}
