const form = document.querySelector('.search-bar');

if (form) { 
  form.addEventListener('submit', (event) => {
  event.preventDefault();
});
}


//Modal

const modalBtn = document.querySelector(".location-btn");
const modalContainer = document.querySelector(".modal-container");

if (modalBtn && modalContainer) {
  modalBtn.addEventListener("click", () => {
    modalContainer.classList.add("active");
  });
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) { 
      modalContainer.classList.remove("active");
    }
  });
}