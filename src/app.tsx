/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { createAppContainer, NavigationContainer } from 'react-navigation';

import SwitchNavigator from './navigations/switch.navigation'

const App = () => {
  const AppNavigation: NavigationContainer = createAppContainer(SwitchNavigator)
  return (
    <>
      <AppNavigation/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
