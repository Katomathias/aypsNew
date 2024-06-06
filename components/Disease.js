// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, Button, ImageBackground } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';

// const Disease = () => {
//   const [result, setResult] = useState('');
//   const [pickedImage, setPickedImage] = useState('');

//   // Function to call the image picker and enable the user to choose an image for classification
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setPickedImage(result.uri);
//       classifyImage(result.uri);
//     }
//   };

//   // Function to classify the selected image using the Django backend
//   const classifyImage = async (imageUri) => {
//     try {
//       const imageData = await FileSystem.readAsStringAsync(imageUri, {
//         encoding: FileSystem.EncodingType.Base64,
//       });

//       const formData = new FormData();
//       formData.append('image', {
//         uri: imageUri,
//         name: 'photo.jpg',
//         type: 'image/jpeg',
//       });

//       const response = await fetch('http://127.0.0.1:8000/api/predict/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         body: formData,
//       });

//       const data = await response.json();
//       setResult(data.result);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <ImageBackground source={require('../assets/wall1.jpg')} style={styles.backgroundImage}>
//     <View
//       style={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       {/* Show the picked image */}
//       <Image
//         source={{ uri: pickedImage }}
//         style={{ width: 200, height: 200, margin: 40 }}
//       />
//       {/* Show a button to open the image picker */}
//       <Button
//         title="Pick an image"
//         onPress={pickImage}
//       />
//       <View style={{ width: '100%', height: 20 }} />
//       {/* Display the state and result of processing */}
//       {result === '' ? <Text>Pick an image to classify!</Text> : <Text>{result}</Text>}
//     </View>
//     </ImageBackground>
//   );
// };

// export default Disease;


// src/DiseasePrediction.js
import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Picker } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from './services/api';

export default function DiseasePrediction() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [cropType, setCropType] = useState('maize');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.uri);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', {
            uri: selectedImage,
            name: 'photo.jpg',
            type: 'image/jpeg',
        });
        formData.append('crop_type', cropType);

        try {
            const response = await uploadImage(formData);
            setPrediction(response.data.disease);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={cropType}
                style={styles.picker}
                onValueChange={(itemValue) => setCropType(itemValue)}
            >
                <Picker.Item label="Maize" value="maize" />
                <Picker.Item label="Cassava" value="cassava" />
            </Picker>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
            <Button title="Predict Disease" onPress={handleSubmit} />
            {prediction && <Text style={styles.result}>{prediction}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        alignSelf: 'center',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
