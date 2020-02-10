import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, Text } from 'react-native';
import { logout } from '../actions/authactions';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

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
        this.props.logout();
        this.removeData();
        this.props.navigation.navigate('HomeScreen')
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