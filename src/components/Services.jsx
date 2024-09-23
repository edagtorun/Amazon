import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import ScanQr from '../assets/scan-qr.jpeg';
import PayBills from '../assets/pay-bills.jpeg';
import { RecentSearchData } from '../data/RecentSearchData';
import ServicesCard from './ServicesCard';


export default function Services() {
  return (
   <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight:20}} style={styles.container}>
    <View style={styles.serviceContainer}> 
        <View style={styles.row}>
        <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imageStyles}/>
            <Text style={styles.title}>Amazon Pay</Text>
        </View>
        <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imageStyles}/>
            <Text style={styles.title}>Send Money</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View style={styles.innerContainer}>
            <Image source={ScanQr} style={styles.imageStyles}/>
            <Text style={styles.title}>Scan Qr</Text>
        </View>
        <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.imageStyles}/>
            <Text style={styles.title}>Pay Bills</Text>
        </View>
        </View>
    </View>
    {
     RecentSearchData.map(item => (
            <ServicesCard key={item.id}  item={item}/>
        ))
    }
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop:-80,
        paddingHorizontal:10,
    },
    serviceContainer:{
        backgroundColor:'#ffff',
        borderRadius:5
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    innerContainer:{
        padding:10,
        alignItems:'center',
        paddingTop:15,
    },
    imageStyles:{
        height:50,
        width:50,
        borderRadius:50,
    },
    title:{
        fontSize:10,
        color:'#00000',
        marginTop:2
    },
    
})