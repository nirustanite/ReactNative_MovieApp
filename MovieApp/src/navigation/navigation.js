import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../components/screens/SplashScreen';
import HomeScreen from '../components/screens/HomeScreen';
import FBLogin from '../components/screens/FBLogin';
import SignInScreen from '../components/screens/SignInScreen';
import MovieListScreen from '../components/screens/MovieListScreen';
import SearchScreen from '../components/screens/SearchScreen';
import DetailsScreen from '../components/screens/DetailsScreen';

const RootStack = createStackNavigator({
    SplashScreen: {screen: SplashScreen},
    HomeScreen: {screen: HomeScreen},
    FBLogin: {screen: FBLogin},
    SignInScreen: {screen: SignInScreen},
    MovieListScreen: {screen: MovieListScreen},
    DetailsScreen: {screen: DetailsScreen},
    SearchScreen: {screen: SearchScreen},
    
 },{
    initialRouteName: 'SplashScreen', //initial Display Page is HomeScreen
    headerMode: 'none' 
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;