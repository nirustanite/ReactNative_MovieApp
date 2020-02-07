import React, {Component} from 'react';
import { withNavigation } from 'react-navigation';
import {TouchableOpacity, Text} from 'react-native';
import {logout} from '../actions/authactions';
import {connect} from 'react-redux';

class RightComponent extends Component{

    handlePress = () => {
        this.props.logout();
        this.props.navigation.navigate('HomeScreen')
    }   

    render(){
        return(
            <TouchableOpacity onPress={this.handlePress}>
                <Text>Logout</Text>
            </TouchableOpacity>
        )
    }
}

export default connect(null,{logout})(withNavigation(RightComponent))