var textDisplay = document.getElementById("text");
var pharses = ["tanya dong kak "];
let i = 0;
let j = 0;
let currentPharse = [];
let isDeleting = false;
let isEnd = false;
function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPharse.join("");

  if (i < pharses.length) {
    if (!isDeleting && j <= pharses[i].length) {
      currentPharse.push(pharses[i][j]);
      j++;
    }

    if (isDeleting && j <= pharses[i].length) {
      currentPharse.pop(pharses[i][j]);
      j--;
    }

    if (j == pharses[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPharse = [];
      isDeleting = false;
      i++;
      if (i == pharses.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 200 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
let label = document.querySelectorAll(".acc");

label.forEach((e) => {
  e.addEventListener("click", () => {
    removeClass();
    e.classList.toggle("active");
  });
});

function removeClass() {
  label.forEach((e) => {
    e.classList.remove("active");
  });
}

// Event Scroll
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
