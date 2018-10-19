function updateTime() {
    let timeString = new Date().toLocaleTimeString();
    document.getElementById("date").innerHTML = timeString;
    window.setTimeout(updateTime, 1000);
}

window.setTimeout(updateTime, 1000);