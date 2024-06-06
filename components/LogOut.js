// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, navigation, Alert } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StackActions } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
// import { auth } from '../Firebase';


//  const navigate= createNativeStackNavigator()
// const handleLogout = async (navigation) => {
//   try {
//     // Clear AsyncStorage
//     await AsyncStorage.clear();

//     // Log out the user from Firebase
//     await auth.signOut();
//     Alert.alert('User logged out'),
//     navigation.navigate('Splash');

//     // Reset the navigation stack and redirect to the "Login" screen
//     navigation.dispatch(
//       StackActions.replace('Login')
//     );
//   } catch (error) {
//     console.error('Error logging out:', error);
//   }
// };


// const LogOut = ({ navigation }) => {
//   return (
//     // <TouchableOpacity onPress={onPress} style={styles.button}>
//     //   <Text style={styles.buttonText}>Logout</Text>
//     // </TouchableOpacity>

//   //   <TouchableOpacity onPress= {() => this.signOutUser()} style={styles.button}>
//   //   <Text style={styles.buttonText}>Logout</Text>
//   // </TouchableOpacity>
//   <TouchableOpacity onPress= {handleLogout} style={styles.button}>
//     <Text style={styles.buttonText}>Logout</Text>
//   </TouchableOpacity>
  
  


//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#ff6347', // Coral color
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LogOut;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, Button, navigation } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { StackActions } from '@react-navigation/native';
import { auth } from './Firebase';




const LogOut = ({navigation}) => {

  const handleLogout = async () => { // Pass navigation as a parameter
  
    // const navigation = useNavigation();
    try {
      // Clear AsyncStorage
      await AsyncStorage.clear();
  
      // Log out the user from Firebase
      await auth.signOut();
      Alert.alert('User logged out');
  
      // Reset the navigation stack and redirect to the "Landing page" screen
      // navigation.dispatch(
      //   StackActions.replace('Splash')
      // );
      
        navigation.navigate('Splash');
  
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    

        
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
       </TouchableOpacity>


      //    <Button
      //    title="Logout"
      //    onPress={handleLogout(navigation)}
      //    buttonStyle={styles.button}
      //  />
    
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6347', // Coral color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogOut;