'use strict';

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt para seleccionar medios stream, pasarlo a videoElement, luego, reproducir.

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Catch error aquí
        console.log('Ups! Hay un error aqui: ', error);
    }
}

button.addEventListener('click', async () => {
    // Ocultar Boton
    button.disabled = true;
    // Comenzar Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reestablecer el Boton
    button.disabled = false;
});

// On Load
selectMediaStream();
