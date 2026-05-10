const form = document.querySelector('.search-bar');

if (form) { // ensures .search-bar exists
  form.addEventListener('submit', (event) => {
  event.preventDefault();// prevents the page to refresh when the form is submitted
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
    if (e.target === modalContainer) { // // checks if the user clicked is the modalContainer or not.
      modalContainer.classList.remove("active");
    }
  });
}