function copyIP() {
  const ip = "142.44.144.84";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(ip).then(function () {
      alert("Server IP copied: " + ip);
    }).catch(function () {
      fallbackCopy(ip);
    });
  } else {
    fallbackCopy(ip);
  }
}

function fallbackCopy(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.left = "-9999px";
  document.body.appendChild(temp);
  temp.focus();
  temp.select();

  try {
    document.execCommand("copy");
    alert("Server IP copied: " + text);
  } catch (err) {
    alert("Copy failed. Server IP: " + text);
  }

  document.body.removeChild(temp);
}
