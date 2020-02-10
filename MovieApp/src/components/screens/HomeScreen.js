import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/HomeScreen.styles';
import FBLogin from './FBLogin';
import { connect } from 'react-redux';
import MovieListScreen from './MovieListScreen';
import { Button } from 'react-native';
import buttonstyles from '../../styles/Buttons.styles';

// The HomeScreen which displays the image and The login options.
class HomeScreen extends Component {

    handlePress = () => {
        // Navigate to Sign In screen when clicked on the Sign in button
        this.props.navigation.navigate('SignInScreen')
    }

    render() {
        return (
            <>
                {this.props.token === null ? <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.iconimage} source={require('../../images/icon.png')} />
                    </View>
                    <View style={styles.bottom}>
                        <FBLogin />
                        <Button style={buttonstyles.button} title='sign in with email' onPress={this.handlePress} />
                    </View>
                </View> :
                    <MovieListScreen />}
            </>
        )
    }
}

// mapStateToProps is used for selecting part of data from the store. 
// fetching token from the store
const mapStateToProps = (state) => {
    return {
        token: state.login
    }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps)(HomeScreen)

