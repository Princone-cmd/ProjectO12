var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("album"), 
    // select video element         
    vid = document.getElementById('bg_vid'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  var h = Math.floor(vid.duration) * playbackConst;
  setHeight.style.height = h + "px";

  var availHeight = h - (window.innerHeight * 2);

  const nodeList = document.querySelectorAll(".album_item");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.height = ((Math.floor(availHeight/5) / window.innerHeight) * 100) + "vh";
  }

});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);