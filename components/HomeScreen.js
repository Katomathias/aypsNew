// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';


const HomeScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}>
  <View style={styles.container}>
    <Card containerStyle={styles.card1}>
      <Text style={styles.cardTitle}>Crop Prediction</Text>
      <Text style={styles.cardText}>Sensor Data: Moisture: 30%, Temperature: 25°C</Text>
      <Button
        title="View Data"
        onPress={() => navigation.navigate('Data')}
        buttonStyle={styles.button}
      />
    </Card>

    <Card containerStyle={styles.card2}>
      <Text style={styles.cardTitle}>Crop pests and disease Prediction</Text>
      <Text style={styles.cardText}>This is some additional information you want to display.</Text>
      <Button
        title="View More"
        onPress={() => navigation.navigate('More')}
        buttonStyle={styles.button}
      />
    </Card>
    <Card containerStyle={styles.card3}>
      <Text style={styles.cardTitle}>Crop Price prediction</Text>
      <Text style={styles.cardText}>Sensor Data: </Text>
      <Button
        title="View Data"
        
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