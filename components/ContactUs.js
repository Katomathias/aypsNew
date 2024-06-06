import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Submit the form data, e.g., send it to a backend server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    // Provide feedback to the user, e.g., "Message sent successfully" or handle errors
  };

  return (
    <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        value={message}
        onChangeText={text => setMessage(text)}
        placeholder="Enter your message"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top', // for multiline TextInput to start from the top
  },
  submitButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});

export default ContactUs;



// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
// import firebase from 'firebase/app';
// // import 'firebase/firestore';
// import { auth, db } from '../Firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { addDoc, collection } from 'firebase/firestore';


// // Initialize Firebase with your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDhWIFgLVjjOtkXnGkZROnN5aozAGGxbMc",
//   authDomain: "ayps-43101.firebaseapp.com",
//   projectId: "ayps-43101",
//   storageBucket: "ayps-43101.appspot.com",
//   messagingSenderId: "902874833305",
//   appId: "1:902874833305:web:9fe0f88d63fb59c8f33308",
//   measurementId: "G-CWQ6Y05XQR"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // if already initialized, use that one
// }

// const ContactUs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
//     // Send message to Firebase Firestore
//     firebase.firestore().collection('messages').add({
//       name: name,
//       email: email,
//       message: message
//     })
//     .then(() => {
//       console.log('Message sent successfully!');
//       // Reset form fields
//       setName('');
//       setEmail('');
//       setMessage('');
//       // Provide feedback to the user, e.g., "Message sent successfully"
//     })
//     .catch(error => {
//       console.error('Error sending message:', error);
//       // Handle error, e.g., display error message to the user
//     });
//   };

//   return (
//     <ImageBackground source={require('../../assets/wall.jpeg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <Text style={styles.heading}>Contact Us</Text>
//         <Text style={styles.label}>Name:</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={text => setName(text)}
//           placeholder="Enter your name"
//         />
//         <Text style={styles.label}>Email:</Text>
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={text => setEmail(text)}
//           placeholder="Enter your email"
//           keyboardType="email-address"
//         />
//         <Text style={styles.label}>Message:</Text>
//         <TextInput
//           style={[styles.input, styles.messageInput]}
//           value={message}
//           onChangeText={text => setMessage(text)}
//           placeholder="Enter your message"
//           multiline
//           numberOfLines={4}
//         />
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   messageInput: {
//     height: 100,
//     textAlignVertical: 'top', // for multiline TextInput to start from the top
//   },
//   submitButton: {
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     padding: 10,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center'
//   }
// });

// export default ContactUs;