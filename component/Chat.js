import React from 'react';
import {Text,  Button, TextInput, View, ScrollView, StyleSheet } from 'react-native';


const ChatPageing = (  {history}  ) => {
    const [value, onChangeText] = React.useState('');

    return (
    <View>
        <Button title="Home" onPress={() => history.push("/")} />

    <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{width:"80%", marginLeft:"10%"}}>
            <Text style={{color:"#FF7F50"}}> aName </Text>
            <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />

            <Text style={{color:"#FF7F50"}}> Father Name</Text>
            <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />

            <Text style={{color:"#FF7F50"}}> Mother Name</Text>
            <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />

            <Text style={{color:"#FF7F50"}}> Present Address</Text>
            <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />

            <Text style={{color:"#FF7F50"}}> Permanent Address</Text>
             <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />

            <Text style={{color:"#FF7F50"}}> Date of Birth</Text>
            <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />

            <Text style={{color:"#FF7F50"}}> Phone Number</Text>
            <TextInput style={{ borderRadius:10, height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />
            <Text></Text>
            <View style={{alignItems: "center"}}>
                <Text style={{color:"white", backgroundColor:"#40E0D0", width:"70%", height:"25%", textAlign:"center", textAlignVertical:"center", borderRadius:20}} onPress={() => history.push("/")}>Submit</Text>
            </View>
            <Text></Text>
        </View>
     </ScrollView>
            <Text style={{marginTop:"25%", color:"red"}}>asdfasdf</Text>
     </View>
    );
}

export default ChatPageing;




const styles = StyleSheet.create({
     contentContainer: {
          paddingVertical: 20,
        },
})