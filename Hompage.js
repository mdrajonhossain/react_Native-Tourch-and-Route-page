import React from "react";

import { View, Text, Button, BackHandler  } from "react-native";

onPressonexit = () => {
        BackHandler.exitApp();
     }


 export default ({ history }) => (
   <View style={{backgroundColor:"lightgray"}}>
                 <Button title="exit" style={{width:"40%"}} color="red" onPress={onPressonexit}/>
                 <Text></Text>
                 <Button title="Torch" onPress={() => history.push("/Torchpage")} color="lightgreen"/>
                 <Text></Text>
                 <Button title="Add Form" onPress={() => history.push("/ChatPage")} color="#569999"/>
                 <Text></Text>
                  <Button title="আরবী বর্মালা" onPress={() => history.push("/Carpage")} color="#4B0082"/>
                 <Text></Text>
                 <Button title="নক্তা যুক্ত হরফ ও নক্তা বিহীন হরফ" color="#4B0082"/>
                 <Text></Text>
                 <Button title="যবর যের ও পেশ এর ব্যবহার" color="#4B0082"/>
                 <Text></Text>
                 <Button title="দুই যবর দুই যের ও দুই পেশ এর ব্যবহার" color="#4B0082"/>
                 <Text></Text>
                 <Button title="মাখরায কয়টি ও কি কি" color="#4B0082"/>
                 <Text></Text>
                 <Button title="মাখরায কয়টি ও কি কি" color="#4B0082"/>
                 <Text></Text>
                 <Button title="আরবী হরফ" color="#4B0082"/>
                 <Text></Text>
                 <Button title="নক্তা যুক্ত হরফ ও নক্তা বিহীন হরফ" color="#4B0082"/>
                 <Text></Text>
                 <Button title="যবর যের ও পেশ এর ব্যবহার" color="#4B0082"/>
                 <Text></Text>
                 <Button title="দুই যবর দুই যের ও দুই পেশ এর ব্যবহার" color="#4B0082"/>
                 <Text></Text>
                 <Button title="মাখরায কয়টি ও কি কি" color="#4B0082"/>
                 <Text></Text>
                 <Button title="মাখরায কয়টি ও কি কি" color="#4B0082"/>
                 <Text></Text>
                 <Button title="নক্তা যুক্ত হরফ ও নক্তা বিহীন হরফ" color="#4B0082"/>
                 <Text></Text>
                 <Button title="যবর যের ও পেশ এর ব্যবহার" color="#4B0082"/>
                 <Text></Text>
                 <Button title="দুই যবর দুই যের ও দুই পেশ এর ব্যবহার" color="#4B0082"/>
                 <Text></Text>
                 <Button title="মাখরায কয়টি ও কি কি" color="#4B0082"/>
                 <Text></Text>
                 <Button title="মাখরায কয়টি ও কি কি" color="#4B0082"/>
                 <Text></Text>
                 <Text style={{color:"white", alignItems:"center", justifyContent:"center",flex: 1,}}>Power By: Md. Rajon Hossain</Text>
                 <Text style={{marginTop:80}}></Text>

   </View>
 );
