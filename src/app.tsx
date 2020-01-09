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
import { Provider } from 'react-redux';
import { createAppContainer, NavigationContainer } from 'react-navigation';

import store from './redux/store';
import SwitchNavigation from './navigations/switch.navigation';

const App = () => {
  const AppNavigation: NavigationContainer = createAppContainer(SwitchNavigation);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
