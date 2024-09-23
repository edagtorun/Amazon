import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

export default function Header() {
  return (
    <View>
      <LinearGradient start={{x:0, y:0}} end={{x:1, y:0}} style={styles.container} colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <View style={styles.inputBox}>
        <View style={styles.row}>
          <Ionicons name="search" size={22} color="#1f1f1f" />
          <TextInput style={styles.textInput} placeholder='Search Amazon' placeholderTextColor={"#848484"}/>
        </View>
<AntDesign name="scan1" size={22} color="#848484"/>
        </View>
        <Feather name="mic" size={22} color="#00000"/>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  inputBox:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#a1bcc0',
    width:'90%',
    justifyContent:'space-between',
    paddingHorizontal:10,
    borderRadius:8,
  },
  row:{
    flexDirection:'row',
    alignItems:"center"
  },
  textInput:{
    padding:8,
  },

});