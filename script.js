// header component
class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <a href="index.html"><img src="./assets/desktop/logo.svg" alt="Site Logo" class="site-logo" /></a>

        <div class="theme-container">
          <img src="./assets/desktop/icon-sun.svg" alt="" />
          <button class="theme-toggle" aria-label="Toggle dark mode">
            <span class="toggle-circle"></span>
          </button>
          <img src="./assets/desktop/icon-moon.svg" alt="" />
        </div>
      </header>
    `;
    const themeBtn = this.querySelector('.theme-toggle');

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      themeBtn.classList.add("active");
    }

    themeBtn.addEventListener("click", () => {
      themeBtn.classList.toggle("active");
      document.body.classList.toggle("dark");

      const isDark = document.body.classList.contains("dark");
      if (isDark) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
    
  }
}
customElements.define("site-header", SiteHeader);


//Stop browser Default action 
const form = document.querySelector('.search-bar');

if (form) { 
  form.addEventListener('submit', (event) => {
  event.preventDefault();
});
}


//Modal

const modalBtn = document.querySelector(".location-btn");
const modalContainer = document.querySelector(".modal-container");
const searchModalBtn = document.querySelector(".search-btn-modal");

if (modalBtn && modalContainer) {
  modalBtn.addEventListener("click", () => {
    modalContainer.classList.add("active");
  });
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) { 
      modalContainer.classList.remove("active");
    }
    searchModalBtn.addEventListener("click", () => {
      modalContainer.classList.remove("active");
    })
  });
}