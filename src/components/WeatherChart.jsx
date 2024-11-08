// Import necessary dependencies from React and Recharts library
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// WeatherChart component that receives weather data as a prop
function WeatherChart({ data }) {
  // WeatherChart component that receives weather data as a prop
  // Creates an array with a single object containing the weather metrics
  const chartData = [{
    name: data.name, // City name
    temperature: data.main.temp, // Current temperature
    humidity: data.main.humidity, // Current humidity
    feels_like: data.main.feels_like // "Feels like" temperature
  }];

  return (
    <div>
       {/* Display city name in the header */}
      <h2>Weather in {data.name}</h2>
      <div>
        {/* Recharts LineChart component with specified dimensions */}
        <LineChart width={600} height={300} data={chartData}>
          {/* Grid lines for better readability */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* X-axis showing city name */}
          <XAxis dataKey="name" />
          {/* Y-axis for temperature and humidity values */}
          <YAxis />
           {/* Tooltip shows data when hovering over points */}
          <Tooltip />
           {/* Legend shows which line represents what data */}
          <Legend />
          {/* Line for temperature data */}
          <Line 
            type="monotone" // Line style 
            dataKey="temperature" // Data point to plot 
            stroke="#8884d8" // Purple color for temperature 
            name="Temperature (°C)" // Label in legend 
          />
          <Line 
            type="monotone" // Label in legend  
            dataKey="humidity" // Data point to plot 
            stroke="#82ca9d" // Green color for humidity 
            name="Humidity (%)" // Label in legend 
          />
        </LineChart>
      </div>
      
      {/* Display detailed weather information below the chart */}
      <div>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Feels like: {data.main.feels_like}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Weather: {data.weather[0].description}</p>
      </div>
    </div>
  );
}

// Export the component for use in other parts of the application
export default WeatherChart;