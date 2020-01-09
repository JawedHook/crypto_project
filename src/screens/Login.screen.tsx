import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '@ant-design/react-native';

import { withNavigation } from 'react-navigation';

const LoginScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View>
      <Text>Login view</Text>
      <Button onPress={() => navigation.navigate('Main')}>Go to main</Button>
    </View>
  );
};

export default withNavigation(LoginScreen);
