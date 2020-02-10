import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/LeftComponent.styles';


// displaying the search icon 
class LeftComponent extends Component {

    handlePress = () => {
        this.props.navigation.navigate('SearchScreen')
    }

    render() {
        return (
            <React.Fragment>
                <TouchableOpacity onPress={this.handlePress}>
                    <Image
                        source={require('../images/searchicon.png')}
                        style={styles.imagecontainer}
                    />
                </TouchableOpacity>
            </React.Fragment>
        )
    }
}

export default withNavigation(LeftComponent)

