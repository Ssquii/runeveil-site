
function copyIP(){
const ip = document.getElementById("serverip").innerText;
navigator.clipboard.writeText(ip);
alert("Server IP copied: " + ip);
}
