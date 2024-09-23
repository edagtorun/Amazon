import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';


export default function ServicesCard({item}) {
  return (
    <View style={styles.outerConatiner}>
            <Text style={styles.recentSearch}>{item.title}</Text>
            <Image source={item.image} style={styles.serviceImage}/>
        </View>
        )
};


const styles = StyleSheet.create({
    outerConatiner:{
        backgroundColor:'#ffff',
        marginLeft:8,
        width:140,
        padding:5,
        borderRadius:5
    },
    recentSearch:{
        fontSize:13,
        marginBottom:8,
        color:'#000000'
    },
    serviceImage:{
        width:'100%',
        height:130
    },
})