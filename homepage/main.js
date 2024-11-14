//stats
document.addEventListener("DOMContentLoaded", function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target'); // Get the target number
        const duration = 3000; // Duration in milliseconds
        const incrementTime = Math.floor(duration / target); // Time per increment
        let current = 0;

        const updateNumber = () => {
            if (current < target) {
                current++;
                stat.textContent = current; // Update the displayed number
                setTimeout(updateNumber, incrementTime);
            } else {
                stat.textContent = target === 30 ? '30+' : target;  // Set final value
            }
        };

        updateNumber(); // Start the animation
    });
});

//date

// Set the date we're counting down to
const countdownDate = new Date("November 20, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is finished, display some message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".agenda-detail").innerHTML = "<h2>Agenda has started!</h2>";
    }
}, 1000);
window.onload = () => {
    if (window.location.href != "/") {
        history.replaceState(null, "", window.location.href);
        history.pushState(null, "", window.location.href);

        window.onpopstate = function () {
            history.go(1);
        };
    } 
}
