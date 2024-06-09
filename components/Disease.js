/////////////////////////////////////////////////////////////////28/06/2024

import React, { useState } from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Disease = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (selectedImage) {
      let formData = new FormData();
      formData.append('image', {
        uri: selectedImage,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
      
      console.log('Form Data:', formData);

      try {
        const response = await axios.post('http://192.168.43.5:8000/api/upload-image/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setPrediction(response.data.prediction);
        setError(null); // Clear any previous error
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error('Server Error:', error.response.data);
          setError(`Server Error: ${error.response.data}`);
        } else if (error.request) {
          // Request was made but no response was received
          console.error('Network Error:', error.request);
          setError('Network Error: Please check your connection and try again.');
        } else {
          // Something else caused the error
          console.error('Error:', error.message);
          setError(`Error: ${error.message}`);
        }
      }
    } else {
      setError('Please select an image.');
    }
  };

  const resetState = () => {
    setSelectedImage(null);
    setPrediction(null);
    setError(null);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a photo" onPress={takePhoto} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
      <Button title="Upload Image" onPress={uploadImage} />
      <Button title="Refresh" onPress={resetState} />
      {prediction !== null && <Text>Prediction: {prediction}</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
}

export default Disease;

