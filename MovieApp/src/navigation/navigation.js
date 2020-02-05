import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/screens/HomeScreen';

const RootStack = createStackNavigator({
    HomeScreen: {screen: HomeScreen},

 },{
    initialRouteName: 'HomeScreen', //initial Display Page is HomeScreen
    headerMode: 'none' 
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;