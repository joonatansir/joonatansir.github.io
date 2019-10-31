function detectAndRedirect(google, apple) {
    console.log("Detecting!");
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        window.location.href = google;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = apple;
    }
}