import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';
import { logout } from '../actions/authactions';
import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { clearData } from '../storagefunction';

// logout functionality
class RightComponent extends Component {

    removeData = async () => {
        try {
            await AsyncStorage.removeItem('accesstoken');
        } catch (error) {
            console.error(error)
        }
    };

    handlePress = () => {
        LoginManager.logOut();
        this.props.logout();
        clearData();
        this.props.navigation.navigate('HomeScreen');
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text>Logout</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
export default connect(mapStateToProps, { logout })(withNavigation(RightComponent))