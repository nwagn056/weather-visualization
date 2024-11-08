import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function WeatherChart({ data }) {
  const chartData = [{
    name: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    feels_like: data.main.feels_like
  }];

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <div>
        <LineChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="temperature" 
            stroke="#8884d8" 
            name="Temperature (°C)" 
          />
          <Line 
            type="monotone" 
            dataKey="humidity" 
            stroke="#82ca9d" 
            name="Humidity (%)" 
          />
        </LineChart>
      </div>
      
      <div>
        <p>Temperature: {data.main.temp}°C</p>
        <p>Feels like: {data.main.feels_like}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Weather: {data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherChart;