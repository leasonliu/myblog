var stats = localStorage.getItem("stats") | 0;
localStorage.setItem("stats", stats + 1);
window.onload = function setStats() {
    document.getElementById("stats").innerHTML = stats;
}