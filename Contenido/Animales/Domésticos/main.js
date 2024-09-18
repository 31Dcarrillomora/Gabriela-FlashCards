// Lista de imágenes y audios correspondientes
const mediaItems = [
    { img: 'image1', audio: 'audio1' },
    { img: 'image2', audio: 'audio2' },
    { img: 'image3', audio: 'audio3' },
    { img: 'image4', audio: 'audio4' },
    { img: 'image5', audio: 'audio5' },
    { img: 'image6', audio: 'audio6' },
];

// Índice de la canción actual
let currentSongIndex = 0;

// Seleccionamos los botones y el reproductor de audio
const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Cargar el primer audio al iniciar
audioPlayer.src = document.getElementById(mediaItems[currentSongIndex].audio).src;

// Función para pausar todos los audios excepto el actual
function pauseOtherAudios() {
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(otherAudio => {
        if (otherAudio !== audioPlayer) {
            otherAudio.pause();
        }
    });
}

// Escuchar cuando el audio comienza a reproducirse y pausar los demás
audioPlayer.addEventListener('play', pauseOtherAudios);



// Función para cambiar a la siguiente canción
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % mediaItems.length;
    audioPlayer.src = document.getElementById(mediaItems[currentSongIndex].audio).src;
    audioPlayer.play();
});