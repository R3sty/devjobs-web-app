const form = document.querySelector('.search-bar');

form.addEventListener('submit', (event) => {
  event.preventDefault();// prevents the page to refresh when the form is submitted
});

//Modal

const modalBtn = document.querySelector(".location-btn");
const modalContainer = document.querySelector(".modal-container");

if (modalBtn && modalContainer) {
  modalBtn.addEventListener("click", () => {
    modalContainer.classList.add("active");
  });
  modalContainer.addEventListener("click", (e) => {//e is the event object that contains information about the click event.
    if (e.target === modalContainer) { // // checks if the user clicked is the modalContainer or not.
      modalContainer.classList.remove("active");
    }
  });
}