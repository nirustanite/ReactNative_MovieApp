import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/screens/HomeScreen';
import FBLogin from '../components/screens/FBLogin';
import MovieListScreen from '../components/screens/MovieListScreen';
import SearchComponent from '../components/screens/SearchComponent';

const RootStack = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    FBLogin: {screen: FBLogin},
    MovieListScreen: {screen: MovieListScreen},
    SearchComponent: {screen: SearchComponent}
 },{
    initialRouteName: 'HomeScreen', //initial Display Page is HomeScreen
    headerMode: 'none' 
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;