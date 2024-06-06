
// import React from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Linking } from 'react-native';





// const Linkss = () => {
//     const links = [
//       { id: '1', title: 'Agricultural News', url: 'https://www.monitor.co.ug/uganda/magazines/farming' },
//       { id: '2', title: 'Crop Management Techniques', url: 'https://agrierp.com/blog/integrated-crop-management/' },
//       { id: '3', title: 'Soil Health and Fertility', url: 'http://www.soilhealth.com/' },
//       { id: '4', title: 'Pest Control Methods', url: 'https://www.fieldroutes.com/blog/pest-control-methods/' },
//       { id: '5', title: 'Farm Equipment and Machinery', url: 'https://www.deere.com/en/agriculture/' },
//     ];
  
//     const handleLinkPress = (url) => {
//       Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
//     };
  
//     const renderItem = ({ item }) => (
//       <TouchableOpacity onPress={() => handleLinkPress(item.url)} style={styles.item}>
//         <Text style={styles.title}>{item.title}</Text>
//       </TouchableOpacity>
//     );
  
//     return (
//       <ImageBackground source={require('../assets/wall1.jpg')} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <FlatList
//           data={links}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </View>
//       </ImageBackground>
//     );
//   };
  
  
// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   grid: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: '#0DDB14',
//     padding: 20,
//     margin: 10,
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cardText: {
//     color: 'white',
//     fontSize: 16,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     backgroundColor: '#0DDB14',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 18,
//   },
// });

// export default Linkss;




import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, } from 'react-native';

const Linkss = () => {
  const links = [
    { id: '1', title: 'Agricultural News', url: 'https://www.monitor.co.ug/uganda/magazines/farming' },
    { id: '2', title: 'Crop Management Techniques', url: 'https://agrierp.com/blog/integrated-crop-management/' },
    { id: '3', title: 'Soil Health and Fertility', url: 'http://www.soilhealth.com/' },
    { id: '4', title: 'Pest Control Methods', url: 'https://www.fieldroutes.com/blog/pest-control-methods/' },
    { id: '5', title: 'Farm Equipment and Machinery', url: 'https://www.deere.com/en/agriculture/' },
  ];

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  return (
   
    <View style={styles.container}>
      {links.map((link) => (
        <TouchableOpacity key={link.id} onPress={() => handleLinkPress(link.url)} style={styles.item}>
          <Text style={styles.title}>{link.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#0DDB14',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default Linkss;

