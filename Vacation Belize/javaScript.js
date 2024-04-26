
const storyText = document.querySelector('.map-par');
const readAloudButton = document.querySelector('.read-aloud-button');

readAloudButton.addEventListener('click', () => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = storyText.textContent;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    // Get available voices
    const voices = window.speechSynthesis.getVoices();
    
    // Set the voice to a female voice with British accent
    speech.voice = voices.find(voice => voice.name === 'Google UK English Female'); // Change voice name as needed
    
    window.speechSynthesis.speak(speech);
});

const video = document.getElementById('camping-vid');

video.addEventListener('mouseover', function() {
   video.play(); // Play the video when mouse hovers over
   video.classList.add('playing'); // Add a class to scale the video
});

video.addEventListener('mouseout', function() {
   video.pause(); // Pause the video when mouse leaves
   video.classList.remove('playing'); // Remove the scaling class
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

