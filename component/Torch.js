import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView, TextInput, Image,  View,  Text,  Button,  StatusBar} from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";
import Torch from "react-native-torch";


const lightpage = (   { history }   ) => {

    onPresson = () => {
        Torch.switchState(true)
     }

    offnPressoff = () => {
        Torch.switchState(false)
     }

  return (
  <View>
        <Button title="Home" onPress={() => history.push("/")} />
        <Text> </Text>
        <View style={{alignItems: "center"}} >
             <Button title="ON" style={{backgroundColor:"#40E0Dx", color:"white", width:"80%", height:"20%", textAlign:"center", textAlignVertical:"center", borderRadius:20}} onPress={onPresson}/>
        </View>
        <Text> </Text>
        <View style={{alignItems: "center"}} >
             <Button title="OFF" style={{backgroundColor:"#40E0Dx", color:"white", width:"90%", height:"20%", textAlign:"center", textAlignVertical:"center", borderRadius:20}} onPress={offnPressoff}/>
        </View>
        <Text> </Text>
    </View>
  );
};



export default lightpage;

