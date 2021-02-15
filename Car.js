import React from "react";
import { View, Text, Button, ScrollView, StyleSheet  } from "react-native";



const datap = [
       {'Bangla': 'আলিফ', 'Arbi': "ا"},
       {'Bangla': 'বা', 'Arbi': "ب" },
       {'Bangla': 'তা', 'Arbi': "ت" },
       {'Bangla': 'ছা', 'Arbi': "ث"},
       {'Bangla': 'জিম', 'Arbi': "ج" },
       {'Bangla': 'হা', 'Arbi': "ح"},
       {'Bangla': 'খা', 'Arbi': "خ"},
       {'Bangla': 'যাল', 'Arbi':"د" },
       {'Bangla': 'রা', 'Arbi': "ذ"},
       {'Bangla': 'যা', 'Arbi': "ر"},
       {'Bangla': 'সোয়াদ', 'Arbi':"ز" },
       {'Bangla': 'দোয়াদ', 'Arbi': "س"},
       {'Bangla': 'তোয়া', 'Arbi': "ش"},
       {'Bangla': 'যোয়া', 'Arbi': "ص"},
       {'Bangla': 'আইন', 'Arbi': "ض"},
       {'Bangla': 'গাইন', 'Arbi': "ط"},
       {'Bangla': 'ফা', 'Arbi': "ظ"},
       {'Bangla': 'ক্বাফ', 'Arbi': "ع"},
       {'Bangla': 'কাফ', 'Arbi': "غ"},
       {'Bangla': 'লাম', 'Arbi': "ف"},
       {'Bangla': 'মিম', 'Arbi': "ق"},
       {'Bangla': 'নুন', 'Arbi': "ك"},
       {'Bangla': 'ওয়াও', 'Arbi':"ل"},
       {'Bangla': 'হা', 'Arbi': "م"},
       {'Bangla': 'ইয়া', 'Arbi': ""}
]

 export default ({ history }) => (
   <View>
     <Button title="Home" onPress={() => history.push("/")} />
    <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
                {
                datap.map((item) => (
                    <View style = {styles.item}>
                        <Text style={{color:"lightgreen", fontSize:30}}>{item.Bangla}  <Text style={{color:"red"}}>  {item.Arbi} </Text></Text>
                     </View> ))
                 }
                 <Text style={{marginTop:2}}></Text>
        </View>
   </ScrollView>
   </View>
 );



 const styles = StyleSheet.create({
 contentContainer: {
     paddingVertical: 20,
   },

 })