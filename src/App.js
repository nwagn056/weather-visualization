import React, { useState } from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherChart from './components/WeatherChart';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <WeatherSearch setWeatherData={setWeatherData} />
      {weatherData && <WeatherChart data={weatherData} />}
    </div>
  );
}

export default App;
