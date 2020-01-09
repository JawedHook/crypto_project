import React from 'react';
import { Text, Button } from 'react-native';

import { withNavigation } from 'react-navigation';

const LoginScreen: React.FC<any> = ({ navigation }) => {
  return (
    <>
      <Text>Login view</Text>
      <Button onPress={() => navigation.navigate('Main')} title="Go to main" />
    </>
  );
};

export default withNavigation(LoginScreen);
