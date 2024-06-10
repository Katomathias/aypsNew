
//This is the original code which should work
// down here
// -----------------------------------------------------------------------


import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { auth, db } from './Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';  
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore';

const RegisterScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSignUp = async () => {
        

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
        
            // After successful registration, add the user details to a "users" collection
            const usersRef = collection(db, 'users');
            await addDoc(usersRef, { 
              uid: user.uid,
              username,
              
            });
        
            // Store user email and user ID in AsyncStorage for future use
            await AsyncStorage.setItem('userEmail', email);
            await AsyncStorage.setItem('userId', user.uid);
             
            // You can also redirect the user to the home screen or another part of the app here,
            Alert.alert('Registration has successfully been done');
            navigation.navigate('Signin');
          } catch (error) {
            console.error('Error registering user:', error);
          }
    };
    

    
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Username"
                    value={username}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={text => setUsername(text)}
                    
                    
                />
                
                
            </View>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Email"
                    value={email}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={text => setEmail(text)}
                    
                    
                />
                
                
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    
                />
                
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    onChangeText={text => setPasswordConfirmation(text)}
                    secureTextEntry
                    style={styles.textInput} 
                    autoCapitalize="none"
                    
                />
                
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
            

                <TouchableOpacity
                    // onPress={() => navigation.goBack()}
                    onPress={handleSignUp}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Register</Text>
            
                </TouchableOpacity>
                <Text style={styles.text}>Have an account? <Text style={styles.link} onPress={() => navigation.navigate('Signin')}>Sign In</Text></Text>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    link: {
        color: 'blue',
      }
  });



//This is the original code which should work for signin screen
// down here
// -----------------------------------------------------------------------




// import React, { useState } from 'react';
// import { 
//     View, 
//     Text, 
//     Button, 
//     TouchableOpacity, 
//     Dimensions,
//     TextInput,
//     Platform,
//     StyleSheet,
//     ScrollView,
//     StatusBar,
//     Alert
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import MarqueeView from 'react-native-marquee-view';
// import {auth} from './Firebase';




// const RegisterScreen = ({navigation}) => {

//   const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignIn = () => {
//         auth
//         .createUserWithEmailAndPassword(email,password)
//         .then(userCredentials =>{
//             const user = userCredentials.user;
//             console.log(user.email)
//         })
//         .catch(error => alert(error.message))
//     }
  

//     return (
//       <View style={styles.container}>
//           <StatusBar backgroundColor='#009387' barStyle="light-content"/>
//         <View style={styles.header}>
//             <Text style={styles.text_header}>Register to get started...</Text>
//             <MarqueeView
//             style={{
//                 backgroundColor: 'blue',
//                 color: '#fff',
//                 width: 400,
            
//             }}>
           
//             <View style={{ backgroundColor: 'green' }}>
//                 <Text>The best prediction app on market</Text>
//             </View>
//             </MarqueeView>
//         </View>
//         <Animatable.View 
//             animation="fadeInUpBig"
//             style={styles.footer}
//         >
//             <ScrollView>
//             <Text style={styles.text_footer}>Email</Text>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Email"
//                     value={email}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={setEmail}
                    
                
//                 />
                
//             </View>

//             <Text style={[styles.text_footer, {
//                 marginTop: 35
//             }]}>Password</Text>
//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Password"
//                     value={password}
//                     secureTextEntry
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={setPassword}
                
//                 />
               
//             </View>

            
//             <View style={styles.textPrivate}>
//                 <Text style={styles.color_textPrivate}>
//                     By signing up you agree to our
//                 </Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
//                 <Text style={styles.color_textPrivate}>{" "}and</Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
//             </View>
//             <View style={styles.button}>
                
//                 <TouchableOpacity
                    
//                     onPress={handleSignIn}
//                     style={[styles.signIn, {
//                         borderColor: '#009387',
//                         borderWidth: 1,
//                         marginTop: 15
//                     }]}
//                 >
                    

//                     <Text  style={[styles.textSign, {
//                         color: '#009387'
//                     }]}>Sign In</Text>  
                    

//                 </TouchableOpacity>
//                 <Text style={styles.text}>Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>Sign Up</Text></Text>
//             </View>
//             </ScrollView>
//         </Animatable.View>
//       </View>
//     );
// };

// export default RegisterScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#009387'
//     },
//     header: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 20,
//         paddingBottom: 50
//     },
//     footer: {
//         flex: Platform.OS === 'ios' ? 3 : 5,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 30
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 30
//     },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     textPrivate: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 20
//     },
//     color_textPrivate: {
//         color: 'grey'
//     },
//     text: {
//         marginTop: 20,
//       },
//       link: {
//         color: 'blue',
//       }
//   });