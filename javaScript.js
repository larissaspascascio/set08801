const video = document.getElementById('myVideo');

video.addEventListener('mouseover', function() {
   video.play(); // Play the video when mouse hovers over
   video.classList.add('playing'); // Add a class to scale the video
});

video.addEventListener('mouseout', function() {
   video.pause(); // Pause the video when mouse leaves
   video.classList.remove('playing'); // Remove the scaling class
});