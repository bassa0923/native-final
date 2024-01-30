import {Provider} from 'react-redux';
import axios from 'axios';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import {Alert, StyleSheet} from 'react-native';
import Mobile from './screens/Mobile';
import Store from './redux/store';
function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Mobile"
            component={Mobile}
            options={{title: 'Mobile/Phone'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// screenOptions={{headerShown: false}}

const css = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
});
