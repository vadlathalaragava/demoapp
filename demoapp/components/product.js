import React, {Component} from 'react';
import {Text,Image,StyleSheet,View,Button, Card, ListItem , Icon} from 'react-native';
export default class Product extends  Component{
    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          };
        return(
            <View> 
            
            <Image source={pic} style={{width: 300, height: 110}}/>
            <Text> Product : Banana</Text>
            <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Text>Price : 45.00</Text>
            <Button title="Add to cart"  backgroundColor='#FF8C00' 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}/> 

            <Button title="Delete"  backgroundColor='#FF0000' 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}/> 

            <Button
            
            title="View Now"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            /> 

         
            </View>
        


        )
    }
}