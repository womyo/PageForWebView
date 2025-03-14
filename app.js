
document.getElementById("gps-button").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("gps");
});

document.getElementById("camera-nativeView-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA.postMessage("cameraNative");
});

document.getElementById("camera-webView-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA.postMessage("cameraWeb");
});