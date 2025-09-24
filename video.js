// Sidebar toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-open');
  });
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('sidebar-open');
    }
  });
}

// Shorts slider
const shortsSlider = document.getElementById('shortsSlider');
const shortsLeft = document.getElementById('shortsLeft');
const shortsRight = document.getElementById('shortsRight');
let shortsScroll = 0;

if (shortsSlider && shortsLeft && shortsRight) {
  shortsLeft.addEventListener('click', () => {
    shortsScroll = Math.max(shortsScroll - 90, 0);
    shortsSlider.scrollTo({ left: shortsScroll, behavior: 'smooth' });
  });

  shortsRight.addEventListener('click', () => {
    shortsScroll = Math.min(shortsScroll + 90, shortsSlider.scrollWidth - shortsSlider.clientWidth);
    shortsSlider.scrollTo({ left: shortsScroll, behavior: 'smooth' });
  });
}

// Like/Dislike active state
document.querySelectorAll('.video-actions button').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});


