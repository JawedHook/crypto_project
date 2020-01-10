import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { Button } from '@ant-design/react-native';
import { logout } from '../services/firebase.service';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24 }}>Hi {}</Text>
      <Text>Home view</Text>
      <Text>Home view</Text>
      <Text>Home view</Text>
      <Text>Home view</Text>
      <Text>Home view</Text>
      <Button onPress={logout}>Logout</Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
