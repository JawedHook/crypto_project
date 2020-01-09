import React from 'react';
import {
  StyleSheet, Text, Button
} from 'react-native';

import { withNavigation } from 'react-navigation'

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <Text>Login view</Text>
      <Button onPress={() => navigation.navigate('Main')} title="Go to main" />
    </>
  );



};

const styles = StyleSheet.create({

});

export default withNavigation(LoginScreen);
