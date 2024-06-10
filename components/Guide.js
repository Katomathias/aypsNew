// import React from 'react';
// import { ScrollView, View, Text, StyleSheet, Button, Alert,ImageBackground } from 'react-native';

// const Guide = ({ navigation }) => {
//   const showAlert = () => {
//     Alert.alert(
//       'Alert',
//       'Button Pressed!',
//       [
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
   
//     <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}>
//       <ScrollView style={styles.container}>
//       <Text style={styles.header}>User Manual</Text>
//       <Text style={styles.sectionHeader}>1. Introduction</Text>
//       <Text style={styles.paragraph}>
//         Welcome to the app! This manual will guide you through the basic functionalities.
//       </Text>

//       <Text style={styles.sectionHeader}>2. Picking an Image</Text>
//       <Text style={styles.paragraph}>
//         To pick an image from your camera roll, press the "Pick an image from camera roll" button. You will be prompted to select an image from your gallery.
//       </Text>

//       <Text style={styles.sectionHeader}>3. Taking a Photo</Text>
//       <Text style={styles.paragraph}>
//         To take a new photo, press the "Take a photo" button. This will open your camera, allowing you to capture a new image.
//       </Text>

//       <Text style={styles.sectionHeader}>4. Uploading an Image</Text>
//       <Text style={styles.paragraph}>
//         Once you have selected or captured an image, press the "Upload Image" button to send it to the server for processing. You will receive a prediction based on the uploaded image.
//       </Text>

//       <Text style={styles.sectionHeader}>5. Viewing Data</Text>
//       <Text style={styles.paragraph}>
//         To view the data and predictions, press the "View Data" button. This will display the results.
//       </Text>

//       <Text style={styles.sectionHeader}>6. Refreshing the State</Text>
//       <Text style={styles.paragraph}>
//         To reset the app and start over, press the "Refresh" button. This will clear all current selections and predictions.
//       </Text>

//       <Text style={styles.sectionHeader}>7. Button Alert Example</Text>
//       <Text style={styles.paragraph}>
//         Here is an example of a button that triggers an alert:
//       </Text>
//       <Button title="Press Me" onPress={showAlert} style={styles.button} />

//       <Text style={styles.sectionHeader}>8. Conclusion</Text>
//       <Text style={styles.paragraph}>
//         We hope this manual helps you navigate through the app. If you have any questions or need further assistance, feel free to reach out to our support team.
//       </Text>
//     </ScrollView>
//     </ImageBackground>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   sectionHeader: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   paragraph: {
//     fontSize: 16,
//     lineHeight: 24,
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover', // Stretch the image to cover entire container
//     justifyContent: 'center',
//   },
// });

// export default Guide;

import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Alert, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Guide = ({ navigation }) => {
  const showAlert = () => {
    Alert.alert(
      'Alert',
      'Button Pressed!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    
    <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}>
     
      <View style={styles.overlay}>
      <View>
          <Button 
        title="Go Back"
        onPress={() => navigation.navigate('HomeDrawer')}
      />
          </View>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>User Manual</Text>
          <Text style={styles.sectionHeader}>1. Introduction</Text>
          <Text style={styles.paragraph}>
            Welcome to the app! This manual will guide you through the basic functionalities.
          </Text>

          <Text style={styles.sectionHeader}>2. Predict Crop</Text>
          <Text style={styles.paragraph}>
            To predict a crop, press the bottom tab which has 'Predict Crop'. You will be be able to see an input field whose inputs are viewed from the
            sensor screen and once they are entered, press the predict button And the most suitable crop to grow will be returned.
          </Text>

          <Text style={styles.sectionHeader}>3. Predict Maize Disease</Text>
          <Text style={styles.paragraph}>
            To take predict maize disease, press the "Take a photo" button. This will open your camera, allowing you to capture a new image and take a photo of that maize leaf. Alternatively, you can pick an image from the camera roll. 
            This will open your camera, allowing you to capture a new image. The image is displayed and press the predict button. A result will be returned to that page showing the leaf status in terms of disease.
          </Text>
          
          <Text style={styles.sectionHeader}>4. Refreshing the State</Text>
          <Text style={styles.paragraph}>
            To reset the page and start over, press the "Refresh" button. This will clear all current selections and predictions.
          </Text>

          <Text style={styles.sectionHeader}>5. Uploading an Image</Text>
          <Text style={styles.paragraph}>
            Once you have selected or captured an image, press the "Upload Image" button to send it to the server for processing. You will receive a prediction based on the uploaded image.
          </Text>

          <Text style={styles.sectionHeader}>6. Viewing Data</Text>
          <Text style={styles.paragraph}>
            To view the data and predictions, press the "Prediction" button. This will display the results.
          </Text>

          <Text style={styles.sectionHeader}>7. Explore Tab</Text>
          <Text style={styles.paragraph}>
            This tab has the logout module of this app, Current Weather tab which can navigate you to a weather forecast component, Useful Agricultural links to important site, About Us page and a Contact Us page
          </Text>

          <Text style={styles.sectionHeader}>8. Button Alert Example</Text>
          <Text style={styles.paragraph}>
            Here is an example of a button that triggers an alert:
          </Text>
          <Button title="Press Me" onPress={showAlert} style={styles.button} />

          <Text style={styles.sectionHeader}>8. Conclusion</Text>
          <Text style={styles.paragraph}>
            We hope this manual helps you navigate through the app. If you have any questions or need further assistance, feel free to reach out to our support team.
          </Text>
          
        </ScrollView>
      </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(245, 245, 245, 0.8)', // Semi-transparent background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Stretch the image to cover the entire container
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
});

export default Guide;

