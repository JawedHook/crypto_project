import HomeScreen from '../screens/Home.screen';
import { createMaterialBottomTabNavigator, NavigationMaterialBottomTabScreenComponent } from 'react-navigation-material-bottom-tabs';


const MainNavigation: NavigationMaterialBottomTabScreenComponent = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Accueil',
                barStyle: { backgroundColor: 'red' }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default MainNavigation;