
document.getElementById("gps-button").addEventListener("click", function() {
    let message = "gps";

    console.log("GPS");
    window.webkit.messageHandlers.GPS.postMessage(message)
});