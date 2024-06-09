// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground,Alert } from 'react-native';
import { Card } from 'react-native-elements';



const showAlert = () => {
  Alert.alert(
    'Information',
    'We are currently working with Disease Prediction of Maize and we are predicting the following Diseases: Corn_(maize)___Common_rust_, Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot, Corn_(maize)___healthy, Corn_(maize)___Northern_Leaf_Blight',
   
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  );
};

const showCrop = () => {
  Alert.alert(
    'Information',
    'Crops such as "Cassava","Vanilla","Coffee","Cotton" ,"Tea","Tobacco","Groundnuts","Yams","Maize (corn)","Beans","Irish Potato","Matooke","Sweet Banana","Sugarcane...Are predicted basing on the input sensor data provided ',
   
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  );
};
const HomeScreen = ({ navigation }) => (
 
  <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}>
  <View style={styles.container}>
    <Card containerStyle={styles.card1}>
      <Text style={styles.cardTitle}>Crop Classification</Text>
      <Text style={styles.cardText}>We are working with a variety of crops which can be classified for production basing on the sensor data provided.</Text>
      <Button
       
       title="View More"
       onPress={showCrop} 
       buttonStyle={styles.button}
     />
   </Card>

    <Card containerStyle={styles.card2}>
      <Text style={styles.cardTitle}>Crop disease Prediction</Text>
      <Text style={styles.cardText}>This is some additional information about Maize disease Prediction.</Text>
      <Button
       
        title="View More"
        onPress={showAlert} 
        buttonStyle={styles.button}
      />
    </Card>
    <Card containerStyle={styles.card3}>
      <Text style={styles.cardTitle}>Guide</Text>
      <Text style={styles.cardText}>A complete guide is provided to help you use this app efficiently </Text>
      <Button
        title="View Guide"
        onPress={() => navigation.navigate('Guide')}
        buttonStyle={styles.button}
      />
    </Card>
  </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // Stretch the image to cover entire container
      justifyContent: 'center',
    },
  card1: {
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#48764A', // Card background color
  },
  card2: {
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#7BDB7F', // Card background color
  },
  card2: {
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#7BDB7F', // Card background color
  },
  card3: {
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#B0D0B1', // Card background color
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3498db',
  },
});

export default HomeScreen;