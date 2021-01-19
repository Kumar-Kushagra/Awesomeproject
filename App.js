import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,

  },
  basket:{
    width:250,
    height:250,
    position:"absolute",
    marginTop:300,
    marginStart:150
  }
});
const App = () => {
  return (
      <View style={{ flex: 1,marginTop:40,backgroundColor:'crimson',justifyContent:'center' }}>
       
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <Image
          style={styles.basket}
          source={require('./source/assets/basket.png')}
        />
        <Image
          style={styles.logo}
          source={require('./source/assets/biscuit.png')}
        />
        <Image
          style={styles.logo}
          source={require('./source/assets/biscuit.png')}
        />
        </View>
        <Text style={{color:'white',fontSize:60,fontWeight:'bold',alignSelf:'center' }}>
          Fast Food
      </Text>
    </View>
  );
};
export default App;