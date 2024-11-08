import React, { useState } from 'react';
import axios from 'axios';

function WeatherSearch({ setWeatherData }) {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: process.env.REACT_APP_WEATHER_API_KEY,
            units: 'metric'
          }
        }
      );
      setWeatherData(response.data);
    } catch (err) {
      console.error('API Error:', err);
      setError('Error fetching weather data: ' + err.message);
    }
    
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default WeatherSearch;