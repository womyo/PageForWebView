
document.getElementById("start-gps").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("start");
});

document.getElementById("stop-gps").addEventListener("click", () => {
    window.webkit.messageHandlers.GPS.postMessage("stop");
});


document.getElementById("imagePicker").addEventListener("click", () => {
    window.webkit.messageHandlers.IMAGE_PICKER.postMessage("imagePicker");
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

window.onMessageFromiOS = function(data) {
    console.log("Received from iOS:", data);

    const logDiv = document.getElementById("location-log");
    const entry = document.createElement("div");
    entry.textContent = `Latitude: ${data.latitude}, Longitude: ${data.longitude}, Time: ${new Date(data.timestamp * 1000).toLocaleTimeString()}`;
    logDiv.appendChild(entry);
};