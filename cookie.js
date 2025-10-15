let popUp = document.getElementById("cookiePopup");

document.getElementById("acceptCookie").addEventListener("click", () => {
    let d = new Date();
    d.setTime(d.getTime() + (2 * 60 * 1000)); // 2 minutes
    document.cookie = "CookieUser=true; expires=" + d.toUTCString() + "; path=/";
    
    popUp.classList.add("hidecookie");
    popUp.classList.remove("showcookie");
});

document.getElementById("rejectCookie").addEventListener("click", () => {
    popUp.classList.add("hidecookie");
    popUp.classList.remove("showcookie");
});

const checkCookie = () => {
    if (document.cookie.split(';').some(cookie => cookie.trim().startsWith("CookieUser="))) {
        popUp.classList.add("hidecookie");
        popUp.classList.remove("showcookie");
    } else {
        popUp.classList.add("showcookie");
        popUp.classList.remove("hidecookie");
    }
};

window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};
