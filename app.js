
document.getElementById("gps-button").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("gps");
});

document.getElementById("cameraN-button").addEventListener("click", () => {
    console.log("n");
    window.webkit.messageHandlers.CAMERA_N.postMessage("cameraNative");
});

document.getElementById("cameraW-button").addEventListener("click", () => {
    console.log("w");
    window.webkit.messageHandlers.CAMERA_W.postMessage("cameraWeb");
});