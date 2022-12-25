import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import login from './Components/login';
import { createStackNavigator } from '@react-navigation/stack';
// import { AppWrapper, useAuthContext } from './Context/AuthWrapper';
import { useAuthContext } from './Context/AuthWrapper';


export default function MainApp() {
  const Stack = createStackNavigator();
  let {token,setToken}=useAuthContext();

  return (
    <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="login" >
            <Stack.Screen name="Login" component={login} />
            {/* <Stack.Screen name="registration" component={registration} />
          <Stack.Screen name="Home" component={Home} /> */}
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

