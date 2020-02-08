import React, {Component}  from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/HomeScreen.styles';
import FBLogin from './FBLogin';
import { connect } from 'react-redux';
import MovieListScreen from './MovieListScreen';
import {getToken} from '../../actions/authactions';
import {Button} from 'react-native';

class HomeScreen extends Component{

    handlePress = () => {
        console.log(this.props.navigation)
        this.props.navigation.navigate('SignInScreen')
    }

    render(){
        return(
            <>
             {this.props.token === null ? <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.iconimage} source={require('../../images/icon.png')} />
                    </View>
                    <View style={styles.bottom}>
                        <FBLogin />
                        <Button title='sign in with email' onPress={this.handlePress}/>
                    </View>
                </View> :
                <MovieListScreen />}  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.login
    }
}

export default connect(mapStateToProps, {getToken})(HomeScreen)

