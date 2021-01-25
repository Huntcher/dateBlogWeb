import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import DateScreen from './screens/DateScreen';

const Stack = createStackNavigator();
 
function App()  {

  return (
    <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: true }}>
              <Stack.Screen name="LoginScreen"
              component={LoginScreen} 
              options={{ headerShown: false}}
                  />
              <Stack.Screen name="ChatScreen"
               component={ChatScreen} 
               options={{ headerShown: false}}
               />
            <Stack.Screen name="DateScreen"
               component={DateScreen}
               options={{ headerShown: false}}
               />
         </Stack.Navigator>
        </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
  }
});

export default App;
