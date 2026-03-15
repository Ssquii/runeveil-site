function copyIP() {
  const ip = document.getElementById("serverip").innerText;
  navigator.clipboard.writeText(ip).then(() => {
    document.querySelectorAll(".primary-btn").forEach((btn) => {
      const old = btn.innerText;
      btn.innerText = "Copied IP";
      setTimeout(() => btn.innerText = old, 1400);
    });
  }).catch(() => {
    alert("Copy failed. Server IP: " + ip);
  });
}
