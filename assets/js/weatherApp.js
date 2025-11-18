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

const WEATHER_DEFAULT = {
  coord: {
    lon: -0.1278,
    lat: 51.5074,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 37.36,
    feels_like: 31.35,
    temp_min: 34.95,
    temp_max: 39.15,
    pressure: 1020,
    humidity: 87,
    sea_level: 1020,
    grnd_level: 1015,
  },
  visibility: 10000,
  wind: {
    speed: 8.05,
    deg: 230,
  },
  clouds: {
    all: 40,
  },
  dt: 1763459183,
  sys: {
    type: 2,
    id: 2075535,
    country: "GB",
    sunrise: 1763450632,
    sunset: 1763482069,
  },
  timezone: 0,
  id: 2643743,
  name: "London",
  cod: 200,
};

const FORECAST = {
  cod: "200",
  message: 0,
  cnt: 3,
  list: [
    {
      dt: 1763467200,
      main: {
        temp: 38.88,
        feels_like: 32.45,
        temp_min: 38.88,
        temp_max: 41.31,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1013,
        humidity: 82,
        temp_kf: -1.35,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 9.57,
        deg: 241,
        gust: 18.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-11-18 12:00:00",
    },
    {
      dt: 1763478000,
      main: {
        temp: 41.02,
        feels_like: 35.83,
        temp_min: 41.02,
        temp_max: 42.71,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1010,
        humidity: 77,
        temp_kf: -0.94,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 7.99,
        deg: 249,
        gust: 15.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2025-11-18 15:00:00",
    },
    {
      dt: 1763488800,
      main: {
        temp: 40.6,
        feels_like: 34.97,
        temp_min: 40.6,
        temp_max: 40.6,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 8.72,
        deg: 242,
        gust: 21.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2025-11-18 18:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lat: 51.5073,
      lon: -0.1276,
    },
    country: "GB",
    population: 1000000,
    timezone: 0,
    sunrise: 1763450632,
    sunset: 1763482069,
  },
};

const GEO_CITY = "q=London";
const LIMIT = "&limit=1";
const WEATHER_MAP = "&appid=302ff92903c2ba00d278ede0dfef75a9";
const GEO_CODE = "http://api.openweathermap.org/geo/1.0/direct";
const WEATHER_LINK = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_LINK = "https://api.openweathermap.org/data/2.5/forecast";
const UNITS = "&units=imperial";
const COUNT = "&cnt=5";
const WEATHER_ICON_LINK = "https://openweathermap.org/img/wn/10d@2x.png";

// Document Variables
const dropdownButton = $("#dropdownButton");

// Fetches the geo code of the entered city
function fetchGeoCode(cityName) {
  fetch(GEO_CODE + "?" + GEO_CITY + LIMIT + WEATHER_MAP)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

// Fetches the weather based on geo codes coords
function fetchWeather() {
  fetch(
    FORECAST_LINK +
      "?" +
      "lat=" +
      GEO_DEFAULT.lat +
      "&lon=" +
      GEO_DEFAULT.lon +
      WEATHER_MAP +
      UNITS +
      COUNT
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

console.log(FORECAST);

// Dropdown Function
function dropdownMenu(event) {
  const dropdownItems = $("#myDropdown");
  dropdownItems.toggleClass("show");
}

// Function get location data from quick links
function getLocationDataFromQuickLinks(event) {
  const targetButton = $(event.target);

  console.log(targetButton.data("location"));
}

// Adds event to listen for quick links press
$(document).on("click", ".content-button", function (event) {
  getLocationDataFromQuickLinks(event);
});

// dropdown Button click
dropdownButton.on("click", dropdownMenu);

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
