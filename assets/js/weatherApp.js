const stateList = {
  Arizona: "AZ",
  Alabama: "AL",
  Alaska: "AK",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  NewHampshire: "NH",
  NewJersey: "NJ",
  NewMexico: "NM",
  NewYork: "NY",
  NorthCarolina: "NC",
  NorthDakota: "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  RhodeIsland: "RI",
  SouthCarolina: "SC",
  SouthDakota: "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  WestVirginia: "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

const LIMIT = "&limit=1";
const WEATHER_MAP = "&appid=302ff92903c2ba00d278ede0dfef75a9";
const GEO_CODE = "https://api.openweathermap.org/geo/1.0/direct";
const FORECAST_LINK = "https://api.openweathermap.org/data/2.5/forecast";
const UNITS = "&units=imperial";
const COUNT = "&cnt=15";
const STORAGE_KEY = "searchCities";
const DEFAULT_CITY = "Fort Lauderdale, FL";
let searchInfo = [];
let intervalForTime;
let currentCitySearch = "Fort Lauderdale";
let currentCityRegion = "Florida";

// Document Variables
const bodyEl = $("body");
const dropdownButtonEL = $("#dropdownButton");
const currentWeatherTempEl = $("#currentWeatherTemp");
const currentDateEl = $("#currentDate");
const currentTimeEl = $("#currentTime");
const weatherWindow = $("#weatherWindow");
const currentLocation = $("#currentLocation");
const myDropdownEl = $("#myDropdown");
const searchButtonEl = $("#searchButton");
const locationInput = $("#locationInput");
const currentWindSpeed = $("#currentWindSpeed");
const currentHumidity = $("#currentHumidity");

// Clears memory
function ClearMemory() {
  localStorage.setItem(STORAGE_KEY, "");
}

// Save only 10 recent searches to storage
function saveSearchToStorage(searchCity) {
  if (!searchInfo.includes(searchCity)) {
    searchInfo.unshift(searchCity);
    //searchInfo = [searchCity, ...searchInfo];
    if (searchInfo.length > 10) {
      searchInfo.pop();
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(searchInfo));
    myDropdownEl.html("");
    for (let city of searchInfo) {
      addSearchToDropdown(city);
    }
  }
}

// Retreive from storage
function retreiveFromStorage() {
  let storedCities = localStorage.getItem(STORAGE_KEY);
  if (storedCities) {
    searchInfo = JSON.parse(storedCities);
    myDropdownEl.html("");
    for (let city of searchInfo) {
      addSearchToDropdown(city);
    }
  }
  //console.log(searchInfo);
}

// Clears and adds cities to dropdown
function addSearchToDropdown(city) {
  let newButton = $("<button>", {
    class: "content-button",
    "data-location": city,
    text: city,
  });
  myDropdownEl.append(newButton);
}

// Uses OpenWeatherMap to get city based on coords
function getWeather(cityToCall) {
  //let city = cityToCall.name.split(",");
  fetch(
    `${FORECAST_LINK}?lat=${cityToCall.lat}&lon=${cityToCall.long}${WEATHER_MAP}${UNITS}`
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Status Code: ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      if (data.cod == 200) {
        //console.log("Data: ", data);
        loadLocalWeatherMap(data);
        saveSearchToStorage(currentCitySearch);
      }
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
    });
}

// Loads the local weather into the  current temp display
function loadLocalWeatherMap(forecastMap) {
  if (forecastMap) {
    const weatherCheck = checkCurrentWeather(
      forecastMap.list[0].weather[0].main.toLowerCase()
    );
    bodyEl.css("background-image", `url(${weatherCheck})`);
    currentLocation.text(
      `${currentCitySearch}, ${
        stateList[currentCityRegion]
          ? `${stateList[currentCityRegion]}`
          : `${currentCityRegion}`
      }`
    );
    currentWeatherTempEl.html(
      `${Math.round(forecastMap.list[0].main.temp)}&deg;F`
    );
    currentWindSpeed.text(
      `Wind: ${Math.round(forecastMap.list[0].wind.speed)} mph`
    );
    currentHumidity.text(
      `Humidity: ${Math.round(forecastMap.list[0].main.humidity)}%`
    );

    let forecastFive = getForecastData(forecastMap.list);

    weatherWindow.html("");
    for (let daily of forecastFive) {
      const dayBox = returnForecastBox(daily);
      weatherWindow.append(dayBox);
    }
  }
}

// Checks current weather and returns image
function checkCurrentWeather(weatherCheck) {
  if (weatherCheck.includes("clear") || weatherCheck.includes("sunny")) {
    return "assets/images/sunnyDay.jpg";
  } else if (
    weatherCheck.includes("thunderstorm") ||
    weatherCheck.includes("thunder")
  ) {
    return "assets/images/thunderstorm.jpg";
  } else if (
    weatherCheck.includes("rain") ||
    weatherCheck.includes("mist") ||
    weatherCheck.includes("drizzle")
  ) {
    return "assets/images/rainyDay.jpg";
  } else if (
    weatherCheck.includes("cloud") ||
    weatherCheck.includes("overcast") ||
    weatherCheck.includes("fog")
  ) {
    return "assets/images/partlySunny.jpg";
  } else if (
    weatherCheck.includes("snow") ||
    weatherCheck.includes("ice") ||
    weatherCheck.includes("sleet") ||
    weatherCheck.includes("freezing")
  ) {
    return "assets/images/SnowyDay.jpg";
  } else {
    return "assets/images/partlySunny.jpg";
  }
}

// Sift through data and return a dictionary with highs, lows and info
function getForecastData(forecastData) {
  const dateFormat = "M-D-YYYY H:00";

  // Go through and find the next days lows and highs
  let fiveDayForecast = [];

  for (i = 0; i < 5; i++) {
    let todaysAM = dayjs()
      .add(1, "day")
      .startOf("day")
      .add(i, "day")
      .format(dateFormat);
    let todaysPM = dayjs(todaysAM).add(12, "hour").format(dateFormat);
    let highTemp = -100;
    let lowTemp = 100;
    let windForecast = 0;
    let humidityForecast = 0;
    let dayOfWeek = dayjs(todaysPM).format("dddd");
    let icon = "02d";

    // Go through each array object and find highs and lows
    forecastData.forEach((element) => {
      let forecastToCheck = dayjs(element.dt_txt).format(dateFormat);
      if (forecastToCheck == todaysPM) {
        icon = element.weather[0].icon.replace("n", "d");
      }
      let tommorowCheck = dayjs(todaysAM).format("M-D-YYYY");
      if (tommorowCheck == dayjs(element.dt_txt).format("M-D-YYYY")) {
        if (Math.floor(element.main.temp_min) < lowTemp) {
          lowTemp = Math.floor(element.main.temp_min);
        }
        if (Math.ceil(element.main.temp_max) > highTemp) {
          highTemp = Math.ceil(element.main.temp_max);
        }
        if (Math.ceil(element.wind.speed) > windForecast) {
          windForecast = Math.ceil(element.wind.speed);
        }
        if (Math.ceil(element.main.humidity) > windForecast) {
          humidityForecast = Math.ceil(element.main.humidity);
        }
      }
    });

    fiveDayForecast[i] = {
      day: dayOfWeek,
      high: highTemp > lowTemp ? highTemp : lowTemp,
      low: lowTemp < highTemp ? lowTemp : highTemp,
      wind: windForecast,
      humidity: humidityForecast,
      icon: icon,
    };
  }
  //console.log("Forecast Data: ", fiveDayForecast);
  return fiveDayForecast;
}

// Fetches the geo code of the entered city
function fetchGeoCode(cityName) {
  fetch(`${GEO_CODE}?q=${encodeURIComponent(cityName)}${LIMIT}${WEATHER_MAP}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Status Code: ${response.status}`);
      }
      return response.json();
    })
    .then(function (data) {
      //console.log("Geo data: ", data[0]);
      let cityInfo = {
        lat: data[0].lat,
        long: data[0].lon,
        name: data[0].name,
        state: data[0].state,
      };

      currentCitySearch = data[0].name;
      currentCityRegion = data[0].state;

      //console.log(cityInfo);

      getWeather(cityInfo);
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
    });
}

// Returns a weather forecast box
function returnForecastBox(forecast) {
  return `
          <div class="weather-info">
            <h4 class="forecast-day">${forecast.day}</h4>
            <img
              src="https://openweathermap.org/img/wn/${forecast.icon}@2x.png"
              width="100px"
              alt="weather icon"
            />
            <span id="temp-high" class="temp-forecast">${forecast.high}&deg;F</span>
            <hr width="60%" style="padding: 0; margin: 0" />
            <span id="temp-low" class="temp-forecast">${forecast.low}&deg;F</span>
            <div class="wind-and-humidity">
              <div>Wind: ${forecast.wind} mph</div>
              <div>Humidity: ${forecast.humidity}%</div>
            </div>
          </div>`;
}

// Runs a set interval for the clock and the date
function startClockAndDate() {
  currentTimeEl.text(dayjs().format("h:mm a"));
  currentDateEl.text(dayjs().format("dddd MMMM D, YYYY"));
  intervalForTime = setInterval(function () {
    currentTimeEl.text(dayjs().format("h:mm a"));
    currentDateEl.text(dayjs().format("dddd MMMM D, YYYY"));
  }, 1000);
}

// Dropdown Function
function dropdownMenu(event) {
  const dropdownItems = $("#myDropdown");
  dropdownItems.toggleClass("show");
}

// Function get location data from quick links
function getLocationDataFromQuickLinks(event) {
  const targetButton = $(event.target);
  if (currentCitySearch != targetButton.data("location")) {
    fetchGeoCode(targetButton.data("location"));
  }
}

// Adds event to listen for quick links press
$(document).on("click", ".content-button", function (event) {
  getLocationDataFromQuickLinks(event);
});

// Adds event listener to search button
searchButtonEl.on("click", function (event) {
  let cityToSearch = locationInput.val().trim().split(",")[0];
  if (cityToSearch) {
    fetchGeoCode(cityToSearch);
  }

  locationInput.val("");
});

// dropdown Button click
dropdownButtonEL.on("click", dropdownMenu);

// window click cancels dropdown button showing
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// clear interval when window loses focus
$(window).on({
  blur: function () {
    clearInterval(intervalForTime);
  },
  focus: function () {
    startClockAndDate();
  },
});

// Starts the application methods
function startApplication() {
  //ClearMemory();
  retreiveFromStorage();
  if (searchInfo.length > 0) {
    if (currentLocation.text() != searchInfo[0]) {
      fetchGeoCode(searchInfo[0]);
    }
  } else {
    fetchGeoCode(currentCitySearch);
  }
  startClockAndDate();
}

startApplication();
