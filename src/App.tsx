import {Provider} from 'react-redux';
import axios from 'axios';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import {Alert, StyleSheet} from 'react-native';
import Mobile from './screens/Mobile';
import {createStore} from 'redux';
import allReducers from './redux/reducers';
import Cart from './screens/Cart';

const store = createStore(allReducers);

function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{title: 'Your Cart'}}
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
