import React, { Component } from 'react';
import {View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class LeftComponent extends Component{

    handlePress = () => {
        this.props.navigation.navigate('SearchComponent')
    }

    render() {
       return(
        <React.Fragment>
            <TouchableOpacity onPress={this.handlePress}>
                <Image
                    source={require('../images/searchicon.png')}
                    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
                />
            </TouchableOpacity>
        </React.Fragment>
        )
    }
}

export default withNavigation(LeftComponent)