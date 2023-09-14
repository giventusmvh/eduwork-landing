var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    document.getElementById("navbar").style.backgroundColor = "#ffffff";
    document.getElementById("navbar").style.boxShadow =
      "0 0 10px rgba(0,0,0,0.1)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
  }
});
