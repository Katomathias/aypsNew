// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground , Button, Alert} from 'react-native';

// const ContactUs = ({navigation}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
//     // Submit the form data, e.g., send it to a backend server
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//     // Reset the form fields after submission
//     setName('');
//     setEmail('');
//     setMessage('');
//     // Provide feedback to the user, e.g., "Message sent successfully" or handle errors
//     Alert.alert("Message Received, Thanks for your message")
//   };

//   return (
//     <ImageBackground source={require('../assets/wall.jpg')} style={styles.backgroundImage}>
//     <View style={styles.container}>
//       <Text style={styles.heading}>Contact Us</Text>
//       <Text style={styles.label}>Name:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={text => setName(text)}
//         placeholder="Enter your name"
//       />
//       <Text style={styles.label}>Email:</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={text => setEmail(text)}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//       />
//       <Text style={styles.label}>Message:</Text>
//       <TextInput
//         style={[styles.input, styles.messageInput]}
//         value={message}
//         onChangeText={text => setMessage(text)}
//         placeholder="Enter your message"
//         multiline
//         numberOfLines={4}
//       />
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <Button 
//         title="Go Back"
//         onPress={() => navigation.navigate('Explore')}
//       />
//     </View>
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

import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const developers = [
  {
    id: '1',
    name: 'Kato Mathias Kyeswa Lule',
    role: 'FullStack Developer',
    email: 'mathiaskato5@gmail.com',
    phone: '+256 700158229',
  },
  {
    id: '2',
    name: 'Mugerwa Muhammad',
    role: 'Data Scientist',
    email: 'mugerwa234@gmail.com',
    phone: '+256 759078405',
  },
  {
    id: '3',
    name: 'Bwire Olaka Emmanuel',
    role: 'UI/UX Designer',
    email: 'bwireemm@gmail.com',
    phone: '+256 780558514',
  },
  {
    id: '4',
    name: 'Ojune Emmanuel',
    role: 'Embedded systems Engineer',
    email: 'emmaojune37@gmail.com',
    phone: '+256 757928668',
  },
];

const ContactUs = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/wall1.jpg')} style={styles.backgroundImage}>
      
      <View style={styles.container}>
        
        <View>
        <Text style={styles.heading}>Contact Us</Text>
        <FlatList
          data={developers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
              <Text style={styles.contact}>Email: {item.email}</Text>
              <Text style={styles.contact}>Phone: {item.phone}</Text>
              
            </View>
            
          )}
        />
       </View>
       <View>
       <Button 
        title="Go Back"
        onPress={() => navigation.navigate('Explore')}
      />
       </View>
      </View>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // slightly transparent background
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#333',
  },
});

export default ContactUs;
