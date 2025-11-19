const GEO_DEFAULT = {
  0: { name: "London" },
  country: "GB",
  lat: 51.5073219,
  local_names: {
    fr: "Londres",
    tl: "Londres",
    km: "ឡុងដ៍",
    qu: "London",
    ms: "London",
    mt: "Londra",
    am: "ለንደን",
  },
  lon: -0.1276474,
  name: "London",
  state: "England",
};

let FORECAST = {
  location: {
    name: "Fort Lauderdale",
    region: "Florida",
    country: "United States of America",
    lat: 26.1219,
    lon: -80.1436,
    tz_id: "America/New_York",
    localtime_epoch: 1763508826,
    localtime: "2025-11-18 18:33",
  },
  current: {
    last_updated_epoch: 1763508600,
    last_updated: "2025-11-18 18:30",
    temp_c: 25.2,
    temp_f: 77.4,
    is_day: 0,
    condition: {
      text: "Clear",
      icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
      code: 1000,
    },
    wind_mph: 11.6,
    wind_kph: 18.7,
    wind_degree: 57,
    wind_dir: "ENE",
    pressure_mb: 1019.0,
    pressure_in: 30.08,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 66,
    cloud: 25,
    feelslike_c: 26.4,
    feelslike_f: 79.4,
    windchill_c: 26.1,
    windchill_f: 79.0,
    heatindex_c: 27.6,
    heatindex_f: 81.6,
    dewpoint_c: 17.9,
    dewpoint_f: 64.2,
    vis_km: 16.0,
    vis_miles: 9.0,
    uv: 0.0,
    gust_mph: 14.6,
    gust_kph: 23.5,
    short_rad: 0,
    diff_rad: 0,
    dni: 0,
    gti: 0,
  },
  forecast: {
    forecastday: [
      {
        date: "2025-11-18",
        date_epoch: 1763424000,
        day: {
          maxtemp_c: 30.3,
          maxtemp_f: 86.5,
          mintemp_c: 17.1,
          mintemp_f: 62.8,
          avgtemp_c: 23.3,
          avgtemp_f: 73.9,
          maxwind_mph: 11.9,
          maxwind_kph: 19.1,
          totalprecip_mm: 0.12,
          totalprecip_in: 0.0,
          totalsnow_cm: 0.0,
          avgvis_km: 10.0,
          avgvis_miles: 6.0,
          avghumidity: 70,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 56,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 1.2,
        },
        astro: {
          sunrise: "06:41 AM",
          sunset: "05:30 PM",
          moonrise: "05:16 AM",
          moonset: "04:19 PM",
          moon_phase: "Waning Crescent",
          moon_illumination: 5,
          is_moon_up: 0,
          is_sun_up: 0,
        },
      },
      {
        date: "2025-11-19",
        date_epoch: 1763510400,
        day: {
          maxtemp_c: 29.6,
          maxtemp_f: 85.3,
          mintemp_c: 22.4,
          mintemp_f: 72.3,
          avgtemp_c: 24.9,
          avgtemp_f: 76.9,
          maxwind_mph: 15.0,
          maxwind_kph: 24.1,
          totalprecip_mm: 0.0,
          totalprecip_in: 0.0,
          totalsnow_cm: 0.0,
          avgvis_km: 10.0,
          avgvis_miles: 6.0,
          avghumidity: 73,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Partly Cloudy ",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            code: 1003,
          },
          uv: 1.2,
        },
        astro: {
          sunrise: "06:42 AM",
          sunset: "05:30 PM",
          moonrise: "06:10 AM",
          moonset: "04:55 PM",
          moon_phase: "Waning Crescent",
          moon_illumination: 2,
          is_moon_up: 0,
          is_sun_up: 0,
        },
      },
      {
        date: "2025-11-20",
        date_epoch: 1763596800,
        day: {
          maxtemp_c: 28.2,
          maxtemp_f: 82.8,
          mintemp_c: 21.9,
          mintemp_f: 71.4,
          avgtemp_c: 24.5,
          avgtemp_f: 76.2,
          maxwind_mph: 11.6,
          maxwind_kph: 18.7,
          totalprecip_mm: 0.0,
          totalprecip_in: 0.0,
          totalsnow_cm: 0.0,
          avgvis_km: 10.0,
          avgvis_miles: 6.0,
          avghumidity: 69,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Cloudy ",
            icon: "//cdn.weatherapi.com/weather/64x64/day/119.png",
            code: 1006,
          },
          uv: 1.2,
        },
        astro: {
          sunrise: "06:43 AM",
          sunset: "05:30 PM",
          moonrise: "07:05 AM",
          moonset: "05:36 PM",
          moon_phase: "New Moon",
          moon_illumination: 0,
          is_moon_up: 0,
          is_sun_up: 0,
        },
      },
      {
        date: "2025-11-21",
        date_epoch: 1763683200,
        day: {
          maxtemp_c: 27.4,
          maxtemp_f: 81.3,
          mintemp_c: 24.4,
          mintemp_f: 75.8,
          avgtemp_c: 25.6,
          avgtemp_f: 78.0,
          maxwind_mph: 11.4,
          maxwind_kph: 18.4,
          totalprecip_mm: 0.32,
          totalprecip_in: 0.01,
          totalsnow_cm: 0.0,
          avgvis_km: 10.0,
          avgvis_miles: 6.0,
          avghumidity: 66,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 87,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 1.2,
        },
        astro: {
          sunrise: "06:44 AM",
          sunset: "05:29 PM",
          moonrise: "08:01 AM",
          moonset: "06:22 PM",
          moon_phase: "Waxing Crescent",
          moon_illumination: 1,
          is_moon_up: 0,
          is_sun_up: 0,
        },
      },
      {
        date: "2025-11-22",
        date_epoch: 1763769600,
        day: {
          maxtemp_c: 26.4,
          maxtemp_f: 79.5,
          mintemp_c: 23.1,
          mintemp_f: 73.6,
          avgtemp_c: 24.6,
          avgtemp_f: 76.3,
          maxwind_mph: 9.6,
          maxwind_kph: 15.5,
          totalprecip_mm: 1.79,
          totalprecip_in: 0.07,
          totalsnow_cm: 0.0,
          avgvis_km: 9.9,
          avgvis_miles: 6.0,
          avghumidity: 70,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 81,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 0.0,
        },
        astro: {
          sunrise: "06:44 AM",
          sunset: "05:29 PM",
          moonrise: "08:55 AM",
          moonset: "07:13 PM",
          moon_phase: "Waxing Crescent",
          moon_illumination: 3,
          is_moon_up: 0,
          is_sun_up: 0,
        },
      },
    ],
  },
};

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
// https://api.openweathermap.org/geo/1.0/direct?q=Miami&limit=1&appid=302ff92903c2ba00d278ede0dfef75a9
// https://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=302ff92903c2ba00d278ede0dfef75a9&units=imperial
const GEO_CITY = "q=London";
const LIMIT = "&limit=1";
const WEATHER_MAP = "&appid=302ff92903c2ba00d278ede0dfef75a9";
const GEO_CODE = "http://api.openweathermap.org/geo/1.0/direct";
const WEATHER_LINK = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_LINK = "https://api.openweathermap.org/data/2.5/forecast";
const UNITS = "&units=imperial";
const COUNT = "&cnt=15";
const WEATHER_ICON_LINK = "https://openweathermap.org/img/wn/10d@2x.png";

// "lat": 51.5073219,
//     "lon": -0.1276474,

const WEATHER_FORECAST = "http://api.weatherapi.com/v1/forecast.json";
const WEATHER_API = "&key=6fa45def5f924faba18122047251611";
const WEATHER_CITY = "q=FORT+LAUDERDALE,FL";
const WEATHER_DAYS = "&days=5";
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

// Fetches the weather based on geo codes coords
// function fetchWeather(cityToFetch) {
//   fetch(
//     WEATHER_FORECAST +
//       "?q=" +
//       encodeURIComponent(cityToFetch) +
//       WEATHER_API +
//       WEATHER_DAYS
//   )
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         return "";
//       }
//     })
//     .then(function (data) {
//       if (data) {
//         //console.log("Data: ", data);
//         loadLocalWeather(
//           data,
//           data.forecast.forecastday[0].astro.sunrise,
//           data.forecast.forecastday[0].astro.sunset
//         );

//         saveSearchToStorage(
//           `${data.location.name}, ${
//             stateList[data.location.region.replace(/ /g, "")]
//               ? `${stateList[data.location.region.replace(/ /g, "")]}`
//               : `${data.location.region}`
//           }`
//         );
//       }
//     })
//     .catch(function (error) {
//       console.log(`Error: ${error}`);
//     });
// }

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
      console.log("Data: ", data);
      loadLocalWeatherMap(data);
      saveSearchToStorage(currentCitySearch);
    })
    .catch(function (error) {
      console.log(`Error: ${error}`);
    });
}

// Loads the local weather into the  current temp display
function loadLocalWeatherMap(forecastMap) {
  if (forecastMap) {
    const currentHour = parseInt(dayjs().format("H"));
    if (currentHour < 6 || currentHour > 21) {
      bodyEl.css("background-image", 'url("assets/images/moon.jpg")');
    } else {
      // console.log(
      //   "Condition: ",
      //   forecastMap.current.condition.text.toLowerCase()
      // );
      const weatherCheck = checkCurrentWeather(
        forecastMap.list[0].weather[0].main.toLowerCase()
      );
      bodyEl.css("background-image", `url(${weatherCheck})`);
    }
    // let locationRegion = forecastMap.location.region.split(",");
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

    getForecastData(forecastMap.list);
    //console.log(Math.round(forecastMap.current.temp_f));

    // weatherWindow.html("");
    // let forecastDaily = forecastMap.forecast.forecastday;
    // for (let day of forecastDaily) {
    //   const dayBox = returnForecastBox(day);
    //   weatherWindow.append(dayBox);
    // }
  }
}

// Loads the local weather into the  current temp display
// function loadLocalWeather(forecastMap, localSunrise, localSunset) {
//   if (forecastMap) {
//     const currentHour = parseInt(dayjs().format("H"));
//     const sunrise = parseInt(
//       dayjs(`${dayjs().format("YYYY-MM-DD")} ${localSunrise}`).format("H")
//     );
//     const sunset = parseInt(
//       dayjs(`${dayjs().format("YYYY-MM-DD")} ${localSunset}`).format("H")
//     );
//     if (currentHour > sunset || currentHour < sunrise) {
//       bodyEl.css("background-image", 'url("assets/images/moon.jpg")');
//     } else {
//       // console.log(
//       //   "Condition: ",
//       //   forecastMap.current.condition.text.toLowerCase()
//       // );
//       const weatherCheck = checkCurrentWeather(
//         forecastMap.current.condition.text.toLowerCase()
//       );
//       bodyEl.css("background-image", `url(${weatherCheck})`);
//     }
//     let locationRegion = forecastMap.location.region.split(",");
//     currentLocation.text(
//       `${forecastMap.location.name}, ${
//         stateList[forecastMap.location.region.replace(/ /g, "")]
//           ? `${stateList[forecastMap.location.region.replace(/ /g, "")]}`
//           : `${locationRegion[0]}`
//       }`
//     );
//     currentWeatherTempEl.html(
//       `${Math.round(forecastMap.current.temp_f)}&deg;F`
//     );
//     currentWindSpeed.text(
//       `Wind: ${Math.round(forecastMap.current.wind_mph)} mph`
//     );
//     currentHumidity.text(
//       `Humidity: ${Math.round(forecastMap.current.humidity)}%`
//     );
//     //console.log(Math.round(forecastMap.current.temp_f));

//     weatherWindow.html("");
//     let forecastDaily = forecastMap.forecast.forecastday;
//     for (let day of forecastDaily) {
//       const dayBox = returnForecastBox(day);
//       weatherWindow.append(dayBox);
//     }
//   }
// }

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

// Loads the 5 day forecast
// function loadFiveDayForecast(forecastMap) {
//   if (forecastMap) {
//     weatherWindow.html("");
//     let forecastDaily = forecastMap.forecastday;
//     for (let day of forecastDaily) {
//       const dayBox = returnForecastBox(day);
//       weatherWindow.append(dayBox);
//     }
//     // weatherWindow
//   }
// }

// Sift through data and return a dictionary with highs, lows and info
function getForecastData(forecastData) {
  // Go through and find the next days lows and highs
  console.log("Forecast Data: ", forecastData);
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
            <h4 class="forecast-day">${dayjs(forecast.date).format("dddd")}</h4>
            <img
              src="https:${forecast.day.condition.icon}"
              width="100px"
              alt="weather icon"
            />
            <span id="temp-high" class="temp-forecast">${Math.round(
              forecast.day.maxtemp_f
            )}&deg;F</span>
            <hr width="60%" style="padding: 0; margin: 0" />
            <span id="temp-low" class="temp-forecast">${Math.round(
              forecast.day.mintemp_f
            )}&deg;F</span>
            <div class="wind-and-humidity">
              <div>Wind: ${Math.round(forecast.day.maxwind_mph)} mph</div>
              <div>Humidity: ${Math.round(forecast.day.avghumidity)}%</div>
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
    //fetchWeather(targetButton.data("location"));
    fetchGeoCode(targetButton.data("location"));
  }
  //console.log(targetButton.data("location"));
}

// Adds event to listen for quick links press
$(document).on("click", ".content-button", function (event) {
  getLocationDataFromQuickLinks(event);
});

// Adds event listener to search button
searchButtonEl.on("click", function (event) {
  let cityToSearch = locationInput.val().trim();
  if (cityToSearch) {
    //fetchWeather(cityToSearch);
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
      //fetchWeather(searchInfo[0]);
      fetchGeoCode(searchInfo[0]);
    }
  } else {
    //fetchWeather(DEFAULT_CITY);
    fetchGeoCode(currentCitySearch);
  }
  startClockAndDate();
}

startApplication();
