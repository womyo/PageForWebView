
document.getElementById("gps-button").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("gps");
});

document.getElementById("cameraN-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA_N.postMessage("cameraNative");
});

document.getElementById("cameraW-button").addEventListener("click", () => {
    window.webkit.messageHandlers.CAMERA_W.postMessage("cameraWeb");
});

document.getElementById("fileSave-button").addEventListener("click", () => {
    window.webkit.messageHandlers.FILE_S.postMessage("fileSave");
});

document.getElementById("fileRead-button").addEventListener("click", () => {
    window.webkit.messageHandlers.FILE_R.postMessage("fileRead");
});