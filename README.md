# Weather Dashboard

A simple weather dashboard built with React to display the current weather and a 5-day forecast for a given city. The app uses the OpenWeatherMap API to fetch weather data and allows users to search for cities, view weather information, and manage favorite cities.

## Features

- **Search Functionality**: Search for a city and display current weather and a 5-day forecast.
- **Favorites**: Add cities to a list of favorites and view their weather data.
- **Unit Toggle**: Toggle between Celsius and Fahrenheit units for temperature display.
- **Error Handling**: Handle errors if the city is not found or the weather data cannot be fetched.
- **Local Storage**: The app stores the last searched city in local storage.
- **JSON Server Integration**: A mock server to manage favorite cities with CRUD operations.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Set up JSON Server (for managing favorites)

In a new terminal window, navigate to the project directory and run the JSON server:

```bash
npm run server
```

This will start a mock server on `http://localhost:3001` using the `db.json` file to store favorite cities.

### 4. Run the React Application

Now, start the React development server:

```bash
npm start
```

This will start the app on `http://localhost:3000`.

## API Endpoints

### OpenWeatherMap API

To fetch weather data from OpenWeatherMap, you need an API key. Here's how to get it:

### How to Get an OpenWeatherMap API Key:

1. Visit the OpenWeatherMap website: [https://openweathermap.org/](https://openweathermap.org/).
2. Sign up for a free account if you don't already have one.
3. After logging in, go to the **API keys** section on the [API keys page](https://home.openweathermap.org/api_keys).
4. Create a new API key by clicking the "Generate" button.
5. Copy your newly generated API key.

Once you have the API key, replace `{API_KEY}` in the endpoints below with your actual key.

- **Current Weather**: `GET /weather?q={city}&appid={API_KEY}&units={unit}`
- **5-day Forecast**: `GET /forecast?q={city}&appid={API_KEY}&units={unit}`

### JSON Server

- **Get all favorites**: `GET /favorites`
- **Add a favorite**: `POST /favorites`
- **Remove a favorite**: `DELETE /favorites/{id}`

The `db.json` file contains the structure for storing favorites.

## Folder Structure

```
weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── weatherApi.js
│   │   └── jsonServerApi.js
│   ├── components/
│   │   ├── Favorites.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherDisplay.jsx
│   │   └── MainDashboard.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── index.js
└── db.json
```

## Technologies Used

- **React**: Frontend JavaScript library for building the user interface.
- **Axios**: HTTP client for making requests to the OpenWeatherMap API and the JSON server.
- **JSON Server**: A mock REST API for managing favorite cities.
- **OpenWeatherMap API**: Provides weather data for cities.

## Future Enhancements

- Add more detailed weather data (e.g., humidity, wind speed, etc.).
- Implement geolocation to automatically fetch the weather for the user's location.
- Improve error handling and provide user-friendly messages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify and enhance the project as needed! 😊
