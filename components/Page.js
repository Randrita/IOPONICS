import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

export default function App() {
  return(
  <View style={stylesheet._1}>
    
    <Text style={stylesheet._aAA0UA5TzBy5lBzIyg0iq}>General Stats</Text>
   
    <Image
      style={stylesheet._Wzxix_2JakAZzJHik7v_n}
      source={require('H:/native/Inshorts/assets/temparature.png')}
    />

    <Text style={stylesheet.temp}>32°C</Text>
    
   
    <Image
      style={stylesheet._D5ShmD6LpYZjnCPj2c9ug}
      source={require('H:/native/Inshorts/assets/humidity.png')}
    ></Image>
    <Text style={stylesheet.humi}>85%</Text>
    <Image
      style={stylesheet._j_KPAKfEIgQvzKzRBr7Nu}
      source={require('H:/native/Inshorts/assets/water.png')}
    ></Image>
    <Text style={stylesheet.watertemp}>27°C</Text>
    <Image
      style={stylesheet._g4naAO264zE8Hek5fYhBU}
      source={require('H:/native/Inshorts/assets/ph.png')}
    ></Image>
    <Text style={stylesheet.phtxt}>4.7</Text>
    <Text style={stylesheet._YqNeZ0T2_B_uokSLIGOUV}>Sensors Data</Text>
    <Image
      style={stylesheet.waterLevel}
      source={require('H:/native/Inshorts/assets/waterLevel.png')}
    ></Image>
    <Text style={stylesheet.WL}>50 cm</Text>
  </View>);
}
const stylesheet = StyleSheet.create({
  _aAA0UA5TzBy5lBzIyg0iq:{
  position: "absolute",
  left: 28,
  top: 36,
  width: 165,
  height: 29,
  color: "rgba(0, 0, 0, 1)",
  fontSize: 24,
  fontFamily: "Montserrat",
  letterSpacing: -0.5,
  fontStyle: "normal",
  fontWeight: 'bold',
  textAlign: "left",},

  _Wzxix_2JakAZzJHik7v_n:{
  
  position: "absolute",
  left: 25,
  top: 85,
  width: 180,
  height: 216,
  
},

  _D5ShmD6LpYZjnCPj2c9ug:{
  position: "absolute",
  left: 215,
  top: 80,
  width: 180,
  height: 222,},

  _j_KPAKfEIgQvzKzRBr7Nu:{
  position: "absolute",
  left: 24,
  top: 291,
  width: 180,
  height: 217,},

  _g4naAO264zE8Hek5fYhBU:{
  position: "absolute",
  left: 213,
  top: 289,
  width: 180,
  height: 222,},

  _YqNeZ0T2_B_uokSLIGOUV:{
  position: "absolute",
  left: 28,
  top: 510,
  width: 162,
  height: 29,
  color: "rgba(0, 0, 0, 1)",
  fontSize: 24,
  fontFamily: "Montserrat",
  letterSpacing: -0.5,
  fontStyle: "normal",
  fontWeight: 'bold',
  textAlign: "left",},

  waterLevel:{
    position: "absolute",
    left: 15,
    top: 555,
    width: 380,
    height: 180,

  },

  temp:{
    position: "absolute",
    left: 35,
    top: 119,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontFamily: "Montserrat",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: 'bold',
    textAlign: "left",


  },

  humi:{
    position: "absolute",
    left: 223,
    top: 119,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontFamily: "Montserrat",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: 'bold',
    textAlign: "left",

  },

  watertemp:{
    position: "absolute",
    left: 35,
    top: 338,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontFamily: "Montserrat",
    letterSpacing: -0.5,
    fontStyle: "normal",
    fontWeight: 'bold',
    textAlign: "left",

  },

  phtxt:{
  
        position: "absolute",
        left: 225,
        top: 338,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 24,
        fontFamily: "Montserrat",
        letterSpacing: -0.5,
        fontStyle: "normal",
        fontWeight: 'bold',
        textAlign: "left",
    
      },

      WL:{
  
        position: "absolute",
        left: 39,
        top: 592,
        color: "rgba(0, 0, 0, 1)",
        fontSize: 24,
        fontFamily: "Montserrat",
        letterSpacing: -0.5,
        fontStyle: "normal",
        fontWeight: 'bold',
        textAlign: "left",
    
      },


  _1: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 896,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
