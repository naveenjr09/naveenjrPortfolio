function openHomepage() {
    window.location.href = "homepage.html";
  }
  let isPlaying1 = false;
  const audio1 = document.getElementById('audio');
  const playButton1 = document.querySelector('.music-player:nth-child(1) button:nth-child(1)');
  
  let isPlaying2 = false;
  const audio2 = document.getElementById('audio2');
  const playButton2 = document.querySelector('.music-player:nth-child(2) button:nth-child(1)');
  
  // Set default sound level for both players
  audio1.volume = 0.1;
  audio2.volume = 0.1;
  
  function playPause() {
      if (isPlaying1) {
          audio1.pause();
          playButton1.textContent = 'Play';
      } else {
          audio1.play();
          playButton1.textContent = 'Pause';
      }
      isPlaying1 = !isPlaying1;
  }
  
  function stopAudio() {
      audio1.pause();
      audio1.currentTime = 0;
      playButton1.textContent = 'Play';
      isPlaying1 = false;
  }
  
  function playPause2() {
      if (isPlaying2) {
          audio2.pause();
          playButton2.textContent = 'Play';
      } else {
          audio2.play();
          playButton2.textContent = 'Pause';
      }
      isPlaying2 = !isPlaying2;
  }
  
  function stopAudio2() {
      audio2.pause();
      audio2.currentTime = 0;
      playButton2.textContent = 'Play';
      isPlaying2 = false;
  }
  
  
  