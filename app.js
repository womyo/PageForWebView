
document.getElementById("gps-button").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("gps");
});

document.getElementById("cameraN-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA_N.postMessage("cameraNative");
});

document.getElementById("cameraW-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA_W.postMessage("cameraWeb");
});

document.getElementById("fileUpload-button").addEventListener("click", () => {
    window.webkit.messageHandlers.FILE_UPLOAD.postMessage("fileUpload");
});