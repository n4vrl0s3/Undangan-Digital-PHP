let bukaUndangan = document.getElementById("open");
let cover = document.getElementById("cover");
let section = document.getElementById("sectionKecil");

bukaUndangan.addEventListener("click", function () {
  cover.classList.add("fade-out");
  section.classList.add("slide-out");

  setTimeout(function () {
    window.location.href = "core.html";
  }, 900);
});
