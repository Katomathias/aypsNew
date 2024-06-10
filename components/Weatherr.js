

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import * as Location from 'expo-location'; // Importing Expo Location API

const API_KEY = '200925c7f0d3c72962ec4a19e6c4ad30';

const Weatherr = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      fetchWeatherData(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error('Error fetching location: ', error);
      setError('Error fetching location. Please try again later.');
    }
    setLoading(false);
  };

  const fetchWeatherData = async (latitude, longitude) => {
    setLoading(true);
    try {
      // const response = await fetch(
      //   'http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}'
      // );
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      setError('Error fetching weather data. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <ImageBackground source={require('../assets/weather.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.heading}> Current Weather</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>
            Location: {weatherData.name}
          </Text>
          <Text style={styles.weatherText}>
            Description: {weatherData.weather[0].description}
          </Text>
          <Text style={styles.weatherText}>
            Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
          </Text>
          <Text style={styles.weatherText}>
            Humidity: {weatherData.main.humidity}%
          </Text>
          <Text style={styles.weatherText}>
            Pressure: {weatherData.main.pressure} hPa
          </Text>
          <Text style={styles.weatherText}>
            Wind Speed: {weatherData.wind.speed} m/s
          </Text>
          <Text style={styles.weatherText}>
             Visibility: {weatherData.visibility} meters
          </Text>
          <Text style={styles.weatherText}>
            Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
          </Text>
           <Text style={styles.weatherText}>
             Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
          </Text>
          {/* Add more weather details as needed */}

          <Text onPress={() => navigation.navigate('forecast')}  style={[styles.textSign, {
                        color: '#D3F60B'
                    }]}>See Weather Forecast</Text>
        </View>
      )}

      <View>
      <Button 
        title="Go Back"
        onPress={() => navigation.navigate('Explore')}
      />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weatherContainer: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
},
});

export default Weatherr;