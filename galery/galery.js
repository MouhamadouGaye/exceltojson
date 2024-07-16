const gallery = document.querySelector(".gallery");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let currentIndex = 0;
const totalImages = gallery.querySelectorAll("img").length;

function updateGallery() {
  const offset = -currentIndex * 100;
  gallery.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
  if (currentIndex < totalImages - 1) {
    currentIndex = currentIndex + 1;
  } else {
    currentIndex = totalImages - currentIndex;
  }
  updateGallery();

  //   currentIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = totalImages - 1;
  }
  updateGallery();

  //   currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
});
