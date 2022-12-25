import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import { useAuthContext } from '../Context/AuthWrapper';


function validation(userName,email,personalName,phoneNumber){
  if(userName!=""&&email!=""&&personalName!=""&&phoneNumber!="")
  {
    return true
  }
  else{
    return false
  }
}
export default function login  ({navigation}) {

  [userName,setUserName]=useState('');
  [email,setEmail]=useState('');
  [returnStatus,setReturnStatus]=useState(false)
  let {token,setToken}=useAuthContext();

  return (
    <View >
      <TextInput 
         label="User Name"
         left={<TextInput.Icon name="account"/>}
         mode="outlined"
        style={{margin:5}}
        outlineColor="yellow"
        activeOutlineColor="red"
        onChangeText={(str)=>setUserName(str)} /> 
        
      <TextInput 
         label="Passward"
         left={<TextInput.Icon name="lock"/>}
         mode="outlined"
         
        style={{margin:5}}
        outlineColor="yellow"
        activeOutlineColor="red"
        onChangeText={(str)=>setEmail(str)}

     />
      
      
      <View style={styles.btnContainer}>
       <Button
        mode="contained"
        buttonColor="red"
        style={styles.btn}
        onPress={()=>setReturnStatus(validation(userName,email,personalName,phoneNumber))}
        >Login</Button>
        <Button
        mode="contained"
        buttonColor="red"
        style={styles.btn}
        onPress={()=> navigation.navigate("Home")}
        >Home</Button>
      <View>
     <TouchableOpacity
      
      onPress={()=> navigation.navigate("registration")}>
     <Text style={styles.paragraph}> For Registration </Text>
     </TouchableOpacity>

      
      </View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    width:100,
    marginTop:10

  },



 
  paragraph: {
    margin: 24,
    fontSize: 18,
    color:'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },



  btnContainer:{
    justifyContent:'center',
    alignItems:'center'
  }
});
