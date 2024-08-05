
    let value = document.getElementById("countDown");
    let countdown = 10;

    let counter = setInterval(() => {
        value.innerText = countdown--;

        if (countdown < 0) {
            clearInterval(counter);
            value.innerText = "Happy Independance Day";
        }
    }, 1000);




