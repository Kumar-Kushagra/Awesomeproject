// // // // /**
// // // //  * Sample React Native App
// // // //  * https://github.com/facebook/react-native
// // // //  *
// // // //  * @format
// // // //  * @flow strict-local
// // // //  */

// // // // import React from 'react';
// // // // import {
// // // //   SafeAreaView,
// // // //   StyleSheet,
// // // //   ScrollView,
// // // //   View,
// // // //   Text,
// // // //   StatusBar,
// // // // } from 'react-native';

// // // // import {
// // // //   Header,
// // // //   LearnMoreLinks,
// // // //   Colors,
// // // //   DebugInstructions,
// // // //   ReloadInstructions,
// // // // } from 'react-native/Libraries/NewAppScreen';

// // // // const App: () => React$Node = () => {
// // // //   return (
// // // //     <>
// // // //       <StatusBar barStyle="dark-content" />
// // // //       <SafeAreaView>
// // // //         <ScrollView
// // // //           contentInsetAdjustmentBehavior="automatic"
// // // //           style={styles.scrollView}>
// // // //           <Header />
// // // //           {global.HermesInternal == null ? null : (
// // // //             <View style={styles.engine}>
// // // //               <Text style={styles.footer}>Engine: Hermes</Text>
// // // //             </View>
// // // //           )}
// // // //           <View style={styles.body}>
// // // //             <View style={styles.sectionContainer}>
// // // //               <Text style={styles.sectionTitle}>Step One</Text>
// // // //               <Text style={styles.sectionDescription}>
// // // //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
// // // //                 screen and then come back to see your edits.
// // // //               </Text>
// // // //             </View>
// // // //             <View style={styles.sectionContainer}>
// // // //               <Text style={styles.sectionTitle}>See Your Changes</Text>
// // // //               <Text style={styles.sectionDescription}>
// // // //                 <ReloadInstructions />
// // // //               </Text>
// // // //             </View>
// // // //             <View style={styles.sectionContainer}>
// // // //               <Text style={styles.sectionTitle}>Debug</Text>
// // // //               <Text style={styles.sectionDescription}>
// // // //                 <DebugInstructions />
// // // //               </Text>
// // // //             </View>
// // // //             <View style={styles.sectionContainer}>
// // // //               <Text style={styles.sectionTitle}>Learn More</Text>
// // // //               <Text style={styles.sectionDescription}>
// // // //                 Read the docs to discover what to do next:
// // // //               </Text>
// // // //             </View>
// // // //             <LearnMoreLinks />
// // // //           </View>
// // // //         </ScrollView>
// // // //       </SafeAreaView>
// // // //     </>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   scrollView: {
// // // //     backgroundColor: Colors.lighter,
// // // //   },
// // // //   engine: {
// // // //     position: 'absolute',
// // // //     right: 0,
// // // //   },
// // // //   body: {
// // // //     backgroundColor: Colors.white,
// // // //   },
// // // //   sectionContainer: {
// // // //     marginTop: 32,
// // // //     paddingHorizontal: 24,
// // // //   },
// // // //   sectionTitle: {
// // // //     fontSize: 24,
// // // //     fontWeight: '600',
// // // //     color: Colors.black,
// // // //   },
// // // //   sectionDescription: {
// // // //     marginTop: 8,
// // // //     fontSize: 18,
// // // //     fontWeight: '400',
// // // //     color: Colors.dark,
// // // //   },
// // // //   highlight: {
// // // //     fontWeight: '700',
// // // //   },
// // // //   footer: {
// // // //     color: Colors.dark,
// // // //     fontSize: 12,
// // // //     fontWeight: '600',
// // // //     padding: 4,
// // // //     paddingRight: 12,
// // // //     textAlign: 'right',
// // // //   },
// // // // });

// // // // export default App;
// // // // import React from 'react';
// // // // import { View, StyleSheet, Text, } from 'react-native';


// // // // const FlexDirectionBasics = () => {
// // // //   return (
// // // //     <View style={{ flex: 1, aspectRatio:0, margin: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
// // // //       <View style={{ width: 350, borderRadius: 100, flexDirection: 'row', height: 350, backgroundColor: 'steelblue' }} />
// // // //     </View >
// // // //   );
// // // // };

// // // // export default FlexDirectionBasics;
// // // import React, { useState } from "react";
// // // import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// // // const App = () => {
// // //   const [count, setCount] = useState(0);
// // //   const onPress = () => setCount(prevCount => prevCount + 1);

// // //   return (
// // //     <View style={styles.container}>
// // //       <View style={styles.countContainer}>
// // //       <View style={styles.box}>
// // //         <Text>Count of button press: {count}</Text>
// // //         </View>
// // //       </View>
// // //       <TouchableOpacity
// // //         style={styles.button}
// // //         onPress={onPress}
// // //       >
// // //         <Text>Press Here</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent:'center',
// // //     paddingHorizontal: 50,
// // //     backgroundColor:"white"
// // //   },

// // //   button: {
// // //     alignItems: "center",
// // //     backgroundColor: "orange",
// // //     padding:80,
// // //     borderBottomEndRadius:100,
// // //     borderTopStartRadius:100

// // //   },
// // //   countContainer: {
// // //     alignItems: "center",
// // //     padding:5
// // //   }
// // // });

// // // export default App;
// // import React from 'react';
// // import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// // export default class App extends React.Component {
// //     state = {
// //         email: "",
// //         password: ""
// //     }
// //     render() {
// //         return (
// //             <View style={styles.container}>
// //                 <Text style={styles.logo}>Welcome</Text>
// //                 <View style={styles.inputView}>
// //                 <TextInput
// //                     style={styles.inputText}
// //                     placeholder="Email..."
// //                     placeholderTextColor="#003f5c"
// //                     onChangeText={text => this.setState({ email: text })} />
// //                 </View>
// //                 <View style={styles.inputView}>
// //                 <TextInput  
// //                    style={styles.inputText}
// //                    placeholder="Password..." 
// //                    placeholderTextColor="#003f5c"
// //                    onChangeText={text => this.setState({password:text})}/>
// //                 </View>
// //                 <TouchableOpacity>
// //                     <Text style={styles.forgot}>Forgot Password?</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity style={styles.loginBtn}>
// //                     <Text style={styles.loginText}>LOGIN</Text>
// //                 </TouchableOpacity>

// //                 <TouchableOpacity>
// //                     <Text style={styles.loginText}>Signup</Text>
// //                 </TouchableOpacity>
// //             </View >
// //         );
// //     }
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,

// //         margin:50,
// //         borderTopStartRadius:250,
// //         borderBottomEndRadius: 250,
// //         backgroundColor: 'rosybrown',
// //         alignItems:'center',
// //         justifyContent: 'center',

// //     },

// //     logo: {
// //         fontWeight: "bold",
// //         fontSize: 50,
// //         color: 'midnightblue',
// //         marginBottom: 40
// //     },

// //     inputView: {
// //         width: "80%",
// //         backgroundColor: "ivory",
// //         borderRadius: 25,
// //         height: 50,
// //         marginBottom: 20,
// //         justifyContent: "center",
// //         padding: 10
// //     },
// //     inputText: {
// //         height: 50,
// //         color: 'black'
// //     },

// //     forgot: {
// //         color: "darkred",
// //         fontSize: 15
// //     },
// //     loginBtn: {
// //         width: "80%",
// //         backgroundColor:'olivedrab',
// //         borderRadius: 25,
// //         height: 50,
// //         alignItems: "center",
// //         justifyContent: "center",
// //         marginTop: 40,
// //         marginBottom: 10
// //     },
// //     loginText:{
// //         color:'white'
// //       }

// // });


// import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     margin:200,
//     alignItems:'center'

//   },
//   tinyLogo: {

//     borderRadius:1000,
//     width: 250,
//     height:250,
//     margin:10,

//   },
// });

// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://www.fnordware.com/superpng/pnggrad8rgb.png',
//         }}
//       />

//     </View>
//   );
// }

// export default DisplayAnImage;
// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };

// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//       <Text style={styles.text}>Welcome to React-Native</Text>
//     </ImageBackground>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   text: {

//     color: "white",
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "darkslategrey"
//   }
// });

// export default App;

import React, {useState} from 'react';
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from 'react-native';

const dummyArray = [
  {id: '1', value: 'A'},
  {id: '2', value: 'B'},
  {id: '3', value: 'C'},
  {id: '4', value: 'D'},
  {id: '5', value: 'E'},
  {id: '6', value: 'F'},
  {id: '7', value: 'G'},
  {id: '8', value: 'H'},
  {id: '9', value: 'I'},
  {id: '10', value: 'J'},
  {id: '11', value: 'K'},
  {id: '12', value: 'L'},
  {id: '13', value: 'M'},
  {id: '14', value: 'N'},
  {id: '15', value: 'O'},
  {id: '16', value: 'P'},
  {id: '17', value: 'Q'},
  {id: '18', value: 'R'},
  {id: '19', value: 'S'},
  {id: '20', value: 'T'},
  {id: '21', value: 'U'},
  {id: '22', value: 'V'},
  {id: '23', value: 'W'},
  {id: '24', value: 'X'},
  {id: '25', value: 'Y'},
  {id: '26', value: 'Z'},
];

const App = () => {
  const [listItems, setListItems] = useState(dummyArray);

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View>
        <Text
          style={styles.item}
          onPress={() => getItem(item)}>
          {item.value}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0.5,
              width: '100%',
              backgroundColor: 'blue'
          }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + ' Value: ' + item.value);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    
  },
  item: {
      alignItems:'center',
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;