// Defining our variables
var apiKey = '316be47ca42cc673b9c021bb126c8319'
var lat = ''
var lon = ''
var weatherCardsEl = document.getElementById('weather-section')
var searchEl = document.getElementById('search-input')
var citiesList = document.getElementById('cities')
var listCities = []
var searchButtonEl = document.getElementById('search-button')
var currentDayEl = document.querySelector('.current-day')
var currentCityEl = document.getElementById('current-city')

// This displays the Current Date and Day


searchButtonEl.addEventListener("click", getCurrentWeather)

// Gets the 5 day forecast 
function getWeatherFiveDay() {
	var url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchEl.value}&type=like&sort=population&units=metric&appid=${apiKey}`
	
	fetch(url)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)

			// Data for First Day of 5 Day Forecast
			var dateInitial = data.list[3].dt_txt
			var dateSplitOne = dateInitial.split(' ');
			var dateOne = document.getElementById("date-one");
			var tempOne = document.querySelector(".temp-one");
			var windOne = document.querySelector(".wind-one");
			var humidityOne = document.querySelector(".humidity-one");
			var iconInitial = data.list[3].weather[0].icon;
			var iconUrlOne = `https://openweathermap.org/img/w/${iconInitial}.png`
			var iconOne = document.getElementById("icon-one");
			dateOne.innerHTML = dateSplitOne[0];
			iconOne.src = iconUrlOne;
			tempOne.innerHTML = data.list[3].main.temp + "°C," + " " + data.list[3].weather[0].description;
			windOne.innerHTML = data.list[3].wind.speed + "m/s";
			humidityOne.innerHTML = data.list[3].main.humidity + "%";

			// Data for Second Day of 5 Day Forecast
			var dateSecond = data.list[11].dt_txt
			var dateSplitTwo = dateSecond.split(' ');
			var dateTwo = document.getElementById("date-two");
			var tempTwo = document.querySelector(".temp-two");
			var windTwo = document.querySelector(".wind-two");
			var humidityTwo = document.querySelector(".humidity-two");
			var iconSecond = data.list[11].weather[0].icon;
			var iconUrlTwo = `https://openweathermap.org/img/w/${iconSecond}.png`
			var iconTwo = document.getElementById("icon-two");
			dateTwo.innerHTML = dateSplitTwo[0];
			iconTwo.src = iconUrlTwo;
			tempTwo.innerHTML = data.list[11].main.temp + "°C," + " " + data.list[11].weather[0].description;
			windTwo.innerHTML = data.list[11].wind.speed + "m/s";
			humidityTwo.innerHTML = data.list[11].main.humidity + "%";

			// Data for Third Day of 5 Day Forecast
			var dateThird = data.list[19].dt_txt
			var dateSplitThree = dateThird.split(' ');
			var dateThree = document.getElementById("date-three");
			var tempThree = document.querySelector(".temp-three");
			var windThree = document.querySelector(".wind-three");
			var humidityThree = document.querySelector(".humidity-three");
			var iconThird = data.list[19].weather[0].icon;
			var iconUrlThree = `https://openweathermap.org/img/w/${iconThird}.png`
			var iconThree = document.getElementById("icon-three");
			dateThree.innerHTML = dateSplitThree[0];
			iconThree.src = iconUrlThree;
			tempThree.innerHTML = data.list[19].main.temp + "°C," + " " + data.list[19].weather[0].description;
			windThree.innerHTML = data.list[19].wind.speed + "m/s";
			humidityThree.innerHTML = data.list[19].main.humidity + "%";

			// Data for Fourth Day of 5 Day Forecast
			var dateFourth = data.list[27].dt_txt
			var dateSplitFour = dateFourth.split(' ');
			var dateFour = document.getElementById("date-four");
			var tempFour = document.querySelector(".temp-four");
			var windFour = document.querySelector(".wind-four");
			var humidityFour = document.querySelector(".humidity-four");
			var iconFourth = data.list[27].weather[0].icon;
			var iconUrlFour = `https://openweathermap.org/img/w/${iconFourth}.png`
			var iconFour = document.getElementById("icon-four");
			dateFour.innerHTML = dateSplitFour[0];
			iconFour.src = iconUrlFour;
			tempFour.innerHTML = data.list[27].main.temp + "°C," + " " + data.list[27].weather[0].description;
			windFour.innerHTML = data.list[27].wind.speed + "m/s";
			humidityFour.innerHTML = data.list[27].main.humidity + "%";

			// Data for Fifth Day of 5 Day Forecast
			var dateFifth = data.list[35].dt_txt
			var dateSplitFive = dateFifth.split(' ');
			var dateFive = document.getElementById("date-five");
			var tempFive = document.querySelector(".temp-five");
			var windFive = document.querySelector(".wind-five");
			var humidityFive = document.querySelector(".humidity-five");
			var iconFifth = data.list[35].weather[0].icon;
			var iconUrlFive = `https://openweathermap.org/img/w/${iconFifth}.png`
			var iconFive = document.getElementById("icon-five");
			dateFive.innerHTML = dateSplitFive[0];
			iconFive.src = iconUrlFive;
			tempFive.innerHTML = data.list[35].main.temp + "°C," + " " + data.list[35].weather[0].description;
			windFive.innerHTML = data.list[35].wind.speed + "m/s";
			humidityFive.innerHTML = data.list[35].main.humidity + "%";

		})
}

// Gets the current weather
function getCurrentWeather() {
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchEl.value}&type=like&sort=population&units=metric&appid=${apiKey}`;
	weatherCardsEl.classList.remove('hide')

	fetch(url)
		.then( function (response) {
			return response.json()
		})
		.then(function (data) {
			currentCityEl.innerHTML = data.name + " " + "-" + " " + dayjs().format('YY/MM/DD')
			var currentTemp = document.querySelector(".temp-main")
			var currentWind = document.querySelector(".wind-main")
			var currentHumidity = document.querySelector(".humidity-main")
			var icon = data.weather[0].icon
			var weatherIconUrl = `https://openweathermap.org/img/w/${icon}.png`
			var currentIcon = document.getElementById("current-icon")
			currentIcon.src = weatherIconUrl
			currentTemp.innerHTML = data.main.temp + "°C," + " " + data.weather[0].description;
			currentWind.innerHTML = data.wind.speed + "m/s";
			currentHumidity.innerHTML = data.main.humidity + "%";
			getWeatherFiveDay()
			searchHistory(searchEl.value)
		})
}


// Recalls the past city search if it exists.
var pastCities = function() {
    var pastSearches = localStorage.getItem("listCities");

    if (pastSearches) {
        pastSearches = JSON.parse(pastSearches);

        pastSearches.forEach(function(city) {
            var li = document.createElement("li");
            li.textContent = city;
            li.classList.add("list-group-item");
			li.setAttribute("value", city)
            citiesList.appendChild(li);
        });
    }
};

pastCities()

// Recalls & Added Searched Cities
var searchHistory = function(cityName) {
    var previousSavedSearches = localStorage.getItem("listCities");
    var savedSearches = [];
    if (previousSavedSearches) {
        savedSearches = JSON.parse(previousSavedSearches);
    }
    savedSearches.push(cityName);
    localStorage.setItem("listCities", JSON.stringify(savedSearches));
};

// Recall of past city search
citiesList.addEventListener("click", reSearch)

function reSearch() {	
var listEl = document.querySelector(".list-group-item");
var value = listEl.getAttribute("value")
var searchEl = value;

console.log(searchEl)


}
