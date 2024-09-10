const url = "https://restcountries.com/v3.1/all";

const weatherApiKey = "1aab9de5f9d44d7307bf3bf19359e069"

function fetchCountries() {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            const countriesContainer = document.getElementById("countries");
            result.forEach((country) => {
                // Create a new card element
                const countryCard = document.createElement("div");
                countryCard.className = "card col-lg-4 col-md-4 col-sm-12 me-1";
                countryCard.style.width = "50px";
                countryCard.style.marginBottom = "20px";
                countryCard.style.marginTop = "20px";

                // Set up the inner content of the card
                countryCard.innerHTML = `
                    <h5 class="card-title text-center" style="background-color: black; margin-top: 10px; color: white">${country.name.common}</h5>
                    <img src="${country.flags.svg}" class="card-img-top mt-3" style="height: 200px; object-fit: cover">
                    <div class="card-body">
                        <p class="card-text">Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
                        <p class="card-text">Region: ${country.region}</p>
                        <p class="card-text">Country code: ${country.cca2}</p>
                        <button type="button" class="btn btn-primary weather-btn" data-lat="${country.latlng[0]}" data-lon="${country.latlng[1]}">Click for Weather</button>
                        <div class="weather-info mt-3"></div>
                    </div>
                `;

                // Append the card to the container
                countriesContainer.appendChild(countryCard);
            });

            // Attach event listeners to all weather buttons
            document.querySelectorAll(".weather-btn").forEach((button) => {
                button.addEventListener("click", function () {
                    const lat = this.getAttribute("data-lat");
                    const lon = this.getAttribute("data-lon");
                    fetchWeather(lat, lon, this.parentElement.querySelector(".weather-info"));
                });
            });
        })
        .catch((error) => console.log("Error:", error));
}

function fetchWeather(lat, lon, weatherContainer) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;

    fetch(weatherUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.main && data.weather) {
                const weatherDetails = `
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                weatherContainer.innerHTML = weatherDetails;
            } else {
                weatherContainer.innerHTML = `<p class="text-warning">Weather data not available.</p>`;
            }
        })
        .catch((error) => {
            weatherContainer.innerHTML = `<p class="text-danger">Failed to fetch weather data.</p>`;
            console.log("Error fetching weather data:", error);
        });
}

fetchCountries();
