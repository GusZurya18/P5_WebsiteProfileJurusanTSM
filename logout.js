function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

// Get the modal
var modal = document.getElementById("logout-modal");
var buttonLogin = document.getElementById("loginbutt");

// Get the button that opens the modal
var logoutLink = document.getElementById("logout-link");

// Get the confirm and cancel buttons
var confirmLogout = document.getElementById("confirm-logout");
var cancelLogout = document.getElementById("cancel-logout");

// When the user clicks on the logout link, open the modal
logoutLink.onclick = function (event) {
    setCookie("isLogin", "", 7);
    event.preventDefault(); // Prevent the default action (navigation)
    modal.style.display = "block"; // Show the modal
}

// When the user clicks on the cancel button, close the modal
cancelLogout.onclick = function () {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks on the confirm button, redirect to the logout URL
confirmLogout.onclick = function () {
    window.location.href = "../../../login/index.html"; // Replace with your actual logout URL
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

function changeLogin(){
    setCookie("isLogin", "true", 7);
}

document.addEventListener("DOMContentLoaded", function(e) {
    var url = window.location.pathname
    if(!url.includes("login") && !url.includes("register") && getCookie("isLogin") == "") return window.location.replace("/login")
});



