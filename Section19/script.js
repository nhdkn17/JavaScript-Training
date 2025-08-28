function load() {
     for (var i = 0; i < document.images.length; i++) {
     var img = document.images[i];
     var rollover = img.getAttribute("data-rollover");
     if (!rollover) continue;

     (new Image()).src = rollover;
     img.setAttribute("data-rollout", img.src);

     img.onmouseover = function() {
          this.src = this.getAttribute("data-rollover");
     };
     img.onmouseout = function() {
               this.src = this.getAttribute("data-rollout");
          };
     }
};

new Audio("chime.wav").play();

var a = new Audio();
if (a.canPlayType("audio/wav")) {
     a.src = "soundeffect.wav";
     a.play();
}

window.addEventListener("load", function() {
     document.getElementById("music").play();
});

var percent_loaded = Math.floor(song.buffered.end(0) / song.duration * 100);

if (song.error.code == song.error.MEDIA_ERR_DECODE)
    alert("Can't play song: corrupt audio data.");
