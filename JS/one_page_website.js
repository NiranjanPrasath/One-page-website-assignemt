let slideIndex = 1;

// OPEN MODAL
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  showSlides(slideIndex);
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// NEXT / PREV
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// CURRENT SLIDE
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// SHOW SLIDES
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// CLOSE WHEN CLICK OUTSIDE
window.onclick = function(event) {
  let modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

// KEYBOARD SUPPORT
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") plusSlides(1);
  if (e.key === "ArrowLeft") plusSlides(-1);
  if (e.key === "Escape") closeModal();
});