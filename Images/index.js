window.addEventListener("DOMContentLoaded", (e) => {

    // Original JavaScript code by Chirp Internet: chirpinternet.eu
    // Please acknowledge use of this code by including this header.

    document.querySelectorAll(".fading-slideshow > li").forEach(
      (c) => { c.addEventListener("animationend", (e) => e.target.parentNode.appendChild(e.target)); }
    );

  });