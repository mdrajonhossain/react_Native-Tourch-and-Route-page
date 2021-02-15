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

        <Button title="ON" color="#4B0082" onPress={onPresson}/>
        <Text> </Text>
        <Button title="OFF" color="#4B0082" onPress={offnPressoff}/>

    </View>
  );
};



export default lightpage;

