
function copyIP() {
  const ip = "142.44.144.84";

  navigator.clipboard.writeText(ip).then(function () {
    alert("Server IP copied: " + ip);
  }).catch(function () {
    const temp = document.createElement("input");
    temp.value = ip;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert("Server IP copied: " + ip);
  });
}
