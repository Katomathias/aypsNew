// import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
// import { storage } from './Firebase'; // Import your Firebase configuration
// import { Button, Image, View, Text, ActivityIndicator } from 'react-native';

// export default function Disease() {
//  const [image, setImage] = useState(null);
//  const [isImagePicked, setIsImagePicked] = useState(false);
//  const [isUploading, setIsUploading] = useState(false);
//  const [inferenceResults, setInferenceResults] = useState(null);
//  const [firebaseImageUrl, setFirebaseImageUrl] = useState(null); // State to store Firebase image URL
//  const [predictionData, setPredictionData] = useState({});


//  const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: false,
//       aspect: [16, 9],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//       setIsImagePicked(true);

//       // Call function to upload image to Firebase Storage
//       uploadImageToFirebase(result.assets[0].uri);
//     }
//  };

//  const uploadImageToFirebase = async (imageUri) => {
//    setIsUploading(true); // Set uploading state to true
//    try {
//      const response = await fetch(imageUri);
//      const blob = await response.blob();
//      const storageRef = ref(storage, 'images/' + Date.now()); // Generate a unique filename using the current timestamp
//      const uploadTask = uploadBytesResumable(storageRef, blob);

//      uploadTask.on('state_changed',
//        (snapshot) => {
//          // Progress updates here (optional)
//        },
//        (error) => {
//          console.error('Error uploading image:', error);
//          setIsUploading(false); // Reset uploading state to false
//        },
//        () => {
//          // Upload completed successfully, now we can get the download URL
//          getDownloadURL(uploadTask.snapshot.ref)
//            .then((downloadURL) => {
//              // Store the Firebase image URL in state
//              setFirebaseImageUrl(downloadURL);
//              setIsUploading(false); // Reset uploading state to false
//            })
//            .catch((error) => {
//              console.error('Error getting download URL:', error);
//              setIsUploading(false); // Reset uploading state to false
//            });
//        }
//      );
//    } catch (error) {
//      console.error('Error uploading image:', error);
//      setIsUploading(false); // Reset uploading state to false
//    }
//  };

//  const handleButtonPress = async () => {
//    if (isImagePicked && !isUploading) {
//      // If image is selected and not currently uploading, send inference request
//      sendInferenceRequest();
//    } else if (!isImagePicked && !isUploading) {
//      // If image is not selected and not currently uploading, pick an image
//      pickImage();
//    }
//  };

//  const sendInferenceRequest = async () => {
//   if (firebaseImageUrl) {
//     const endpointUrl = "http://192.168.43.5:8000/api/upload-image/";
//     const requestData = {
//       "image_url": firebaseImageUrl,
//     };

//     try {
//       const response = await axios.post(endpointUrl, requestData, {
//         responseType: 'text', // Explicitly set the response type to text
//       });
//       console.log("Raw response data:", response.data); // Log the raw response data

//       // Check if the response content-type is JSON
//       if (response.headers['content-type']?.includes('application/json')) {
//         const parsedData = JSON.parse(response.data);
//         setPredictionData(parsedData); // Update state with prediction data
//       } else {
//         console.error("Received non-JSON response:", response.data);
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error("Error sending inference request or parsing response:", error.response.data);
//       } else if (error.request) {
//         console.error("Error sending inference request:", error.request);
//       } else {
//         console.error("Error sending inference request:", error.message);
//       }
//     }
//   } else {
//     console.error("Firebase image URL not available.");
//   }
// };



// const displayResults = () => {
//   return (
//     <View>
//       {Object.keys(predictionData).length > 0 && (
//         <>
//           <Text>Prediction: {predictionData.prediction || 'No prediction available'}</Text>
//           {/* Render other prediction details as needed */}
//         </>
//       )}
//     </View>
//   );
// };

//  return (
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//   {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//   <Button
//     title={isUploading? "Uploading Image..." : isImagePicked? "Diagnose" : "Pick an image from camera roll"}
//     onPress={handleButtonPress}
//     disabled={isUploading}
//   />
//   {displayResults()}
// </View>
//  );
// }
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
import { storage } from './Firebase'; // Import your Firebase configuration
import { Button, Image, View, Text } from 'react-native';

export default function Disease() {
 const [image, setImage] = useState(null);
 const [isImagePicked, setIsImagePicked] = useState(false);
 const [isUploading, setIsUploading] = useState(false);
 const [inferenceResults, setInferenceResults] = useState(null);
 const [firebaseImageUrl, setFirebaseImageUrl] = useState(null); // State to store Firebase image URL
 const [predictionData, setPredictionData] = useState({});

 const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setIsImagePicked(true);
    }
 };

 const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setIsImagePicked(true);
    }
 };

 const uploadImageToFirebase = async (imageUri) => {
   setIsUploading(true); // Set uploading state to true
   try {
     const response = await fetch(imageUri);
     const blob = await response.blob();
     const storageRef = ref(storage, 'images/' + Date.now()); // Generate a unique filename using the current timestamp
     const uploadTask = uploadBytesResumable(storageRef, blob);

     uploadTask.on('state_changed',
       (snapshot) => {
         // Progress updates here (optional)
       },
       (error) => {
         console.error('Error uploading image:', error);
         setIsUploading(false); // Reset uploading state to false
       },
       () => {
         // Upload completed successfully, now we can get the download URL
         getDownloadURL(uploadTask.snapshot.ref)
           .then((downloadURL) => {
             // Store the Firebase image URL in state
             setFirebaseImageUrl(downloadURL);
             setIsUploading(false); // Reset uploading state to false
             // Call function to send inference request
             sendInferenceRequest(downloadURL);
           })
           .catch((error) => {
             console.error('Error getting download URL:', error);
             setIsUploading(false); // Reset uploading state to false
           });
       }
     );
   } catch (error) {
     console.error('Error uploading image:', error);
     setIsUploading(false); // Reset uploading state to false
   }
 };

 const sendInferenceRequest = async (imageUrl) => {
  if (imageUrl) {
    const endpointUrl = "http://49.13.143.118:8005/api/upload-image/";
    const requestData = {
      "image_url": imageUrl,
    };

    try {
      const response = await axios.post(endpointUrl, requestData, {
        responseType: 'text', // Explicitly set the response type to text
      });
      console.log("Raw response data:", response.data); // Log the raw response data

      // Check if the response content-type is JSON
      if (response.headers['content-type']?.includes('application/json')) {
        const parsedData = JSON.parse(response.data);
        setPredictionData(parsedData); // Update state with prediction data
      } else {
        console.error("Received non-JSON response:", response.data);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error sending inference request or parsing response:", error.response.data);
      } else if (error.request) {
        console.error("Error sending inference request:", error.request);
      } else {
        console.error("Error sending inference request:", error.message);
      }
    }
  } else {
    console.error("Firebase image URL not available.");
  }
 };

 const handleButtonPress = async () => {
   if (isImagePicked && !isUploading) {
     // If image is selected and not currently uploading, upload the image to Firebase
     uploadImageToFirebase(image);
   } else if (!isImagePicked && !isUploading) {
     // If image is not selected and not currently uploading, pick an image
     pickImage();
   }
 };

 const resetState = () => {
   setImage(null);
   setIsImagePicked(false);
   setIsUploading(false);
   setInferenceResults(null);
   setFirebaseImageUrl(null);
   setPredictionData({});
 };

 const displayResults = () => {
  return (
    <View style={styles.resultContainer}>
      {Object.keys(predictionData).length > 0 && (
        <>
          <Text style={styles.resultText}>Prediction: {predictionData.prediction || 'No prediction available'}</Text>
          {/* Render other prediction details as needed */}
        </>
      )}
    </View>
  );
};

 return (
  
  <View style={styles.container}>
  {image && <Image source={{ uri: image }} style={styles.image} />}
  <View style={styles.buttonContainer}>
    <Button
      title={isUploading ? "Uploading Image..." : isImagePicked ? "Diagnose" : "Pick an image from camera roll"}
      onPress={handleButtonPress}
      disabled={isUploading}
      color="#6200ee"
    />
    <Button
      title="Take a photo"
      onPress={takePhoto}
      disabled={isUploading}
      color="#6200ee"
    />
    <Button
      title="Refresh"
      onPress={resetState}
      disabled={isUploading}
      color="#6200ee"
    />
  </View>
  {displayResults()}
</View>

 );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    color: '#333',
  },
};

