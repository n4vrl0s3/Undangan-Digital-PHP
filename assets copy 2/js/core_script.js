document.addEventListener("DOMContentLoaded", () => {
  let timer_ = 1734077473; // Unix timestamp
  let flipdown = new FlipDown(timer_);
  flipdown.start();
  flipdown.ifEnded(() => {
    document.querySelector(".flipdown").innerHTML = `<h2>Timer end</h2>`;
  });
});

function scrollToTop() {
  const container = document.getElementById("submittedData");
  container.scrollTo({
    top: -1000,
  });
}

const data = [
  { name: "Bari", status: "Hadir", message: "Selamat Ya" },
  { name: "Ali", status: "Tidak Hadir", message: "Maaf, tidak bisa hadir" },
  { name: "Sara", status: "Hadir", message: "Semoga bahagia selalu" },
];

for (let i = 0; i < 3; i++) {
  const submittedDataDiv = document.getElementById("submittedData");

  const newItem = document.createElement("div");
  newItem.classList.add("submitted-item");

  newItem.innerHTML = `
    <h3>${data[i].name} (${data[i].status})</h3>
    <p>${data[i].message}</p>
  `;

  submittedDataDiv.appendChild(newItem);
}

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.querySelector(
    'input[name="attendance"]:checked'
  ).value;
  const message = document.getElementById("message").value;

  const submittedDataDiv = document.getElementById("submittedData");

  const newItem = document.createElement("div");
  newItem.classList.add("submitted-item");

  newItem.innerHTML = `
  <h3>${name} (${attendance})</h3>
  <p>${message}</p>
  `;

  submittedDataDiv.appendChild(newItem);

  document.getElementById("rsvpForm").reset();
  scrollToTop();
});

const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add("playing");
    playButton.classList.remove("paused");
  } else {
    audio.pause();
    playButton.classList.add("paused");
    playButton.classList.remove("playing");
  }
});

let slideIndex = 1;

function showSlide(n) {
  let i;
  let slides = document.querySelectorAll(".mySlide");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

showSlide(slideIndex);

function plusSlide(n) {
  showSlide((slideIndex += n));
}
