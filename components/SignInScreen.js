
//This is the original code which should work
// down here
// -----------------------------------------------------------------------


import React, { useState, useEffect } from 'react';
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
import MarqueeView from 'react-native-marquee-view';
import { auth, db } from './Firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { signInWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore';


const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        checkUserLoggedIn();
      }, []);
    
      const checkUserLoggedIn = async () => {
        try {
          // Check if the 'userEmail' and 'userId' are stored in AsyncStorage
          const userEmail = await AsyncStorage.getItem('userEmail');
          const userId = await AsyncStorage.getItem('userId');
    
          // If both userEmail and userId are not null, the user is logged in
          if (userEmail !== null && userId !== null) {
            // User is logged in, navigate to the Home screen
            Alert.alert('User is logged in');
            navigation.replace('HomeDrawer');
          } else {
            // User is not logged in, do nothing (stay on the Login screen)
            Alert.alert('User is not logged in');
          }
        } catch (error) {
          console.error('Error checking user login:', error);
        }
      };
    
      const handleLogin = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
      
          // Store user email and user ID in AsyncStorage for future use
          await AsyncStorage.setItem('userEmail', email);
          await AsyncStorage.setItem('userId', user.uid);
      
          // You can redirect the user to the home screen or another part of the app after successful login.
          Alert.alert('Login Successful');
          navigation.navigate('HomeDrawer');
        } catch (error) {
          console.error('Error signing in:', error);
        }
      };
  

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Signin to get started...</Text>
            <MarqueeView
            style={{
                backgroundColor: 'blue',
                color: '#fff',
                width: 400,
            
            }}>
           
            <View style={{ backgroundColor: 'green' }}>
                <Text>The best prediction app on market</Text>
            </View>
            </MarqueeView>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
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
                    placeholder="Your Password"
                    value={password}
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={text => setPassword(text)}

                   
                
                
                
                
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
                    
                    onPress={handleLogin}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    {/* <Text onPress={() => navigation.navigate('HomeDrawer')}  style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text> */}

                    <Text  style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>  
                    

                </TouchableOpacity>
                 
                <Text style={styles.text}>Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>Sign Up</Text></Text>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignIn;

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
    text: {
        marginTop: 20,
      },
      link: {
        color: 'blue',
      }
  });














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




// const SignIn = ({navigation}) => {

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
//             <Text style={styles.text_header}>Signin to get started...</Text>
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

// export default SignIn;

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