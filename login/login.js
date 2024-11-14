window.history.forward();
function noBack(){
  window.history.forward();
}
// Prevent going back to the previous page
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.replaceState(null, null, window.location.href);
};

// Optional: Add logic to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Add your login logic here
});