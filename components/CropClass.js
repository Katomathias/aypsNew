

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet , ScrollView, Image, ImageBackground} from 'react-native';
// import { getSensorData } from './services/api';

// const CropClass = () => {
//   const [sensorData, setSensorData] = useState({
//     nitrogen: '',
//     phosphorus: '',
//     potassium: '',
//     pH: '',
//     electroconductivity: '',
//     moisture: '',
//   });
//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (name, value) => {
//     setSensorData({
//       ...sensorData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async () => {
//     setError(null);
//     try {
//       const result = await getSensorData(sensorData);
//       setPrediction(result.prediction);
//     } catch (error) {
//       setError('Error predicting crop: ' + error.message);
//       console.error('Error predicting crop:', error);
//     }
//   };

//   return (
    
     
//     <ImageBackground source={require('../assets/crop.jpg')} style={styles.backgroundImage}>
      
//     <View style={styles.container}>
//     <ScrollView>
//     <Image source={require('../assets/farmer.jpg')} style={styles.logo}/>
//       {Object.keys(sensorData).map((key) => (
//         <TextInput 
//           key={key}
//           placeholder={key}
//           value={sensorData[key]}
//           onChangeText={(value) => handleChange(key, value)}
//           keyboardType="numeric"
//           style={{ marginBottom: 10, borderBottomWidth: 1 ,color: 'red' }}
//         />
//       ))}
//       <Button title="Predict Crop" onPress={handleSubmit} />
//       {prediction && <Text style={{ marginBottom: 10, borderBottomWidth: 1 ,color: 'black', fontSize: 22, }}>Prediction: {prediction}</Text>}
//       {error && <Text style={{ color: 'red' }}>{error}</Text>}

//       </ScrollView>
//     </View>
    
    

//     </ImageBackground>
//   );
// };



// const styles = StyleSheet.create({
//     container: {
//         flex: 4,
        
//         justifyContent: 'center',
//         padding: 16,
//         alignContent: 'center',
//         flex: 1,
//         backgroundColor: '#D4E6D4', // Semi-transparent overlay
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 12,
//         paddingLeft: 8,
//     },
//     result: {
//         marginTop: 20,
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     logo: {
//       width: 200,
//       height: 200,
//       marginBottom: 20,
//       justifyContent: 'center',
//       padding: 16,
//       alignContent: 'center',
//       marginTop: 40,
//     },
//   placeholder : {

//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Stretch the image to cover entire container
//     justifyContent: 'center',
//   },
// });

// export default CropClass;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { getSensorData } from './services/api';

const CropClass = () => {
  const [sensorData, setSensorData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    pH: '',
    electroconductivity: '',
    moisture: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (name, value) => {
    setSensorData({
      ...sensorData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setError(null);
    try {
      const result = await getSensorData(sensorData);
      setPrediction(result.prediction);
    } catch (error) {
      setError('Error predicting crop: ' + error.message);
      console.error('Error predicting crop:', error);
    }
  };

  const handleReset = () => {
    setSensorData({
      nitrogen: '',
      phosphorus: '',
      potassium: '',
      pH: '',
      electroconductivity: '',
      moisture: '',
    });
    setPrediction(null);
    setError(null);
  };

  return (
    <ImageBackground source={require('../assets/crop.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView>
        <Button title="Refresh" onPress={handleReset} color="#6200ee" />
          <Image source={require('../assets/farmer.jpg')} style={styles.logo} />
          {Object.keys(sensorData).map((key) => (
            <TextInput
              key={key}
              placeholder={key}
              value={sensorData[key]}
              onChangeText={(value) => handleChange(key, value)}
              keyboardType="numeric"
              style={{ marginBottom: 10, borderBottomWidth: 1, color: 'red' }}
            />
          ))}
          <Button title="Predict Crop" onPress={handleSubmit} />
          {prediction && <Text style={{ marginBottom: 10, borderBottomWidth: 1, color: 'black', fontSize: 22 }}>Prediction: {prediction}</Text>}
          {error && <Text style={{ color: 'red' }}>{error}</Text>}
          
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    padding: 16,
    alignContent: 'center',
    flex: 1,
    backgroundColor: '#D4E6D4', // Semi-transparent overlay
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 16,
    alignContent: 'center',
    marginTop: 40,
  },
  placeholder: {},
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Stretch the image to cover entire container
    justifyContent: 'center',
  },
});

export default CropClass;
