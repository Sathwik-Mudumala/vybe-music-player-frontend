// Song Database
const songs = [
    {
        id: 0,
        name: "Anjaana Anjaani",
        artist: "Anirudh",
        img: "assets/images/paradise.jpeg",
        src: "assets/audio/7.mp3",
        duration: "3:50"
    },
    {
        id: 1,
        name: "Khwahish",
        artist: "Munawar",
        img: "assets/images/khwahish.jpg",
        src: "assets/audio/2.mpeg",
        duration: "4:12"
    },
    {
        id: 2,
        name: "Julius",
        artist: "Unknown Artist",
        img: "assets/images/banner.jpg",
        src: "assets/audio/3.mpeg",
        duration: "3:45"
    },
    {
        id: 3,
        name: "Give Way",
        artist: "Unknown Artist",
        img: "assets/images/banner.jpg",
        src: "assets/audio/4.mpeg",
        duration: "3:58"
    },
    {
        id: 4,
        name: "Lahore",
        artist: "Guru Randhawa",
        img: "assets/images/guru.jpg",
        src: "assets/audio/5.mpeg",
        duration: "4:20"
    },
    {
        id: 5,
        name: "Unknown Track",
        artist: "Unknown Artist",
        img: "assets/images/gr1.webp",
        src: "assets/audio/6.mpeg",
        duration: "3:30"
    },
    {
        id: 6,
        name: "Dil Me Ho Tum",
        artist: "Arman Malik",
        img: "assets/images/arman.jpg",
        src: "assets/audio/1.mpeg",
        duration: "4:03"
    }
];

// Global Variables
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let audio = new Audio();
let updateInterval = null;

// DOM Elements - Get references after page loads
let songList;
let playBtn;
let prevBtn;
let nextBtn;
let shuffleBtn;
let progressBar;
let currentTimeEl;
let durationEl;
let currentSongName;
let playerGif;

// Initialize App when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    songList = document.getElementById('songList');
    playBtn = document.getElementById('playBtn');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    shuffleBtn = document.getElementById('shuffleBtn');
    progressBar = document.getElementById('progressBar');
    currentTimeEl = document.getElementById('currentTime');
    durationEl = document.getElementById('duration');
    currentSongName = document.getElementById('currentSongName');
    playerGif = document.getElementById('playerGif');
    
    // Initialize the app
    init();
});

function init() {
    console.log('Initializing TuneVibe...');
    renderSongList();
    setupEventListeners();
    loadSong(0);
    console.log('TuneVibe initialized successfully!');
}

// Render Song List
function renderSongList() {
    songList.innerHTML = songs.map(song => `
        <div class="song-card" data-id="${song.id}">
            <div class="song-card-left">
                <img src="${song.img}" alt="${song.name}">
                <div class="song-card-info">
                    <h3>${song.name}</h3>
                    <p>${song.artist}</p>
                </div>
            </div>
            <div class="song-card-right">
                <span class="song-duration">${song.duration}</span>
                <i class="fa-solid fa-circle-play play-icon"></i>
            </div>
        </div>
    `).join('');
}

// Load Song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    audio.src = song.src;
    currentSongName.textContent = `${song.name} - ${song.artist}`;
    
    // Update active state on song cards
    const allCards = document.querySelectorAll('.song-card');
    allCards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    // Reset progress
    progressBar.value = 0;
    currentTimeEl.textContent = '0:00';
    
    console.log('Loaded:', song.name);
}

// Play Song
function playSong() {
    isPlaying = true;
    audio.play().then(() => {
        console.log('Playing...');
        playBtn.classList.remove('fa-circle-play');
        playBtn.classList.add('fa-circle-pause');
        playerGif.classList.add('playing');
        
        // Update progress bar continuously
        if (updateInterval) clearInterval(updateInterval);
        updateInterval = setInterval(updateProgress, 100);
    }).catch(err => {
        console.error('Play error:', err);
    });
}

// Pause Song
function pauseSong() {
    isPlaying = false;
    audio.pause();
    console.log('Paused');
    playBtn.classList.remove('fa-circle-pause');
    playBtn.classList.add('fa-circle-play');
    playerGif.classList.remove('playing');
    
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

// Toggle Play/Pause
function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Next Song
function nextSong() {
    if (isShuffle) {
        // Random song (excluding current)
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex && songs.length > 1);
        currentSongIndex = randomIndex;
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    if (isPlaying) {
        playSong();
    }
}

// Toggle Shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    if (isShuffle) {
        shuffleBtn.classList.add('active');
        console.log('Shuffle: ON');
    } else {
        shuffleBtn.classList.remove('active');
        console.log('Shuffle: OFF');
    }
}

// Update Progress Bar
function updateProgress() {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        
        // Update time displays
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }
}

// Seek Song
function seekSong() {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
    console.log('Seeked to:', formatTime(seekTime));
}

// Format Time (seconds to mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Event Listeners
function setupEventListeners() {
    // Player controls
    playBtn.addEventListener('click', function() {
        console.log('Play button clicked');
        togglePlay();
    });
    
    prevBtn.addEventListener('click', function() {
        console.log('Previous button clicked');
        prevSong();
    });
    
    nextBtn.addEventListener('click', function() {
        console.log('Next button clicked');
        nextSong();
    });
    
    shuffleBtn.addEventListener('click', function() {
        console.log('Shuffle button clicked');
        toggleShuffle();
    });
    
    progressBar.addEventListener('input', seekSong);
    
    // Song cards - Click to play
    songList.addEventListener('click', function(e) {
        const card = e.target.closest('.song-card');
        if (card) {
            const songId = parseInt(card.dataset.id);
            console.log('Song card clicked:', songId);
            
            if (songId === currentSongIndex && isPlaying) {
                pauseSong();
            } else {
                loadSong(songId);
                playSong();
            }
        }
    });
    
    // Auto play next song when current ends
    audio.addEventListener('ended', function() {
        console.log('Song ended, playing next...');
        nextSong();
    });
    
    // Update duration when metadata is loaded
    audio.addEventListener('loadedmetadata', function() {
        durationEl.textContent = formatTime(audio.duration);
    });
    
    console.log('Event listeners attached');
}
