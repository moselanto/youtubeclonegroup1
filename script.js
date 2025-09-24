const searchBar = document.querySelector(".search");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// Toggle search input on mobile
searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) {
    e.preventDefault();
    searchInput.classList.toggle("active");
    if (searchInput.classList.contains("active")) {
      searchInput.focus();
    }
  }
});

// Hide input if click outside on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 480 &&
    !searchBar.contains(e.target) &&
    searchInput.classList.contains("active")
  ) {
    searchInput.classList.remove("active");
  }
});

// Prevent propagation when clicking inside search
searchBar.addEventListener("click", (e) => {
  if (window.innerWidth <= 480) {
    e.stopPropagation();
  }
});


// Hide input if click outside on mobile
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 480 &&
    !searchBar.contains(e.target) &&
    searchInput.classList.contains("active")
  ) {
    searchInput.classList.remove("active");
  }
});

// ➕ Create Dropdown Toggle
const createBtn = document.getElementById("createBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
createBtn.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", (e) => {
  if (!e.target.closest(".create-dropdown")) {
    dropdownMenu.style.display = "none";
  }
});

// Highlight clicked category
const chips = document.querySelectorAll(".chip");
chips.forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelector(".chip.active")?.classList.remove("active");
    chip.classList.add("active");
  });
});

const categories = document.getElementById("categories");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

function updateArrows() {
  // At left edge
  if (categories.scrollLeft <= 0) {
    scrollLeftBtn.style.display = "none";
  } else {
    scrollLeftBtn.style.display = "flex";
  }
  // At right edge
  if (categories.scrollLeft + categories.clientWidth >= categories.scrollWidth - 1) {
    scrollRightBtn.style.display = "none";
  } else {
    scrollRightBtn.style.display = "flex";
  }
}

scrollLeftBtn.addEventListener("click", () => {
  categories.scrollBy({ left: -200, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  categories.scrollBy({ left: 200, behavior: "smooth" });
});

categories.addEventListener("scroll", updateArrows);
window.addEventListener("resize", updateArrows);

// Run once on load
updateArrows();

const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const content = document.querySelector(".content");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("active");
  content.classList.toggle("shifted");
});


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.show-more-btn');
  if (btn) {                     // ✅ only run if the button exists
    btn.addEventListener('click', () => {
      document.querySelectorAll('.shorts-grid .short-card:nth-child(n + 5)')
        .forEach(card => (card.style.display = 'block'));
      btn.style.display = 'none';
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchPreview = document.getElementById('searchPreview');

  // Collect all video titles and their links
  const videoCards = Array.from(document.querySelectorAll('.video-card-link'));
  const videoData = videoCards.map(card => {
    const titleElem = card.querySelector('.video-title');
    return {
      title: titleElem ? titleElem.textContent.trim() : '',
      link: card.getAttribute('href')
    };
  });

  searchInput.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    searchPreview.innerHTML = '';
    if (!query) {
      searchPreview.style.display = 'none';
      return;
    }
    // Filter video titles
    const matches = videoData.filter(v => v.title.toLowerCase().includes(query));
    if (matches.length === 0) {
      searchPreview.style.display = 'none';
      return;
    }
    // Show preview
    matches.slice(0, 7).forEach(match => {
      const div = document.createElement('div');
      div.className = 'preview-item';
      div.textContent = match.title;
      div.onclick = () => window.location.href = match.link;
      searchPreview.appendChild(div);
    });
    searchPreview.style.display = 'block';
  });

  // Hide preview when clicking outside
  document.addEventListener('click', function (e) {
    if (!searchInput.contains(e.target) && !searchPreview.contains(e.target)) {
      searchPreview.style.display = 'none';
    }
  });
});