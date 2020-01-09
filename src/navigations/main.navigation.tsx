import HomeScreen from '../screens/home.screen';
import { createMaterialBottomTabNavigator, NavigationMaterialBottomTabScreenComponent } from 'react-navigation-material-bottom-tabs';

const MainNavigation: NavigationMaterialBottomTabScreenComponent = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarColor: 'blue',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default MainNavigation;
