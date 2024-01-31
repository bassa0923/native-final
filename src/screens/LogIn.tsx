/* eslint-disable prettier/prettier */

import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

function LogIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedEmail, setFocusedEmail] = useState(false);
  const [isFocusedPassword, setFocusedPassword] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  async function getUser() {
    try {
      const response = await axios.get(
        'https://veli.store/api/user/user_info',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUser(response.data);
    } catch (e) {
      setError(JSON.stringify(e.response.data));
    }
  }

  async function handlePress() {
    try {
      setError('');
      const response = await axios.post(
        'https://veli.store/api/user/user_auth/login/',
        {
          email: email,
          password: password,
        },
      );
      setToken(response.data?.access);
      // AsyncStorage.setItem('token', response.data?.access);
      await getUser();
      navigation.navigate('Mobile');
    } catch (e) {
      Alert.alert(JSON.stringify(e.response.data.detail));
      setError(JSON.stringify(e.response.data.detail));
    }
  }

  return (
    <>
      <View>
        <Text style={css.company}>VELI</Text>
      </View>
      <View style={css.container}>
        <TextInput
          style={[css.input, isFocusedEmail ? css.borderColor : css.input]}
          placeholder="email"
          keyboardType="email-address"
          value={email}
          onChangeText={value => setEmail(value)}
          onFocus={() => setFocusedEmail(true)}
          onBlur={() => setFocusedEmail(false)}
        />
        <TextInput
          secureTextEntry={true}
          style={[css.input, isFocusedPassword ? css.borderColor : css.input]}
          placeholder="password"
          value={password}
          onChangeText={value => setPassword(value)}
          onFocus={() => setFocusedPassword(true)}
          onBlur={() => setFocusedPassword(false)}
        />
        <TouchableOpacity onPress={handlePress}>
          <Text style={css.logIn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const css = StyleSheet.create({
  company: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 70,
    color: 'black',
    backgroundColor: '#B4D984',
    fontStyle: 'normal',
    fontFamily: 'sans-serif',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#B8B8B8',
    paddingLeft: 14,
  },
  borderColor: {
    borderColor: '#52CC7A',
  },
  logIn: {
    height: 54,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#000000',
    borderRadius: 8,
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 16,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default LogIn;
