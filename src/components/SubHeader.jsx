import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

export default function SubHeader() {
  return (
 
     <LinearGradient style={styles.container} colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}>
<Feather name='map-pin' size={16} color={'#00000'}/>
<Text style={styles.deliver}> Delivery to London - N14 5QN</Text>
<Feather name='arrow-down' size={10} color='#00000'/>
     </LinearGradient>
     
  )
}

const styles = StyleSheet.create({
  container:{
padding:13,
flexDirection:'row',
alignItems:'center',
  },
  deliver:{
    fontSize:13,
    color:'#2c4341',
    paddingHorizontal:6,
  },

});