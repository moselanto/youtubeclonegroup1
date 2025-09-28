document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".feed-checkbox");
  const feed = document.getElementById("videoFeed");
  const saveBtn = document.getElementById("saveBtn");
  const saveMsg = document.querySelector(".save-message");
  const undoBtn = document.getElementById("undoBtn");

  // Toggle categories
  checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      document.querySelectorAll(`.${cb.value}`).forEach(video => {
        video.style.display = cb.checked ? "block" : "none";
      });
    });
  });

  // Save customization
  saveBtn.addEventListener("click", () => {
    saveMsg.classList.remove("hidden");
  });

  // Undo save
  undoBtn.addEventListener("click", () => {
    saveMsg.classList.add("hidden");
  });
});