// ========== Countdown ==========
const deadline = new Date('2026-11-15T23:59:59').getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = deadline - now;

  if (diff <= 0) {
    ['days','hours','minutes','seconds'].forEach(id => {
      document.getElementById(id).textContent = '00';
    });
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('days').textContent    = String(d).padStart(2,'0');
  document.getElementById('hours').textContent   = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ========== Mobile nav ==========
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
if (toggle) {
  toggle.addEventListener('click', () => menu.classList.toggle('active'));
  document.querySelectorAll('.nav-link').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('active'))
  );
}

// ========== Copy citation ==========
function copyCitation(btn) {
  const text = btn.parentElement.querySelector('code').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = original), 1800);
  });
}
window.copyCitation = copyCitation;

// ========== Scroll reveal ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.track-card, .info-card, .research-item, .rule-card, .prize-card, .behavior-item, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
