// ────────── Drawer Overlay ──────────
const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const content = document.querySelector(".content");
const drawerOverlay = document.getElementById("drawerOverlay");

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("active");
  content.classList.toggle("shifted");
  drawerOverlay.style.display = drawer.classList.contains("active") ? "block" : "none";
});

drawerOverlay.addEventListener("click", () => {
  drawer.classList.remove("active");
  content.classList.remove("shifted");
  drawerOverlay.style.display = "none";
});


// ────────── Comments Panel ──────────
const commentsOverlay = document.getElementById("commentsOverlay");
const commentsBody = document.getElementById("commentsBody");
const commentInput = document.getElementById("commentInput");
const commentBtns = document.querySelectorAll(".action-btn.comment");

commentBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    commentsOverlay.style.display = "flex";
  })
);

function closeComments() {
  commentsOverlay.style.display = "none";
}

function addComment() {
  if (commentInput.value.trim() !== "") {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <img src="https://via.placeholder.com/30">
      <div class="comment-content">
        <div class="comment-user">You</div>
        <div class="comment-text">${commentInput.value}</div>
        <div class="comment-emojis">
          <span>👍</span><span>❤️</span><span>😂</span>
        </div>
      </div>`;
    commentsBody.prepend(div);
    commentInput.value = "";
  }
}

commentInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addComment();
});




// ✅ Shorts ↔ Videos Switch
const shortsTab = document.getElementById("shortsTab");
const videosTab = document.getElementById("videosTab");
const toggleSwitch = document.getElementById("toggleSwitch");
const shortsContainer = document.querySelector(".shorts-container");

// Clicking Shorts tab
shortsTab.addEventListener("click", () => {
  shortsTab.classList.add("active");
  videosTab.classList.remove("active");
  toggleSwitch.checked = false;
  shortsContainer.style.display = "block";
});

// Clicking Videos tab → redirect
videosTab.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Switch toggle
toggleSwitch.addEventListener("change", (e) => {
  if (e.target.checked) {
    window.location.href = "index.html";
  } else {
    shortsTab.classList.add("active");
    videosTab.classList.remove("active");
    shortsContainer.style.display = "block";
  }
});

