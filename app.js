
document.getElementById("start-gps").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("start");
});

document.getElementById("stop-gps").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("stop");
});


document.getElementById("image-picker").addEventListener("click", () => {
    window.webkit.messageHandlers.IMAGE_PICKER.postMessage("imagePicker");
});

document.getElementById("fileSave-button").addEventListener("click", () => {
    window.webkit.messageHandlers.FILE_S.postMessage("fileSave");
});

document.getElementById("fileRead-button").addEventListener("click", () => {
    window.webkit.messageHandlers.FILE_R.postMessage("fileRead");
});

window.onMessageFromiOS = function(message) {
    const logDiv = document.getElementById("location-log");
    const entry = document.createElement("div");
    entry.textContent = `${message}`;
    logDiv.appendChild(entry);
};