// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
// import * as Location from 'expo-location'; // Importing Expo Location API
// import { Card } from 'react-native-elements';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const API_KEY = '200925c7f0d3c72962ec4a19e6c4ad30';

// const Forecast = () => {
//   const [location, setLocation] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getLocation();
//   }, []);

//   const getLocation = async () => {
//     setLoading(true);
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setError('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//       fetchWeatherData(location.coords.latitude, location.coords.longitude);
//     } catch (error) {
//       console.error('Error fetching location: ', error);
//       setError('Error fetching location. Please try again later.');
//     }
//     setLoading(false);
//   };

//   const fetchWeatherData = async (latitude, longitude) => {
//     setLoading(true);
//     try {
//       // Fetch current weather data
//       // const currentWeatherResponse = await fetch(
//       //   'http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}'
//       // );
//       const currentWeatherResponse = await fetch(
//         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//       );
//       const currentWeatherData = await currentWeatherResponse.json();

//       // Fetch weather forecast data
//     //   const forecastResponse = await fetch(
//     //     'http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}'
//     // );
//     const forecastResponse = await fetch(
//       `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//     );
//       const forecastData = await forecastResponse.json();

//       if (currentWeatherData.cod === 200 && forecastData.cod === '200') {
//         setWeatherData({ current: currentWeatherData, forecast: forecastData });
//         setError(null);
//       } else {
//         setError(currentWeatherData.message || forecastData.message);
//       }
//     } catch (error) {
//       console.error('Error fetching weather data: ', error);
//       setError('Error fetching weather data. Please try again later.');
//     }
//     setLoading(false);
//   };

//   return (
//     <ImageBackground source={require('../assets/weather.jpg')} style={styles.backgroundImage}>
//       <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Weather Forecast</Text>
//         {loading && <Text>Loading...</Text>}
//         {error && <Text style={styles.error}>{error}</Text>}
//         {weatherData && (
//           <View style={styles.weatherContainer}>
           
//             {/* Display weather forecast */}
//             <Text style={styles.subHeading}>Weather Forecast for Next Few Days</Text>
//             {weatherData.forecast.list.map((forecastItem, index) => (

//             <Card containerStyle={styles.card1}>
              
//               <View key={index}>
//                 <Text style={styles.weatherDate}>
//                   Date: {forecastItem.dt_txt}
//                 </Text>
//                 <Text style={styles.weatherText}>
//                   Description: {forecastItem.weather[0].description}
//                 </Text>
//                 <Text style={styles.weatherText}>
//                   Temperature: {Math.round(forecastItem.main.temp - 273.15)}°C
//                 </Text>  
                    
//                 {/* Add more forecast details */}
//               </View>
//               <FontAwesome 
//                     name="sun-o"
//                     color="#05375a"
//                     size={20}
//                 />
//               </Card>
//             ))}
//           </View>
//         )}
//       </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   subHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   weatherContainer: {
//     marginTop: 20,
//   },
//   weatherText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   weatherDate: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center'
//   },
//   card1: {
//     borderRadius: 10,
//     marginBottom: 16,
//     backgroundColor: '#48764A', // Card background color

//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5
//   },
// });

// export default Forecast;



import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import * as Location from 'expo-location'; // Importing Expo Location API
import { Card } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const API_KEY = '200925c7f0d3c72962ec4a19e6c4ad30';

const Forecast = () => {
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
      // Fetch current weather data
      const currentWeatherResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const currentWeatherData = await currentWeatherResponse.json();

      // Fetch weather forecast data
      const forecastResponse = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const forecastData = await forecastResponse.json();

      if (currentWeatherData.cod === 200 && forecastData.cod === '200') {
        setWeatherData({ current: currentWeatherData, forecast: forecastData });
        setError(null);
      } else {
        setError(currentWeatherData.message || forecastData.message);
      }
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      setError('Error fetching weather data. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <ImageBackground source={require('../assets/weather.jpg')} style={styles.backgroundImage}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Weather Forecast</Text>
          {loading && <Text>Loading...</Text>}
          {error && <Text style={styles.error}>{error}</Text>}
          {weatherData && (
            <View style={styles.weatherContainer}>
              {/* Display weather forecast */}
              <Text style={styles.subHeading}>Weather Forecast for Next Few Days</Text>
              {weatherData.forecast.list.map((forecastItem, index) => (
                <Card containerStyle={styles.card1} key={index}>
                  <View>
                    <Text style={styles.weatherDate}>
                      Date: {forecastItem.dt_txt}
                    </Text>
                    <Text style={styles.weatherText}>
                      Description: {forecastItem.weather[0].description}
                    </Text>
                    <Text style={styles.weatherText}>
                      Temperature: {Math.round(forecastItem.main.temp - 273.15)}°C
                    </Text>  
                    {/* Add more forecast details */}
                  </View>
                  <FontAwesome 
                    name="sun-o"
                    color="#05375a"
                    size={20}
                  />
                </Card>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
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
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  weatherContainer: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 16,
    marginBottom: 10,
  },
  weatherDate: {
    fontSize: 20,
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
  card1: {
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#48764A', // Card background color
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
});

export default Forecast;
