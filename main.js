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
    document.getElementById("navbar").style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
  }
});

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
