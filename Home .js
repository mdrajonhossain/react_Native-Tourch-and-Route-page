import React from 'react';
import {  SafeAreaView,  StyleSheet,  ScrollView, TextInput, Image,  View,  Text,  Button,  StatusBar,} from 'react-native';
import {  Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';


const Home = () => {


  return (
  <View>
  <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style={{backgroundColor:"black", marginTop:-20}}>
        <Image style={styles.tinyLogo} source={{uri: 'https://muslimmatters.org/wp-content/uploads/shutterstock_60478804-e1586745305866.jpg',}}/>
        <Text style={styles.title}> ইসলামি শিক্ষা </Text>


    </View>
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
    color:"white",
    fontSize: 66,
    fontFamily: "Cochin",
    fontWeight: "bold"
  },

tinyLogo: {
    marginLeft:150,
    marginTop:20,
    width: 120,
    height: 120,
    borderRadius:290,
  },

})

export default Home;

