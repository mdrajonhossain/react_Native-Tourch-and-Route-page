import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView, TextInput, Image,  View,  Text,  Button,  StatusBar,} from 'react-native';
import {  Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { NativeRouter, Switch, Route } from "react-router-native";
import Hompage from './Hompage';
import Car from './Car';
import lightpage from './component/Torch';
import ChatPageing from './component/Chat';


const App = () => {


  return (
  <View>
    <View style={{backgroundColor:"black", marginTop:-15}}>
        <Image style={styles.tinyLogo} source={{uri: 'https://muslimmatters.org/wp-content/uploads/shutterstock_60478804-e1586745305866.jpg'}}/>
        <Text style={styles.title}> আরবী শিক্ষা </Text>
    </View>


  <ScrollView contentContainerStyle={styles.contentContainer}>
        <NativeRouter>
            <Switch>
                <View>
                    <Route exact path="/" component={Hompage} />
                    <Route path="/Carpage" component={Car} />
                    <Route path="/Torchpage" component={lightpage} />
                    <Route path="/ChatPage" component={ChatPageing} />
                </View>
            </Switch>
        </NativeRouter>
    </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({

contentContainer: {
    paddingVertical: 20,
  },

title: {
    textAlign: 'center',
    alignItems: 'center',
    color:"lightgray",
    fontSize: 65,
    fontFamily: "Cochin",
    fontWeight: "bold"
  },

tinyLogo: {
    marginLeft:150,
    width: 50,
    left:40,
    top:15,
    height: 50,
    borderRadius:290,
  },

})

export default App;

