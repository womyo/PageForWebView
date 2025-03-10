
document.getElementById("gps-button").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("gps");
});

document.getElementById("camera-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA.postMessage("camera");
});