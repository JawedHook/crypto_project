import HomeScreen from '../screens/home.screen';
import { createMaterialBottomTabNavigator, NavigationMaterialBottomTabScreenComponent } from 'react-navigation-material-bottom-tabs';

const MainNavigation: NavigationMaterialBottomTabScreenComponent = createMaterialBottomTabNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarColor: 'blue',
      },
    },
  },
  {
    initialRouteName: 'home',
  },
);

export default MainNavigation;
