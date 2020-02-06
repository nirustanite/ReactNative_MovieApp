import React, {Component}  from 'react';
import { View, Image } from 'react-native';
import styles from '../../styles/HomeScreen.styles';
import FBLogin from './FBLogin';
import { connect } from 'react-redux';
import MovieListScreen from './MovieListScreen';

class HomeScreen extends Component{
    render(){
        return(
            <>
             {this.props.token !== null ? <View style={styles.container}>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.iconimage} source={require('../../images/icon.png')} />
                    </View>
                    <View style={styles.bottom}>
                        <FBLogin />
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

export default connect(mapStateToProps)(HomeScreen)