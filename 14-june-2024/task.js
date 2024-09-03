let value = document.getElementById("countDown");
let countdown = 10;

(function updateCountdown() {
    value.innerText = countdown--;

    if (countdown >= 0) {
        setTimeout(function() {
            updateCountdown();
        }, 1000);
    } else {
        value.innerText = "Happy Independence Day";
    }
})();