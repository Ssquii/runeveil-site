function copyIP() {
  const ip = document.getElementById("serverip");
  if (!ip) return;
  navigator.clipboard.writeText(ip.innerText).then(() => {
    document.querySelectorAll(".btn-primary").forEach((btn) => {
      const old = btn.innerText;
      btn.innerText = "Copied IP";
      setTimeout(() => btn.innerText = old, 1400);
    });
  }).catch(() => {
    alert("Copy failed. Server IP: " + ip.innerText);
  });
}

function toggleNav() {
  const nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("open");
}
