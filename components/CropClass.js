

// // src/CropPrediction.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { sendSensorData } from './services/api';

// export default function CropPrediction() {
//     const [nitrogen, setNitrogen] = useState('');
//     const [phosphorus, setPhosphorus] = useState('');
//     const [potassium, setPotassium] = useState('');
//     const [pH, setPH] = useState('');
//     const [electroconductivity, setElectroconductivity] = useState('');
//     const [moisture, setMoisture] = useState('');
//     const [prediction, setPrediction] = useState(null);

//     const handleSubmit = async () => {
//         const data = {
//             nitrogen: parseFloat(nitrogen),
//             phosphorus: parseFloat(phosphorus),
//             potassium: parseFloat(potassium),
//             pH: parseFloat(pH),
//             electroconductivity: parseFloat(electroconductivity),
//             moisture: parseFloat(moisture),
//         };

//         try {
//             const response = await sendSensorData(data);
//             setPrediction(response.data.prediction);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Nitrogen"
//                 value={nitrogen}
//                 onChangeText={setNitrogen}
//                 keyboardType="numeric"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Phosphorus"
//                 value={phosphorus}
//                 onChangeText={setPhosphorus}
//                 keyboardType="numeric"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Potassium"
//                 value={potassium}
//                 onChangeText={setPotassium}
//                 keyboardType="numeric"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="pH"
//                 value={pH}
//                 onChangeText={setPH}
//                 keyboardType="numeric"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Electroconductivity"
//                 value={electroconductivity}
//                 onChangeText={setElectroconductivity}
//                 keyboardType="numeric"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Moisture"
//                 value={moisture}
//                 onChangeText={setMoisture}
//                 keyboardType="numeric"
//             />
//             <Button title="Predict Crop" onPress={handleSubmit} />
//             {prediction && <Text style={styles.result}>Best Crop: {prediction}</Text>}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
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
// });


// components/SensorData.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , ScrollView, Image, ImageBackground} from 'react-native';
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

  return (
    
     
    <ImageBackground source={require('../assets/crop.jpg')} style={styles.backgroundImage}>
      
    <View style={styles.container}>
    <ScrollView>
    <Image source={require('../assets/farmer.jpg')} style={styles.logo}/>
      {Object.keys(sensorData).map((key) => (
        <TextInput 
          key={key}
          placeholder={key}
          value={sensorData[key]}
          onChangeText={(value) => handleChange(key, value)}
          keyboardType="numeric"
          style={{ marginBottom: 10, borderBottomWidth: 1 ,color: 'red' }}
        />
      ))}
      <Button title="Predict Crop" onPress={handleSubmit} />
      {prediction && <Text style={{ marginBottom: 10, borderBottomWidth: 1 ,color: 'black', fontSize: 22, }}>Prediction: {prediction}</Text>}
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
      marginBottom: 20,
      justifyContent: 'center',
      padding: 16,
      alignContent: 'center',
      marginTop: 40,
    },
  placeholder : {

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Stretch the image to cover entire container
    justifyContent: 'center',
  },
});

export default CropClass;