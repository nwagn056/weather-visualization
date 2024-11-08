//Import React and useState hook for managing component state
import React, { useState } from 'react';
// Import axios for making HTTP requests
import axios from 'axios';

// WeatherSearch component that takes setWeatherData function as a prop
function WeatherSearch({ setWeatherData }) {
  // State variables using useState hook
  const [city, setCity] = useState(''); // Store city input value
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(''); // Store error messages

  // Store error messages
  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Set loading state to true while fetching data
    setLoading(true);
    // Clear any previous errors
    setError('');

    try {
      // Make API request to OpenWeatherMap
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city, // Make API request to OpenWeatherMap
            appid: process.env.REACT_APP_WEATHER_API_KEY, // API key from .env file
            units: 'metric' // Use Celsius for temperature
          }
        }
      );
      // Update parent component with weather data
      setWeatherData(response.data);
    } catch (err) {
      // Log error to console for debugging
      console.error('API Error:', err);
      // Display user-friendly error message
      setError('Error fetching weather data: ' + err.message);
    }
    
    // Set loading back to false after request completes
    setLoading(false);
  };

  return (
    <div>
      {/* Form for city input and submission */}
      <form onSubmit={handleSubmit}>
        {/* Text input for city name */}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
          placeholder="Enter city name"
        />
        {/* Submit button with loading state */}
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Search'} {/* Show loading text while fetching */}
        </button>
      </form>
      {/* Show loading text while fetching */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

// Export component for use in other parts of the application
export default WeatherSearch;