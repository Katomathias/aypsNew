import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground, SafeAreaView } from 'react-native';

const AboutUs = () => {
  return (
    <SafeAreaView>
    <ImageBackground source={require('../assets/about.jpg')} style={styles.backgroundImage}>
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
      Welcome to the Agricultural Yield Prediction System (AYPS), a revolutionary mobile application 
      designed to empower farmers and revolutionize agriculture practices.</Text>
         <Text style={styles.titlesmall}>Purpose</Text>
      <Text style={styles.description} >The AYPS aims to assist farmers in enhancing their crop productivity and profitability
      by delivering accurate and personalized crop yield predictions and recommendations. Leveraging 
      real-time weather data, historical crop performance data, and farm sensor data, our platform equips 
      farmers with invaluable insights to optimize crop selection, planting and harvesting schedules, and 
      resource allocation.</Text>

      <Image source={require('../assets/farmer.jpg')} style={styles.logo}/>

      <Text style={styles.titlesmall}>Product Scope</Text>

      <Text style={styles.description}>
       AYPS is a comprehensive solution offering:
      Crop yield predictions and personalized recommendations based on real-time and historical data.
      Optimization of crop selection and resource allocation.
      Enhanced farm efficiency and sustainability through real-time weather and sensor data.
      Improved decision-making and planning with easy access to historical and current data.


      </Text>
      <Image source={require('../assets/farmer2.jpg')} style={styles.logo}/>

      <Text style={styles.titlesmall}>Overall Description</Text>
      
      <Text style={styles.description}>
      AYPS is an independent system consisting of:
      Web and mobile applications for user accessibility. {"\n"}
      Backend server and database hosting application logic, data, and APIs.{'\n'}
      Cloud service for accessing external data sources.{'\n'}
      Farm sensors (soil moisture, temperature, humidity, pH, nutrient) integrated into the system for real-time 
      monitoring.{'\n'}
      The AYPS is poised to revolutionize farming practices, contributing to increased crop yields, reduced costs, 
      and a sustainable agricultural future. {'\n'}   </Text>
      <Text style={styles.description1}>  Join us in shaping the future of agriculture with AYPS! </Text>

      
      {/* Add more details as needed */}
    </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titlesmall: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  description1: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color:'blue'
  },
});

export default AboutUs;